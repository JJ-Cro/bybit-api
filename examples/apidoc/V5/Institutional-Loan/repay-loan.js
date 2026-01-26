// https://api.bybit.com/v5/ins-loan/repay-loan

const { RestClientV5 } = require('bybit-api');

const client = new RestClientV5({
  testnet: true,
  key: 'apikey',
  secret: 'apisecret',
});

client
  .repayInstitutionalLoan({
    token: 'USDT',
    quantity: '500000',
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
