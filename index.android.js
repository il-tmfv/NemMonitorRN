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

export default class NemMonitorRN extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, price: 100.00 }
  }

  onUpdate = () => {
    ToastAndroid.show('Starting to fetch data...', ToastAndroid.SHORT);
    this.setState({ loading: true, price: this.state.price + 1 });
    setTimeout(() => {
      console.log('unclick');
      this.setState({ loading: false });
      ToastAndroid.show('Success!', ToastAndroid.SHORT);
    }, 5000);
  }

  render() {
    const { loading, price } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.currencies}>
          <Price currency="BTC" amount={price}/>
          <Price currency="USD" amount={321.01}/>
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
