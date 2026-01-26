
# Endpoint maps

<p align="center">
  <a href="https://www.npmjs.com/package/bybit-api">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/tiagosiebler/bybit-api/blob/master/docs/images/logoDarkMode2.svg?raw=true#gh-dark-mode-only">
      <img alt="SDK Logo" src="https://github.com/tiagosiebler/bybit-api/blob/master/docs/images/logoBrightMode2.svg?raw=true#gh-light-mode-only">
    </picture>
  </a>
</p>

Each REST client is a JavaScript class, which provides functions individually mapped to each endpoint available in the exchange's API offering. 

The following table shows all methods available in each REST client, whether the method requires authentication (automatically handled if API keys are provided), as well as the exact endpoint each method is connected to.

This can be used to easily find which method to call, once you have [found which endpoint you're looking to use](https://github.com/tiagosiebler/awesome-crypto-examples/wiki/How-to-find-SDK-functions-that-match-API-docs-endpoint).

All REST clients are in the [src](/src) folder. For usage examples, make sure to check the [examples](/examples) folder.

List of clients:
- [rest-client-v5](#rest-client-v5ts)
- [websocket-api-client](#websocket-api-clientts)


If anything is missing or wrong, please open an issue or let us know in our [Node.js Traders](https://t.me/nodetraders) telegram group!

## How to use table

Table consists of 4 parts:

- Function name
- AUTH
- HTTP Method
- Endpoint

**Function name** is the name of the function that can be called through the SDK. Check examples folder in the repo for more help on how to use them!

**AUTH** is a boolean value that indicates if the function requires authentication - which means you need to pass your API key and secret to the SDK.

**HTTP Method** shows HTTP method that the function uses to call the endpoint. Sometimes endpoints can have same URL, but different HTTP method so you can use this column to differentiate between them.

**Endpoint** is the URL that the function uses to call the endpoint. Best way to find exact function you need for the endpoint is to search for URL in this table and find corresponding function name.


# rest-client-v5.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [rest-client-v5.ts](/src/rest-client-v5.ts). 

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| [getSystemStatus()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L432) | :closed_lock_with_key:  | GET | `/v5/system/status` |
| [getServerTime()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L449) |  | GET | `/v5/market/time` |
| [requestDemoTradingFunds()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L461) | :closed_lock_with_key:  | POST | `/v5/account/demo-apply-money` |
| [createDemoAccount()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L474) | :closed_lock_with_key:  | POST | `/v5/user/create-demo-member` |
| [getSpreadInstrumentsInfo()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L487) |  | GET | `/v5/spread/instrument` |
| [getSpreadOrderbook()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L499) |  | GET | `/v5/spread/orderbook` |
| [getSpreadTickers()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L509) |  | GET | `/v5/spread/tickers` |
| [getSpreadRecentTrades()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L520) |  | GET | `/v5/spread/recent-trade` |
| [submitSpreadOrder()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L531) | :closed_lock_with_key:  | POST | `/v5/spread/order/create` |
| [amendSpreadOrder()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L544) | :closed_lock_with_key:  | POST | `/v5/spread/order/amend` |
| [cancelSpreadOrder()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L556) | :closed_lock_with_key:  | POST | `/v5/spread/order/cancel` |
| [cancelAllSpreadOrders()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L574) | :closed_lock_with_key:  | POST | `/v5/spread/order/cancel-all` |
| [getSpreadOpenOrders()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L593) | :closed_lock_with_key:  | GET | `/v5/spread/order/realtime` |
| [getSpreadOrderHistory()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L610) | :closed_lock_with_key:  | GET | `/v5/spread/order/history` |
| [getSpreadTradeHistory()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L626) | :closed_lock_with_key:  | GET | `/v5/spread/execution/list` |
| [getKline()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L646) |  | GET | `/v5/market/kline` |
| [getMarkPriceKline()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L661) |  | GET | `/v5/market/mark-price-kline` |
| [getIndexPriceKline()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L676) |  | GET | `/v5/market/index-price-kline` |
| [getPremiumIndexPriceKline()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L691) |  | GET | `/v5/market/premium-index-price-kline` |
| [getInstrumentsInfo()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L706) |  | GET | `/v5/market/instruments-info` |
| [getOrderbook()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L717) |  | GET | `/v5/market/orderbook` |
| [getRPIOrderbook()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L731) |  | GET | `/v5/market/rpi_orderbook` |
| [getTickers()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L737) |  | GET | `/v5/market/tickers` |
| [getFundingRateHistory()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L775) |  | GET | `/v5/market/funding/history` |
| [getPublicTradingHistory()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L790) |  | GET | `/v5/market/recent-trade` |
| [getOpenInterest()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L803) |  | GET | `/v5/market/open-interest` |
| [getHistoricalVolatility()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L813) |  | GET | `/v5/market/historical-volatility` |
| [getInsurance()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L824) |  | GET | `/v5/market/insurance` |
| [getRiskLimit()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L835) |  | GET | `/v5/market/risk-limit` |
| [getOptionDeliveryPrice()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L850) |  | GET | `/v5/market/delivery-price` |
| [getDeliveryPrice()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L863) |  | GET | `/v5/market/delivery-price` |
| [getNewDeliveryPrice()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L879) |  | GET | `/v5/market/new-delivery-price` |
| [getLongShortRatio()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L895) |  | GET | `/v5/market/account-ratio` |
| [getIndexPriceComponents()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L905) |  | GET | `/v5/market/index-price-components` |
| [getOrderPriceLimit()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L911) |  | GET | `/v5/market/price-limit` |
| [getADLAlert()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L925) |  | GET | `/v5/market/adlAlert` |
| [getFeeGroupStructure()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L938) |  | GET | `/v5/market/fee-group-info` |
| [submitOrder()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L950) | :closed_lock_with_key:  | POST | `/v5/order/create` |
| [amendOrder()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L956) | :closed_lock_with_key:  | POST | `/v5/order/amend` |
| [cancelOrder()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L962) | :closed_lock_with_key:  | POST | `/v5/order/cancel` |
| [getActiveOrders()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L971) | :closed_lock_with_key:  | GET | `/v5/order/realtime` |
| [cancelAllOrders()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L977) | :closed_lock_with_key:  | POST | `/v5/order/cancel-all` |
| [getHistoricOrders()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L990) | :closed_lock_with_key:  | GET | `/v5/order/history` |
| [getExecutionList()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1002) | :closed_lock_with_key:  | GET | `/v5/execution/list` |
| [batchSubmitOrders()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1020) | :closed_lock_with_key:  | POST | `/v5/order/create-batch` |
| [batchAmendOrders()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1045) | :closed_lock_with_key:  | POST | `/v5/order/amend-batch` |
| [batchCancelOrders()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1070) | :closed_lock_with_key:  | POST | `/v5/order/cancel-batch` |
| [getSpotBorrowCheck()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1092) | :closed_lock_with_key:  | GET | `/v5/order/spot-borrow-check` |
| [setDisconnectCancelAllWindow()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1113) | :closed_lock_with_key:  | POST | `/v5/order/disconnected-cancel-all` |
| [setDisconnectCancelAllWindowV2()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1131) | :closed_lock_with_key:  | POST | `/v5/order/disconnected-cancel-all` |
| [preCheckOrder()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1146) | :closed_lock_with_key:  | POST | `/v5/order/pre-check` |
| [getPositionInfo()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1169) | :closed_lock_with_key:  | GET | `/v5/position/list` |
| [setLeverage()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1184) | :closed_lock_with_key:  | POST | `/v5/position/set-leverage` |
| [switchIsolatedMargin()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1197) | :closed_lock_with_key:  | POST | `/v5/position/switch-isolated` |
| [setTPSLMode()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1211) | :closed_lock_with_key:  | POST | `/v5/position/set-tpsl-mode` |
| [switchPositionMode()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1226) | :closed_lock_with_key:  | POST | `/v5/position/switch-mode` |
| [setRiskLimit()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1240) | :closed_lock_with_key:  | POST | `/v5/position/set-risk-limit` |
| [setTradingStop()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1255) | :closed_lock_with_key:  | POST | `/v5/position/trading-stop` |
| [setAutoAddMargin()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1266) | :closed_lock_with_key:  | POST | `/v5/position/set-auto-add-margin` |
| [addOrReduceMargin()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1278) | :closed_lock_with_key:  | POST | `/v5/position/add-margin` |
| [getClosedPnL()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1290) | :closed_lock_with_key:  | GET | `/v5/position/closed-pnl` |
| [getClosedOptionsPositions()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1304) | :closed_lock_with_key:  | GET | `/v5/position/get-closed-positions` |
| [movePosition()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1329) | :closed_lock_with_key:  | POST | `/v5/position/move-positions` |
| [getMovePositionHistory()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1340) | :closed_lock_with_key:  | GET | `/v5/position/move-history` |
| [confirmNewRiskLimit()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1359) | :closed_lock_with_key:  | POST | `/v5/position/confirm-pending-mmr` |
| [getPreUpgradeOrderHistory()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1379) | :closed_lock_with_key:  | GET | `/v5/pre-upgrade/order/history` |
| [getPreUpgradeTradeHistory()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1394) | :closed_lock_with_key:  | GET | `/v5/pre-upgrade/execution/list` |
| [getPreUpgradeClosedPnl()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1405) | :closed_lock_with_key:  | GET | `/v5/pre-upgrade/position/closed-pnl` |
| [getPreUpgradeTransactions()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1419) | :closed_lock_with_key:  | GET | `/v5/pre-upgrade/account/transaction-log` |
| [getPreUpgradeOptionDeliveryRecord()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1436) | :closed_lock_with_key:  | GET | `/v5/pre-upgrade/asset/delivery-record` |
| [getPreUpgradeUSDCSessionSettlements()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1450) | :closed_lock_with_key:  | GET | `/v5/pre-upgrade/asset/settlement-record` |
| [getWalletBalance()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1471) | :closed_lock_with_key:  | GET | `/v5/account/wallet-balance` |
| [getTransferableAmount()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1482) | :closed_lock_with_key:  | GET | `/v5/account/withdrawal` |
| [getAccountInstrumentsInfo()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1498) | :closed_lock_with_key:  | GET | `/v5/account/instruments-info` |
| [upgradeToUnifiedAccount()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1509) | :closed_lock_with_key:  | POST | `/v5/account/upgrade-to-uta` |
| [getBorrowHistory()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1520) | :closed_lock_with_key:  | GET | `/v5/account/borrow-history` |
| [repayLiability()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1534) | :closed_lock_with_key:  | POST | `/v5/account/quick-repayment` |
| [manualRepay()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1551) | :closed_lock_with_key:  | POST | `/v5/account/repay` |
| [setCollateralCoin()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1560) | :closed_lock_with_key:  | POST | `/v5/account/set-collateral-switch` |
| [batchSetCollateralCoin()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1566) | :closed_lock_with_key:  | POST | `/v5/account/set-collateral-switch-batch` |
| [getCollateralInfo()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1576) | :closed_lock_with_key:  | GET | `/v5/account/collateral-info` |
| [getCoinGreeks()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1585) | :closed_lock_with_key:  | GET | `/v5/asset/coin-greeks` |
| [getFeeRate()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1598) | :closed_lock_with_key:  | GET | `/v5/account/fee-rate` |
| [getAccountInfo()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1607) | :closed_lock_with_key:  | GET | `/v5/account/info` |
| [getDCPInfo()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1620) | :closed_lock_with_key:  | GET | `/v5/account/query-dcp-info` |
| [getTransactionLog()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1627) | :closed_lock_with_key:  | GET | `/v5/account/transaction-log` |
| [getClassicTransactionLogs()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1638) | :closed_lock_with_key:  | GET | `/v5/account/contract-transaction-log` |
| [getSMPGroup()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1649) | :closed_lock_with_key:  | GET | `/v5/account/smp-group` |
| [setMarginMode()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1662) | :closed_lock_with_key:  | POST | `/v5/account/set-margin-mode` |
| [setSpotHedging()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1679) | :closed_lock_with_key:  | POST | `/v5/account/set-hedging-mode` |
| [setLimitPriceAction()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1692) | :closed_lock_with_key:  | POST | `/v5/account/set-limit-px-action` |
| [getLimitPriceAction()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1702) | :closed_lock_with_key:  | GET | `/v5/account/user-setting-config` |
| [setMMP()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1714) | :closed_lock_with_key:  | POST | `/v5/account/mmp-modify` |
| [resetMMP()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1721) | :closed_lock_with_key:  | POST | `/v5/account/mmp-reset` |
| [getMMPState()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1728) | :closed_lock_with_key:  | GET | `/v5/account/mmp-state` |
| [getDeliveryRecord()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1745) | :closed_lock_with_key:  | GET | `/v5/asset/delivery-record` |
| [getSettlementRecords()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1756) | :closed_lock_with_key:  | GET | `/v5/asset/settlement-record` |
| [getCoinExchangeRecords()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1769) | :closed_lock_with_key:  | GET | `/v5/asset/exchange/order-record` |
| [getCoinInfo()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1781) | :closed_lock_with_key:  | GET | `/v5/asset/coin/query-info` |
| [getSubUID()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1795) | :closed_lock_with_key:  | GET | `/v5/asset/transfer/query-sub-member-list` |
| [getAssetInfo()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1810) | :closed_lock_with_key:  | GET | `/v5/asset/transfer/query-asset-info` |
| [getAllCoinsBalance()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1821) | :closed_lock_with_key:  | GET | `/v5/asset/transfer/query-account-coins-balance` |
| [getCoinBalance()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1835) | :closed_lock_with_key:  | GET | `/v5/asset/transfer/query-account-coin-balance` |
| [getWithdrawableAmount()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1847) | :closed_lock_with_key:  | GET | `/v5/asset/withdraw/withdrawable-amount` |
| [getTransferableCoinList()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1856) | :closed_lock_with_key:  | GET | `/v5/asset/transfer/query-transfer-coin-list` |
| [createInternalTransfer()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1872) | :closed_lock_with_key:  | POST | `/v5/asset/transfer/inter-transfer` |
| [getInternalTransferRecords()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1891) | :closed_lock_with_key:  | GET | `/v5/asset/transfer/query-inter-transfer-list` |
| [enableUniversalTransferForSubUIDs()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1911) | :closed_lock_with_key:  | POST | `/v5/asset/transfer/save-transfer-sub-member` |
| [createUniversalTransfer()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1922) | :closed_lock_with_key:  | POST | `/v5/asset/transfer/universal-transfer` |
| [getUniversalTransferRecords()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1934) | :closed_lock_with_key:  | GET | `/v5/asset/transfer/query-universal-transfer-list` |
| [getAllowedDepositCoinInfo()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1947) | :closed_lock_with_key:  | GET | `/v5/asset/deposit/query-allowed-list` |
| [setDepositAccount()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1961) | :closed_lock_with_key:  | POST | `/v5/asset/deposit/deposit-to-account` |
| [getDepositRecords()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1977) | :closed_lock_with_key:  | GET | `/v5/asset/deposit/query-record` |
| [getSubAccountDepositRecords()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L1992) | :closed_lock_with_key:  | GET | `/v5/asset/deposit/query-sub-member-record` |
| [getInternalDepositRecords()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2008) | :closed_lock_with_key:  | GET | `/v5/asset/deposit/query-internal-record` |
| [getMasterDepositAddress()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2020) | :closed_lock_with_key:  | GET | `/v5/asset/deposit/query-address` |
| [getSubDepositAddress()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2038) | :closed_lock_with_key:  | GET | `/v5/asset/deposit/query-sub-member-address` |
| [querySubMemberAddress()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2063) | :closed_lock_with_key:  | GET | `/v5/asset/deposit/query-sub-member-address` |
| [getWithdrawalRecords()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2083) | :closed_lock_with_key:  | GET | `/v5/asset/withdraw/query-record` |
| [getWithdrawalAddressList()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2095) | :closed_lock_with_key:  | GET | `/v5/asset/withdraw/query-address` |
| [getExchangeEntities()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2109) | :closed_lock_with_key:  | GET | `/v5/asset/withdraw/vasp/list` |
| [submitWithdrawal()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2122) | :closed_lock_with_key:  | POST | `/v5/asset/withdraw/create` |
| [cancelWithdrawal()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2133) | :closed_lock_with_key:  | POST | `/v5/asset/withdraw/cancel` |
| [getConvertCoins()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2142) | :closed_lock_with_key:  | GET | `/v5/asset/exchange/query-coin-list` |
| [requestConvertQuote()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2153) | :closed_lock_with_key:  | POST | `/v5/asset/exchange/quote-apply` |
| [confirmConvertQuote()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2162) | :closed_lock_with_key:  | POST | `/v5/asset/exchange/convert-execute` |
| [getConvertStatus()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2174) | :closed_lock_with_key:  | GET | `/v5/asset/exchange/convert-result-query` |
| [getConvertHistory()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2193) | :closed_lock_with_key:  | GET | `/v5/asset/exchange/query-convert-history` |
| [getSmallBalanceList()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2210) | :closed_lock_with_key:  | GET | `/v5/asset/covert/small-balance-list` |
| [getFiatTradingPairList()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2224) | :closed_lock_with_key:  | GET | `/v5/fiat/query-coin-list` |
| [createSubMember()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2242) | :closed_lock_with_key:  | POST | `/v5/user/create-sub-member` |
| [createSubUIDAPIKey()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2254) | :closed_lock_with_key:  | POST | `/v5/user/create-sub-api` |
| [getSubUIDList()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2263) | :closed_lock_with_key:  | GET | `/v5/user/query-sub-members` |
| [getSubUIDListUnlimited()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2272) | :closed_lock_with_key:  | GET | `/v5/user/submembers` |
| [setSubUIDFrozenState()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2290) | :closed_lock_with_key:  | POST | `/v5/user/frozen-sub-member` |
| [getQueryApiKey()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2303) | :closed_lock_with_key:  | GET | `/v5/user/query-api` |
| [getSubAccountAllApiKeys()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2310) | :closed_lock_with_key:  | GET | `/v5/user/sub-apikeys` |
| [getUIDWalletType()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2319) | :closed_lock_with_key:  | GET | `/v5/user/get-member-type` |
| [updateMasterApiKey()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2336) | :closed_lock_with_key:  | POST | `/v5/user/update-api` |
| [updateSubApiKey()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2350) | :closed_lock_with_key:  | POST | `/v5/user/update-sub-api` |
| [deleteSubMember()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2363) | :closed_lock_with_key:  | POST | `/v5/user/del-submember` |
| [deleteMasterApiKey()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2378) | :closed_lock_with_key:  | POST | `/v5/user/delete-api` |
| [deleteSubApiKey()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2392) | :closed_lock_with_key:  | POST | `/v5/user/delete-sub-api` |
| [getAffiliateUserList()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2412) | :closed_lock_with_key:  | GET | `/v5/affiliate/aff-user-list` |
| [getAffiliateUserInfo()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2431) | :closed_lock_with_key:  | GET | `/v5/user/aff-customer-info` |
| [getVIPMarginData()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2451) |  | GET | `/v5/spot-margin-trade/data` |
| [getHistoricalInterestRate()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2462) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/interest-rate-history` |
| [toggleSpotMarginTrade()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2489) | :closed_lock_with_key:  | POST | `/v5/spot-margin-trade/switch-mode` |
| [setSpotMarginLeverage()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2500) | :closed_lock_with_key:  | POST | `/v5/spot-margin-trade/set-leverage` |
| [setSpotMarginLeverageV2()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2508) | :closed_lock_with_key:  | POST | `/v5/spot-margin-trade/set-leverage` |
| [getSpotMarginState()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2519) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/state` |
| [manualBorrow()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2526) | :closed_lock_with_key:  | POST | `/v5/account/borrow` |
| [getMaxBorrowableAmount()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2535) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/max-borrowable` |
| [getPositionTiers()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2544) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/position-tiers` |
| [getCoinState()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2555) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/coinstate` |
| [getAvailableAmountToRepay()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2566) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/repayment-available-amount` |
| [manualRepayWithoutConversion()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2581) | :closed_lock_with_key:  | POST | `/v5/account/no-convert-repay` |
| [getAutoRepayMode()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2594) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/get-auto-repay-mode` |
| [setAutoRepayMode()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2610) | :closed_lock_with_key:  | POST | `/v5/spot-margin-trade/set-auto-repay-mode` |
| [getSpotMarginCoinInfo()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2628) | :closed_lock_with_key:  | GET | `/v5/spot-cross-margin-trade/pledge-token` |
| [getSpotMarginBorrowableCoinInfo()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2645) | :closed_lock_with_key:  | GET | `/v5/spot-cross-margin-trade/borrow-token` |
| [getSpotMarginInterestAndQuota()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2662) | :closed_lock_with_key:  | GET | `/v5/spot-cross-margin-trade/loan-info` |
| [getSpotMarginLoanAccountInfo()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2680) | :closed_lock_with_key:  | GET | `/v5/spot-cross-margin-trade/account` |
| [spotMarginBorrow()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2704) | :closed_lock_with_key:  | POST | `/v5/spot-cross-margin-trade/loan` |
| [spotMarginRepay()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2715) | :closed_lock_with_key:  | POST | `/v5/spot-cross-margin-trade/repay` |
| [getSpotMarginBorrowOrderDetail()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2730) | :closed_lock_with_key:  | GET | `/v5/spot-cross-margin-trade/orders` |
| [getSpotMarginRepaymentOrderDetail()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2759) | :closed_lock_with_key:  | GET | `/v5/spot-cross-margin-trade/repay-history` |
| [toggleSpotCrossMarginTrade()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2788) | :closed_lock_with_key:  | POST | `/v5/spot-cross-margin-trade/switch` |
| [getCollateralCoins()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2808) |  | GET | `/v5/crypto-loan/collateral-data` |
| [getBorrowableCoins()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2825) |  | GET | `/v5/crypto-loan/loanable-data` |
| [getAccountBorrowCollateralLimit()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2843) | :closed_lock_with_key:  | GET | `/v5/crypto-loan/borrowable-collateralisable-number` |
| [borrowCryptoLoan()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2863) | :closed_lock_with_key:  | POST | `/v5/crypto-loan/borrow` |
| [repayCryptoLoan()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2884) | :closed_lock_with_key:  | POST | `/v5/crypto-loan/repay` |
| [getUnpaidLoanOrders()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2900) | :closed_lock_with_key:  | GET | `/v5/crypto-loan/ongoing-orders` |
| [getRepaymentHistory()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2921) | :closed_lock_with_key:  | GET | `/v5/crypto-loan/repayment-history` |
| [getCompletedLoanOrderHistory()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2941) | :closed_lock_with_key:  | GET | `/v5/crypto-loan/borrow-history` |
| [getMaxAllowedReductionCollateralAmount()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2960) | :closed_lock_with_key:  | GET | `/v5/crypto-loan/max-collateral-amount` |
| [adjustCollateralAmount()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L2979) | :closed_lock_with_key:  | POST | `/v5/crypto-loan/adjust-ltv` |
| [getLoanLTVAdjustmentHistory()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3003) | :closed_lock_with_key:  | GET | `/v5/crypto-loan/adjustment-history` |
| [getLoanBorrowableCoins()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3024) |  | GET | `/v5/crypto-loan-common/loanable-data` |
| [getLoanCollateralCoins()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3036) |  | GET | `/v5/crypto-loan-common/collateral-data` |
| [getMaxCollateralAmount()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3046) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-common/max-collateral-amount` |
| [getMaxLoanAmount()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3065) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-common/max-loan` |
| [updateCollateralAmount()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3075) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-common/adjust-ltv` |
| [getCollateralAdjustmentHistory()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3086) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-common/adjustment-history` |
| [getCryptoLoanPosition()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3101) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-common/position` |
| [borrowFlexible()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3118) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-flexible/borrow` |
| [repayFlexible()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3129) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-flexible/repay` |
| [repayCollateralFlexible()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3139) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-flexible/repay-collateral` |
| [getOngoingFlexibleLoans()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3153) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-flexible/ongoing-coin` |
| [getBorrowHistoryFlexible()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3165) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-flexible/borrow-history` |
| [getRepaymentHistoryFlexible()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3178) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-flexible/repayment-history` |
| [getSupplyOrderQuoteFixed()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3203) |  | GET | `/v5/crypto-loan-fixed/supply-order-quote` |
| [getBorrowOrderQuoteFixed()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3216) |  | GET | `/v5/crypto-loan-fixed/borrow-order-quote` |
| [createBorrowOrderFixed()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3229) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-fixed/borrow` |
| [createSupplyOrderFixed()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3240) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-fixed/supply` |
| [cancelBorrowOrderFixed()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3250) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-fixed/borrow-order-cancel` |
| [cancelSupplyOrderFixed()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3262) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-fixed/supply-order-cancel` |
| [getBorrowContractInfoFixed()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3275) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-fixed/borrow-contract-info` |
| [getSupplyContractInfoFixed()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3293) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-fixed/supply-contract-info` |
| [getBorrowOrderInfoFixed()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3311) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-fixed/borrow-order-info` |
| [getSupplyOrderInfoFixed()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3324) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-fixed/supply-order-info` |
| [repayFixed()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3338) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-fixed/fully-repay` |
| [repayCollateralFixed()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3349) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-flexible/repay-collateral` |
| [getRepaymentHistoryFixed()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3362) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-fixed/repayment-history` |
| [renewBorrowOrderFixed()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3379) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-fixed/renew` |
| [getRenewOrderInfoFixed()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3392) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-fixed/renew-info` |
| [getInstitutionalLendingProductInfo()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3410) |  | GET | `/v5/ins-loan/product-infos` |
| [getInstitutionalLendingMarginCoinInfo()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3420) |  | GET | `/v5/ins-loan/ensure-tokens` |
| [getInstitutionalLendingMarginCoinInfoWithConversionRate()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3429) |  | GET | `/v5/ins-loan/ensure-tokens-convert` |
| [getInstitutionalLendingLoanOrders()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3438) | :closed_lock_with_key:  | GET | `/v5/ins-loan/loan-order` |
| [getInstitutionalLendingRepayOrders()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3450) | :closed_lock_with_key:  | GET | `/v5/ins-loan/repaid-history` |
| [getInstitutionalLendingLTV()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3462) | :closed_lock_with_key:  | GET | `/v5/ins-loan/ltv` |
| [getInstitutionalLendingLTVWithLadderConversionRate()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3471) | :closed_lock_with_key:  | GET | `/v5/ins-loan/ltv-convert` |
| [bindOrUnbindUID()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3486) | :closed_lock_with_key:  | POST | `/v5/ins-loan/association-uid` |
| [repayInstitutionalLoan()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3506) | :closed_lock_with_key:  | POST | `/v5/ins-loan/repay-loan` |
| [getExchangeBrokerEarnings()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3527) | :closed_lock_with_key:  | GET | `/v5/broker/earnings-info` |
| [getExchangeBrokerAccountInfo()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3540) | :closed_lock_with_key:  | GET | `/v5/broker/account-info` |
| [getBrokerSubAccountDeposits()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3556) | :closed_lock_with_key:  | GET | `/v5/broker/asset/query-sub-member-deposit-record` |
| [getBrokerVoucherSpec()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3571) | :closed_lock_with_key:  | POST | `/v5/broker/award/info` |
| [issueBrokerVoucher()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3583) | :closed_lock_with_key:  | POST | `/v5/broker/award/distribute-award` |
| [getBrokerIssuedVoucher()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3595) | :closed_lock_with_key:  | POST | `/v5/broker/award/distribution-record` |
| [getEarnProduct()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3612) |  | GET | `/v5/earn/product` |
| [submitStakeRedeem()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3630) | :closed_lock_with_key:  | POST | `/v5/earn/place-order` |
| [getEarnOrderHistory()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3649) | :closed_lock_with_key:  | GET | `/v5/earn/order` |
| [getEarnPosition()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3665) | :closed_lock_with_key:  | GET | `/v5/earn/position` |
| [getEarnYieldHistory()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3678) | :closed_lock_with_key:  | GET | `/v5/earn/yield` |
| [getEarnHourlyYieldHistory()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3692) | :closed_lock_with_key:  | GET | `/v5/earn/hourly-yield` |
| [createRFQ()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3711) | :closed_lock_with_key:  | POST | `/v5/rfq/create-rfq` |
| [getRFQConfig()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3722) | :closed_lock_with_key:  | GET | `/v5/rfq/config` |
| [cancelRFQ()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3731) | :closed_lock_with_key:  | POST | `/v5/rfq/cancel-rfq` |
| [cancelAllRFQ()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3741) | :closed_lock_with_key:  | POST | `/v5/rfq/cancel-all-rfq` |
| [createRFQQuote()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3750) | :closed_lock_with_key:  | POST | `/v5/rfq/create-quote` |
| [executeRFQQuote()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3761) | :closed_lock_with_key:  | POST | `/v5/rfq/execute-quote` |
| [cancelRFQQuote()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3772) | :closed_lock_with_key:  | POST | `/v5/rfq/cancel-quote` |
| [cancelAllRFQQuotes()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3782) | :closed_lock_with_key:  | POST | `/v5/rfq/cancel-all-quotes` |
| [getRFQRealtimeInfo()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3796) | :closed_lock_with_key:  | GET | `/v5/rfq/rfq-realtime` |
| [getRFQHistory()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3808) | :closed_lock_with_key:  | GET | `/v5/rfq/rfq-list` |
| [getRFQRealtimeQuote()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3822) | :closed_lock_with_key:  | GET | `/v5/rfq/quote-realtime` |
| [getRFQHistoryQuote()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3837) | :closed_lock_with_key:  | GET | `/v5/rfq/quote-list` |
| [getRFQTrades()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3850) | :closed_lock_with_key:  | GET | `/v5/rfq/trade-list` |
| [getRFQPublicTrades()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3863) | :closed_lock_with_key:  | GET | `/v5/rfq/public-trades` |
| [acceptNonLPQuote()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3879) | :closed_lock_with_key:  | POST | `/v5/rfq/accept-other-quote` |
| [getP2PAccountCoinsBalance()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3901) | :closed_lock_with_key:  | GET | `/v5/asset/transfer/query-account-coins-balance` |
| [getP2POnlineAds()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3918) | :closed_lock_with_key:  | POST | `/v5/p2p/item/online` |
| [createP2PAd()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3927) | :closed_lock_with_key:  | POST | `/v5/p2p/item/create` |
| [cancelP2PAd()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3936) | :closed_lock_with_key:  | POST | `/v5/p2p/item/cancel` |
| [updateP2PAd()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3950) | :closed_lock_with_key:  | POST | `/v5/p2p/item/update` |
| [getP2PPersonalAds()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3960) | :closed_lock_with_key:  | POST | `/v5/p2p/item/personal/list` |
| [getP2PAdDetail()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3969) | :closed_lock_with_key:  | POST | `/v5/p2p/item/info` |
| [getP2POrders()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3984) | :closed_lock_with_key:  | POST | `/v5/p2p/order/simplifyList` |
| [getP2POrderDetail()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L3994) | :closed_lock_with_key:  | POST | `/v5/p2p/order/info` |
| [getP2PPendingOrders()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L4003) | :closed_lock_with_key:  | POST | `/v5/p2p/order/pending/simplifyList` |
| [markP2POrderAsPaid()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L4012) | :closed_lock_with_key:  | POST | `/v5/p2p/order/pay` |
| [releaseP2POrder()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L4021) | :closed_lock_with_key:  | POST | `/v5/p2p/order/finish` |
| [sendP2POrderMessage()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L4030) | :closed_lock_with_key:  | POST | `/v5/p2p/order/message/send` |
| [getP2POrderMessages()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L4064) | :closed_lock_with_key:  | POST | `/v5/p2p/order/message/listpage` |
| [getP2PUserInfo()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L4078) | :closed_lock_with_key:  | POST | `/v5/p2p/user/personal/info` |
| [getP2PCounterpartyUserInfo()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L4085) | :closed_lock_with_key:  | POST | `/v5/p2p/user/order/personal/info` |
| [getP2PUserPayments()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L4094) | :closed_lock_with_key:  | POST | `/v5/p2p/user/payment/list` |
| [setApiRateLimit()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L4114) | :closed_lock_with_key:  | POST | `/v5/apilimit/set` |
| [queryApiRateLimit()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L4143) | :closed_lock_with_key:  | GET | `/v5/apilimit/query` |
| [getRateLimitCap()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L4162) | :closed_lock_with_key:  | GET | `/v5/apilimit/query-cap` |
| [getAllRateLimits()](https://github.com/tiagosiebler/bybit-api/blob/master/src/rest-client-v5.ts#L4181) | :closed_lock_with_key:  | GET | `/v5/apilimit/query-all` |

# websocket-api-client.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [websocket-api-client.ts](/src/websocket-api-client.ts). 

This client provides WebSocket API endpoints which allow for faster interactions with the Bybit API via a WebSocket connection.

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| [submitNewOrder()](https://github.com/tiagosiebler/bybit-api/blob/master/src/websocket-api-client.ts#L95) | :closed_lock_with_key:  | WS | `order.create` |
| [amendOrder()](https://github.com/tiagosiebler/bybit-api/blob/master/src/websocket-api-client.ts#L111) | :closed_lock_with_key:  | WS | `order.amend` |
| [cancelOrder()](https://github.com/tiagosiebler/bybit-api/blob/master/src/websocket-api-client.ts#L127) | :closed_lock_with_key:  | WS | `order.cancel` |
| [batchSubmitOrders()](https://github.com/tiagosiebler/bybit-api/blob/master/src/websocket-api-client.ts#L143) | :closed_lock_with_key:  | WS | `order.create-batch` |
| [batchAmendOrder()](https://github.com/tiagosiebler/bybit-api/blob/master/src/websocket-api-client.ts#L171) | :closed_lock_with_key:  | WS | `order.amend-batch` |
| [batchCancelOrder()](https://github.com/tiagosiebler/bybit-api/blob/master/src/websocket-api-client.ts#L199) | :closed_lock_with_key:  | WS | `order.cancel-batch` |