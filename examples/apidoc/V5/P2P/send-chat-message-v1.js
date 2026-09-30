import { RestClientV5 } from 'bybit-api';

// https://bybit-exchange.github.io/docs/p2p/chat/send-chat-msg
const client = new RestClientV5({
  testnet: true,
  key: 'YOUR_API_KEY',
  secret: 'YOUR_API_SECRET',
});

client
  .sendP2PChatMessage({
    message: 'Hello, I have paid.', // For files, use the URL from uploadP2PChatFile
    contentType: 'str', // str: text; pic: image; pdf: PDF; video: video
    sessionId: 'AES_ENCRYPTED_SESSION_ID', // From getP2PChatSessionId
    orderId: 'YOUR_ORDER_ID',
  })
  .then((response) => {
    console.log('Response:', response);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
