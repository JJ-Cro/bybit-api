// https://api.bybit.com/v5/asset/covert/small-balance-list

const { RestClientV5 } = require('bybit-api');

const client = new RestClientV5({
  testnet: true,
  key: 'apikey',
  secret: 'apisecret',
});

client
  .getSmallBalanceList({
    accountType: 'eb_convert_uta',
    fromCoin: 'XRP',
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
