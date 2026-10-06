import { RestClientV5 } from 'bybit-api';
// or, if require is preferred:
// const { RestClientV5 } = require('bybit-api');

const client = new RestClientV5({
  testnet: true,
  key: 'apikey',
  secret: 'apisecret',
});

client
  .createTaxBatchExport({
    startTime: 1756684800,
    endTime: 1788220800,
    items: [
      { type: 'TRADE', number: '1' },
      { type: 'EARN', number: '1' },
      { type: 'DEPOSIT&WITHDRAWAL', number: '1' },
    ],
    sourceInstitution: 'INST_A',
    exportFileType: 'csv',
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
