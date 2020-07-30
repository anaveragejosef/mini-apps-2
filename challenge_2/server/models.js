const axios = require('axios');

const getClosingPrices = callback => {
  axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?currency=EUR&start=2020-01-01&end=2020-07-29')
    .then(response => callback(null, response.data.bpi))
    .catch(error => callback(error));
}

module.exports = { getClosingPrices };
