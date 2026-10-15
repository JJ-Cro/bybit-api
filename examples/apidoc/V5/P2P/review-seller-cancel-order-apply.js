import { RestClientV5 } from 'bybit-api';

// https://bybit-exchange.github.io/docs/p2p/order/review-seller-cancel-order-apply
const client = new RestClientV5({
  testnet: true,
  key: 'YOUR_API_KEY',
  secret: 'YOUR_API_SECRET',
});

client
  .reviewP2PSellerCancelOrderApply({
    orderId: '1899736339155943424',
    examineResult: 'REJECT',
    rejectReason: 'buyerRefuseOrderCancelReason_haveMadePayment',
    rejectProofs: 'https://example.com/proof.jpg',
    rejectRemark: 'Payment was already sent.',
  })
  .then((response) => {
    console.log('Response:', response);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
