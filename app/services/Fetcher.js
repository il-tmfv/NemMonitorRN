import axios from 'axios';
import appState from 'app/state/state';

const currencies = ['XEM', 'STRAT'];

export default class Fetcher {
  
  static doPoloniexRequiest() {
    return axios.get('https://poloniex.com/public?command=returnTicker');
  }

  static doBlockchainRequiest() {
    return axios.get('https://blockchain.info/ticker?cors=true');
  }

  static getPrice() {
    axios.all([Fetcher.doPoloniexRequiest(), Fetcher.doBlockchainRequiest()])
      .then(axios.spread((polo, block) => {
        const btcPriceInUsd = +block.data.USD.last;
        const result = currencies.map(currency => {
          const currencyPriceInBtc = +polo.data[`BTC_${currency}`].last;
          const currencyPriceInUsd = (currencyPriceInBtc * btcPriceInUsd).toFixed(3);
          return { currency, currencyPriceInBtc: currencyPriceInBtc.toString(), currencyPriceInUsd };
        });
        appState.currencies = result;
        appState.loading = false;
      }));
  }
}