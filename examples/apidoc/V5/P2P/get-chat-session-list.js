import { RestClientV5 } from 'bybit-api';

// https://bybit-exchange.github.io/docs/p2p/chat/get-chat-session-list
const client = new RestClientV5({
  testnet: true,
  key: 'YOUR_API_KEY',
  secret: 'YOUR_API_SECRET',
});

client
  .getP2PChatSessions({
    lastId: 0, // Use 0 for the first page
    size: 10,
    readStatus: 2, // 0: unread; 1: read; 2: all
    // type: 'SINGLE', // Optional: SINGLE or GROUP
  })
  .then((response) => {
    console.log('Chat sessions:', response.result.chatSession);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
