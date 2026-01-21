// https://api.bybit.com/v5/spot-margin-trade/get-auto-repay-mode

const { RestClientV5 } = require('bybit-api');

const client = new RestClientV5({
  testnet: true,
  key: 'apikey',
  secret: 'apisecret',
});

client
  .getAutoRepayMode({
    currency: 'ETH', // optional
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
