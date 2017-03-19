import React, { Component, PropTypes } from 'react';
import { 
  Text,
  View,
  StyleSheet,
} from 'react-native';

export default class Price extends Component {
  render() {
    const { currency, amount } = this.props;

    return (
      <View style={styles.self}>
        <Text style={styles.amount}>{amount}</Text>
        <Text style={styles.currency}>{currency}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  self: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  amount: {
    backgroundColor: '#F5FCFF',
    fontSize: 64,
    paddingRight: 10,
  },
  currency: {
    fontSize: 62,
    textAlign: 'center',
    margin: 10,
  },
});
