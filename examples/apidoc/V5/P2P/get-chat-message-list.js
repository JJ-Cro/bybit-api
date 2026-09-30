import { RestClientV5 } from 'bybit-api';

// https://bybit-exchange.github.io/docs/p2p/chat/get-message-list
const client = new RestClientV5({
  testnet: true,
  key: 'YOUR_API_KEY',
  secret: 'YOUR_API_SECRET',
});

client
  .getP2PChatMessages({
    lastId: 0, // Start from the latest message
    limit: 10, // Maximum 30
    sessionId: 'AES_ENCRYPTED_SESSION_ID',
  })
  .then((response) => {
    console.log('Chat messages:', response.result.messages);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
