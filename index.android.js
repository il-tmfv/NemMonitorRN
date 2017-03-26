/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { observer } from 'mobx-react/native';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  ActivityIndicator,
  View,
  ToastAndroid,
} from 'react-native';

import Price from 'app/components/Price';
import CurrencyBlock from 'app/components/CurrencyBlock';
import Fetcher from 'app/services/Fetcher';
import appState from 'app/state/state';

@observer
export default class NemMonitorRN extends Component {
  constructor(props) {
    super(props);
  }

  fetchPrice() {
    appState.loading = true;
    Fetcher.getPrice();
  }

  componentDidMount() {
    this.fetchPrice();
  }

  onUpdate = () => {
    ToastAndroid.show('Starting to fetch data...', ToastAndroid.SHORT);
    this.fetchPrice();
  }

  render() {
    const { currencies, loading } = appState;

    return (
      <View style={styles.container}>
        <View style={styles.currencyBlocks}>
          {currencies.map((currency, key) => (
            <CurrencyBlock
              currency={currency.currency}
              priceBtc={currency.currencyPriceInBtc}
              priceUsd={currency.currencyPriceInUsd}
              key={key}
            />
          ))}
        </View>
        <View style={styles.buttons}>
          <Button
            disabled={loading}
            onPress={this.onUpdate}
            title="Update"
            color="green"
            accessibilityLabel="Reload data from server"
          />
          <ActivityIndicator animating={loading} size={60} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  currencyBlocks: {
    flex: 0.75,
  },
  buttons: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('NemMonitorRN', () => NemMonitorRN);
