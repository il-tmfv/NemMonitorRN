import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Price from 'app/components/Price';

class CurrencyBlock extends Component {
  static propTypes = {
    currency: PropTypes.string.isRequired,
    priceBtc: PropTypes.string.isRequired,
    priceUsd: PropTypes.string.isRequired,
  }

  render() {
    const {
      currency,
      priceBtc,
      priceUsd,
    } = this.props;

    return (
      <View style={styles.currencyBlock}>
          <Text>{currency}</Text>
          <Price currency="BTC" amount={priceBtc}/>
          <Price currency="USD" amount={priceUsd}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  currencurrencyBlockcies: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  },
});

export default CurrencyBlock;