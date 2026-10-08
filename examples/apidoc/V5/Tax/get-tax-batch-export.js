import { RestClientV5 } from 'bybit-api';
// or, if require is preferred:
// const { RestClientV5 } = require('bybit-api');

const client = new RestClientV5({
  testnet: true,
  key: 'apikey',
  secret: 'apisecret',
});

client
  .getTaxBatchExport({
    batchId: 'b5f4a3e2-1c8d-4f96-9a03-2e7b8c6d4f10',
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
