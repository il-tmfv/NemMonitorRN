/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
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
import Fetcher from 'app/services/Fetcher';

export default class NemMonitorRN extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, priceUsd: 0.00, priceBtc: 0 }
  }

  fetchPrice() {
    this.setState({ loading: true, price: this.state.price + 1 });
    Fetcher.getPrice((priceUsd, priceBtc) => this.setState({ priceUsd, priceBtc, loading: false }));
  }

  componentDidMount() {
    this.fetchPrice();
  }

  onUpdate = () => {
    ToastAndroid.show('Starting to fetch data...', ToastAndroid.SHORT);
    this.fetchPrice();
  }

  render() {
    const { loading, priceUsd, priceBtc } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.currencies}>
          <Price currency="BTC" amount={priceBtc}/>
          <Price currency="USD" amount={priceUsd}/>
        </View>
        <View style={styles.buttons}>
          <Button
            disabled={loading}
            onPress={this.onUpdate}
            title="Update"
            color="green"
            accessibilityLabel="Reload data from server"
          />
          <ActivityIndicator animating={loading} size={60}/>
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
  currencies: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('NemMonitorRN', () => NemMonitorRN);
