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
  View
} from 'react-native';

import Price from 'app/components/Price';

export default class NemMonitorRN extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.currencies}>
          <Price currency="BTC" amount={123.00}/>
          <Price currency="USD" amount={321.01}/>
        </View>
        <View style={styles.buttons}>
          <Button
            title="Update"
            color="green"
            accessibilityLabel="Reload data from server"
          />
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
