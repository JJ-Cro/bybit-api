import { RestClientV5 } from 'bybit-api';

// https://bybit-exchange.github.io/docs/p2p/chat/get-session-id
const client = new RestClientV5({
  testnet: true,
  key: 'YOUR_API_KEY',
  secret: 'YOUR_API_SECRET',
});

client
  .getP2PChatSessionId({
    userMaskId: 'COUNTERPARTY_USER_MASK_ID', // targetUserMaskId from order detail
  })
  .then((response) => {
    console.log('Session ID:', response.result.sessionId);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
