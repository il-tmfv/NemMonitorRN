import axios from 'axios';

export default class Fetcher {
  static doPoloniexRequiest() {
    return axios.get('https://poloniex.com/public?command=returnTicker');
  }

  static doBlockchainRequiest() {
    return axios.get('https://blockchain.info/ticker?cors=true');
  }

  static getPrice(cb) {
    axios.all([Fetcher.doPoloniexRequiest(), Fetcher.doBlockchainRequiest()])
      .then(axios.spread((polo, block) => {
        const nemPriceInBtc = +polo.data.BTC_XEM.last;
        const btcPriceInUsd = +block.data.USD.last;
        const usdPrice = (nemPriceInBtc * btcPriceInUsd).toFixed(3);
        cb(usdPrice, nemPriceInBtc);
      }));
  }
}