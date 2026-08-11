
# Endpoint maps

<p align="center">
  <a href="https://www.npmjs.com/package/bybit-api">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/sieblyio/bybit-api/blob/master/docs/images/logoDarkMode2.svg?raw=true#gh-dark-mode-only">
      <img alt="SDK Logo" src="https://github.com/sieblyio/bybit-api/blob/master/docs/images/logoBrightMode2.svg?raw=true#gh-light-mode-only">
    </picture>
  </a>
</p>

Each REST client is a JavaScript class, which provides functions individually mapped to each endpoint available in the exchange's API offering. 

The following table shows all methods available in each REST client, whether the method requires authentication (automatically handled if API keys are provided), as well as the exact endpoint each method is connected to.

This can be used to easily find which method to call, once you have [found which endpoint you're looking to use](https://github.com/sieblyio/awesome-crypto-examples/wiki/How-to-find-SDK-functions-that-match-API-docs-endpoint).

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
| [getSystemStatus()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L684) | :closed_lock_with_key:  | GET | `/v5/system/status` |
| [getServerTime()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L701) |  | GET | `/v5/market/time` |
| [requestDemoTradingFunds()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L713) | :closed_lock_with_key:  | POST | `/v5/account/demo-apply-money` |
| [createDemoAccount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L726) | :closed_lock_with_key:  | POST | `/v5/user/create-demo-member` |
| [getSpreadInstrumentsInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L739) |  | GET | `/v5/spread/instrument` |
| [getSpreadOrderbook()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L751) |  | GET | `/v5/spread/orderbook` |
| [getSpreadTickers()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L761) |  | GET | `/v5/spread/tickers` |
| [getSpreadRecentTrades()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L772) |  | GET | `/v5/spread/recent-trade` |
| [getSpreadMaxQty()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L784) | :closed_lock_with_key:  | GET | `/v5/spread/max-qty` |
| [submitSpreadOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L793) | :closed_lock_with_key:  | POST | `/v5/spread/order/create` |
| [amendSpreadOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L806) | :closed_lock_with_key:  | POST | `/v5/spread/order/amend` |
| [cancelSpreadOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L818) | :closed_lock_with_key:  | POST | `/v5/spread/order/cancel` |
| [cancelAllSpreadOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L836) | :closed_lock_with_key:  | POST | `/v5/spread/order/cancel-all` |
| [getSpreadOpenOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L855) | :closed_lock_with_key:  | GET | `/v5/spread/order/realtime` |
| [getSpreadOrderHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L872) | :closed_lock_with_key:  | GET | `/v5/spread/order/history` |
| [getSpreadTradeHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L888) | :closed_lock_with_key:  | GET | `/v5/spread/execution/list` |
| [getKline()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L908) |  | GET | `/v5/market/kline` |
| [getMarkPriceKline()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L925) |  | GET | `/v5/market/mark-price-kline` |
| [getIndexPriceKline()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L940) |  | GET | `/v5/market/index-price-kline` |
| [getPremiumIndexPriceKline()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L955) |  | GET | `/v5/market/premium-index-price-kline` |
| [getInstrumentsInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L971) |  | GET | `/v5/market/instruments-info` |
| [getOrderbook()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L982) |  | GET | `/v5/market/orderbook` |
| [getFullDepthOrderbook()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L988) |  | GET | `/v5/market/full_orderbook` |
| [getRPIOrderbook()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1002) |  | GET | `/v5/market/rpi_orderbook` |
| [getTickers()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1008) |  | GET | `/v5/market/tickers` |
| [getFundingRateHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1046) |  | GET | `/v5/market/funding/history` |
| [getPublicTradingHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1061) |  | GET | `/v5/market/recent-trade` |
| [getOpenInterest()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1074) |  | GET | `/v5/market/open-interest` |
| [getHistoricalVolatility()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1084) |  | GET | `/v5/market/historical-volatility` |
| [getInsurance()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1095) |  | GET | `/v5/market/insurance` |
| [getRiskLimit()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1106) |  | GET | `/v5/market/risk-limit` |
| [getOptionDeliveryPrice()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1121) |  | GET | `/v5/market/delivery-price` |
| [getDeliveryPrice()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1134) |  | GET | `/v5/market/delivery-price` |
| [getNewDeliveryPrice()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1150) |  | GET | `/v5/market/new-delivery-price` |
| [getLongShortRatio()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1166) |  | GET | `/v5/market/account-ratio` |
| [getIndexPriceComponents()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1176) |  | GET | `/v5/market/index-price-components` |
| [getOrderPriceLimit()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1182) |  | GET | `/v5/market/price-limit` |
| [getADLAlert()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1196) |  | GET | `/v5/market/adlAlert` |
| [getFeeGroupStructure()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1209) |  | GET | `/v5/market/fee-group-info` |
| [submitOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1221) | :closed_lock_with_key:  | POST | `/v5/order/create` |
| [amendOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1227) | :closed_lock_with_key:  | POST | `/v5/order/amend` |
| [cancelOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1233) | :closed_lock_with_key:  | POST | `/v5/order/cancel` |
| [getActiveOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1242) | :closed_lock_with_key:  | GET | `/v5/order/realtime` |
| [cancelAllOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1248) | :closed_lock_with_key:  | POST | `/v5/order/cancel-all` |
| [getHistoricOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1261) | :closed_lock_with_key:  | GET | `/v5/order/history` |
| [getExecutionList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1273) | :closed_lock_with_key:  | GET | `/v5/execution/list` |
| [batchSubmitOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1291) | :closed_lock_with_key:  | POST | `/v5/order/create-batch` |
| [batchAmendOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1316) | :closed_lock_with_key:  | POST | `/v5/order/amend-batch` |
| [batchCancelOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1341) | :closed_lock_with_key:  | POST | `/v5/order/cancel-batch` |
| [getSpotBorrowCheck()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1363) | :closed_lock_with_key:  | GET | `/v5/order/spot-borrow-check` |
| [setDisconnectCancelAllWindow()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1384) | :closed_lock_with_key:  | POST | `/v5/order/disconnected-cancel-all` |
| [setDisconnectCancelAllWindowV2()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1402) | :closed_lock_with_key:  | POST | `/v5/order/disconnected-cancel-all` |
| [preCheckOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1417) | :closed_lock_with_key:  | POST | `/v5/order/pre-check` |
| [createStrategyOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1434) | :closed_lock_with_key:  | POST | `/v5/strategy/create` |
| [getStrategyList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1445) | :closed_lock_with_key:  | GET | `/v5/strategy/list` |
| [getStrategyOrderList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1456) | :closed_lock_with_key:  | GET | `/v5/strategy/order-list` |
| [stopStrategy()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1467) | :closed_lock_with_key:  | POST | `/v5/strategy/stop` |
| [getPositionInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1492) | :closed_lock_with_key:  | GET | `/v5/position/list` |
| [getFuturesLeverage()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1504) | :closed_lock_with_key:  | GET | `/v5/position/symbol-info` |
| [setLeverage()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1519) | :closed_lock_with_key:  | POST | `/v5/position/set-leverage` |
| [switchIsolatedMargin()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1532) | :closed_lock_with_key:  | POST | `/v5/position/switch-isolated` |
| [setTPSLMode()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1546) | :closed_lock_with_key:  | POST | `/v5/position/set-tpsl-mode` |
| [switchPositionMode()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1561) | :closed_lock_with_key:  | POST | `/v5/position/switch-mode` |
| [setRiskLimit()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1575) | :closed_lock_with_key:  | POST | `/v5/position/set-risk-limit` |
| [setTradingStop()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1590) | :closed_lock_with_key:  | POST | `/v5/position/trading-stop` |
| [setAutoAddMargin()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1601) | :closed_lock_with_key:  | POST | `/v5/position/set-auto-add-margin` |
| [addOrReduceMargin()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1613) | :closed_lock_with_key:  | POST | `/v5/position/add-margin` |
| [getClosedPnL()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1625) | :closed_lock_with_key:  | GET | `/v5/position/closed-pnl` |
| [getClosedOptionsPositions()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1639) | :closed_lock_with_key:  | GET | `/v5/position/get-closed-positions` |
| [movePosition()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1664) | :closed_lock_with_key:  | POST | `/v5/position/move-positions` |
| [getMovePositionHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1675) | :closed_lock_with_key:  | GET | `/v5/position/move-history` |
| [confirmNewRiskLimit()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1694) | :closed_lock_with_key:  | POST | `/v5/position/confirm-pending-mmr` |
| [getPreUpgradeOrderHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1714) | :closed_lock_with_key:  | GET | `/v5/pre-upgrade/order/history` |
| [getPreUpgradeTradeHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1729) | :closed_lock_with_key:  | GET | `/v5/pre-upgrade/execution/list` |
| [getPreUpgradeClosedPnl()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1740) | :closed_lock_with_key:  | GET | `/v5/pre-upgrade/position/closed-pnl` |
| [getPreUpgradeTransactions()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1754) | :closed_lock_with_key:  | GET | `/v5/pre-upgrade/account/transaction-log` |
| [getPreUpgradeOptionDeliveryRecord()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1771) | :closed_lock_with_key:  | GET | `/v5/pre-upgrade/asset/delivery-record` |
| [getPreUpgradeUSDCSessionSettlements()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1785) | :closed_lock_with_key:  | GET | `/v5/pre-upgrade/asset/settlement-record` |
| [getWalletBalance()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1806) | :closed_lock_with_key:  | GET | `/v5/account/wallet-balance` |
| [getTransferableAmount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1817) | :closed_lock_with_key:  | GET | `/v5/account/withdrawal` |
| [getAccountInstrumentsInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1834) | :closed_lock_with_key:  | GET | `/v5/account/instruments-info` |
| [upgradeToUnifiedAccount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1845) | :closed_lock_with_key:  | POST | `/v5/account/upgrade-to-uta` |
| [getBorrowHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1856) | :closed_lock_with_key:  | GET | `/v5/account/borrow-history` |
| [repayLiability()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1877) | :closed_lock_with_key:  | POST | `/v5/account/quick-repayment` |
| [manualRepay()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1902) | :closed_lock_with_key:  | POST | `/v5/account/repay` |
| [setCollateralCoin()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1911) | :closed_lock_with_key:  | POST | `/v5/account/set-collateral-switch` |
| [batchSetCollateralCoin()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1917) | :closed_lock_with_key:  | POST | `/v5/account/set-collateral-switch-batch` |
| [getCollateralInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1927) | :closed_lock_with_key:  | GET | `/v5/account/collateral-info` |
| [getCoinGreeks()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1936) | :closed_lock_with_key:  | GET | `/v5/asset/coin-greeks` |
| [getFeeRate()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1949) | :closed_lock_with_key:  | GET | `/v5/account/fee-rate` |
| [getAccountInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1958) | :closed_lock_with_key:  | GET | `/v5/account/info` |
| [getDCPInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1971) | :closed_lock_with_key:  | GET | `/v5/account/query-dcp-info` |
| [getTransactionLog()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1978) | :closed_lock_with_key:  | GET | `/v5/account/transaction-log` |
| [getClassicTransactionLogs()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1989) | :closed_lock_with_key:  | GET | `/v5/account/contract-transaction-log` |
| [getSMPGroup()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2000) | :closed_lock_with_key:  | GET | `/v5/account/smp-group` |
| [setMarginMode()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2013) | :closed_lock_with_key:  | POST | `/v5/account/set-margin-mode` |
| [setSpotHedging()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2030) | :closed_lock_with_key:  | POST | `/v5/account/set-hedging-mode` |
| [setLimitPriceAction()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2043) | :closed_lock_with_key:  | POST | `/v5/account/set-limit-px-action` |
| [getLimitPriceAction()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2054) | :closed_lock_with_key:  | GET | `/v5/account/user-setting-config` |
| [setDeltaNeutralMode()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2062) | :closed_lock_with_key:  | POST | `/v5/account/set-delta-mode` |
| [setMMP()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2071) | :closed_lock_with_key:  | POST | `/v5/account/mmp-modify` |
| [resetMMP()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2078) | :closed_lock_with_key:  | POST | `/v5/account/mmp-reset` |
| [getMMPState()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2085) | :closed_lock_with_key:  | GET | `/v5/account/mmp-state` |
| [getOptionAssetInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2095) | :closed_lock_with_key:  | GET | `/v5/account/option-asset-info` |
| [getPayInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2105) | :closed_lock_with_key:  | GET | `/v5/account/pay-info` |
| [getTradeInfoForAnalysis()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2115) | :closed_lock_with_key:  | GET | `/v5/account/trade-info-for-analysis` |
| [getAssetOverview()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2135) | :closed_lock_with_key:  | GET | `/v5/asset/asset-overview` |
| [getPortfolioMarginInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2145) | :closed_lock_with_key:  | GET | `/v5/asset/portfolio-margin` |
| [getTotalMembersAssets()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2155) | :closed_lock_with_key:  | GET | `/v5/asset/total-members-assets` |
| [getFundingAccountTransactionHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2167) | :closed_lock_with_key:  | GET | `/v5/asset/fundinghistory` |
| [getDeliveryRecord()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2183) | :closed_lock_with_key:  | GET | `/v5/asset/delivery-record` |
| [getSettlementRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2194) | :closed_lock_with_key:  | GET | `/v5/asset/settlement-record` |
| [getCoinExchangeRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2207) | :closed_lock_with_key:  | GET | `/v5/asset/exchange/order-record` |
| [getCoinInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2222) | :closed_lock_with_key:  | GET | `/v5/asset/coin/query-info` |
| [getSubUID()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2236) | :closed_lock_with_key:  | GET | `/v5/asset/transfer/query-sub-member-list` |
| [getAssetInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2251) | :closed_lock_with_key:  | GET | `/v5/asset/transfer/query-asset-info` |
| [getAllCoinsBalance()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2262) | :closed_lock_with_key:  | GET | `/v5/asset/transfer/query-account-coins-balance` |
| [getCoinBalance()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2276) | :closed_lock_with_key:  | GET | `/v5/asset/transfer/query-account-coin-balance` |
| [getWithdrawableAmount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2290) | :closed_lock_with_key:  | GET | `/v5/asset/withdraw/withdrawable-amount` |
| [getTransferableCoinList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2299) | :closed_lock_with_key:  | GET | `/v5/asset/transfer/query-transfer-coin-list` |
| [createInternalTransfer()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2315) | :closed_lock_with_key:  | POST | `/v5/asset/transfer/inter-transfer` |
| [getInternalTransferRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2334) | :closed_lock_with_key:  | GET | `/v5/asset/transfer/query-inter-transfer-list` |
| [enableUniversalTransferForSubUIDs()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2354) | :closed_lock_with_key:  | POST | `/v5/asset/transfer/save-transfer-sub-member` |
| [createUniversalTransfer()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2365) | :closed_lock_with_key:  | POST | `/v5/asset/transfer/universal-transfer` |
| [getUniversalTransferRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2377) | :closed_lock_with_key:  | GET | `/v5/asset/transfer/query-universal-transfer-list` |
| [getAllowedDepositCoinInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2390) | :closed_lock_with_key:  | GET | `/v5/asset/deposit/query-allowed-list` |
| [setDepositAccount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2405) | :closed_lock_with_key:  | POST | `/v5/asset/deposit/deposit-to-account` |
| [getDepositRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2421) | :closed_lock_with_key:  | GET | `/v5/asset/deposit/query-record` |
| [getSubAccountDepositRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2436) | :closed_lock_with_key:  | GET | `/v5/asset/deposit/query-sub-member-record` |
| [getInternalDepositRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2452) | :closed_lock_with_key:  | GET | `/v5/asset/deposit/query-internal-record` |
| [getMasterDepositAddress()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2464) | :closed_lock_with_key:  | GET | `/v5/asset/deposit/query-address` |
| [getSubDepositAddress()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2482) | :closed_lock_with_key:  | GET | `/v5/asset/deposit/query-sub-member-address` |
| [querySubMemberAddress()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2507) | :closed_lock_with_key:  | GET | `/v5/asset/deposit/query-sub-member-address` |
| [getWithdrawalRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2527) | :closed_lock_with_key:  | GET | `/v5/asset/withdraw/query-record` |
| [getWithdrawalAddressList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2539) | :closed_lock_with_key:  | GET | `/v5/asset/withdraw/query-address` |
| [getExchangeEntities()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2553) | :closed_lock_with_key:  | GET | `/v5/asset/withdraw/vasp/list` |
| [submitDepositOriginatorInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2563) | :closed_lock_with_key:  | POST | `/v5/asset/travel-rule/deposit/submit` |
| [submitWithdrawal()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2578) | :closed_lock_with_key:  | POST | `/v5/asset/withdraw/create` |
| [cancelWithdrawal()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2589) | :closed_lock_with_key:  | POST | `/v5/asset/withdraw/cancel` |
| [getConvertCoins()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2598) | :closed_lock_with_key:  | GET | `/v5/asset/exchange/query-coin-list` |
| [requestConvertQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2609) | :closed_lock_with_key:  | POST | `/v5/asset/exchange/quote-apply` |
| [confirmConvertQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2618) | :closed_lock_with_key:  | POST | `/v5/asset/exchange/convert-execute` |
| [getConvertStatus()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2630) | :closed_lock_with_key:  | GET | `/v5/asset/exchange/convert-result-query` |
| [getConvertHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2649) | :closed_lock_with_key:  | GET | `/v5/asset/exchange/query-convert-history` |
| [getSmallBalanceList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2666) | :closed_lock_with_key:  | GET | `/v5/asset/covert/small-balance-list` |
| [getFiatTradingPairList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2680) | :closed_lock_with_key:  | GET | `/v5/fiat/query-coin-list` |
| [createSubMember()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2698) | :closed_lock_with_key:  | POST | `/v5/user/create-sub-member` |
| [createSubUIDAPIKey()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2710) | :closed_lock_with_key:  | POST | `/v5/user/create-sub-api` |
| [getSubUIDList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2719) | :closed_lock_with_key:  | GET | `/v5/user/query-sub-members` |
| [getSubUIDListUnlimited()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2728) | :closed_lock_with_key:  | GET | `/v5/user/submembers` |
| [setSubUIDFrozenState()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2746) | :closed_lock_with_key:  | POST | `/v5/user/frozen-sub-member` |
| [getQueryApiKey()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2761) | :closed_lock_with_key:  | GET | `/v5/user/query-api` |
| [getSubAccountAllApiKeys()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2768) | :closed_lock_with_key:  | GET | `/v5/user/sub-apikeys` |
| [getUIDWalletType()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2777) | :closed_lock_with_key:  | GET | `/v5/user/get-member-type` |
| [updateMasterApiKey()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2796) | :closed_lock_with_key:  | POST | `/v5/user/update-api` |
| [updateSubApiKey()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2810) | :closed_lock_with_key:  | POST | `/v5/user/update-sub-api` |
| [deleteSubMember()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2823) | :closed_lock_with_key:  | POST | `/v5/user/del-submember` |
| [deleteMasterApiKey()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2838) | :closed_lock_with_key:  | POST | `/v5/user/delete-api` |
| [deleteSubApiKey()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2852) | :closed_lock_with_key:  | POST | `/v5/user/delete-sub-api` |
| [getAffiliateUserList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2872) | :closed_lock_with_key:  | GET | `/v5/affiliate/aff-user-list` |
| [getAffiliateSubAffiliateList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2890) | :closed_lock_with_key:  | GET | `/v5/affiliate/affiliate-sub-list` |
| [getAffiliateUserInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2906) | :closed_lock_with_key:  | GET | `/v5/user/aff-customer-info` |
| [getFriendReferrals()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2918) | :closed_lock_with_key:  | GET | `/v5/user/invitation/referrals` |
| [getReferralCode()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2927) | :closed_lock_with_key:  | GET | `/v5/user/invitation/code` |
| [signAgreement()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2943) | :closed_lock_with_key:  | POST | `/v5/user/agreement` |
| [getAlphaTradeQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2960) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/quote` |
| [executeAlphaTradePurchase()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2971) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/purchase` |
| [executeAlphaTradeRedeem()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2982) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/redeem` |
| [getAlphaPayTokenList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2992) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/pay-token-list` |
| [getAlphaTradeOrderList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3002) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/order-list` |
| [getAlphaBizTokenList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3012) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/biz-token-list` |
| [getAlphaBizTokenPriceList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3022) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/biz-token-price-list` |
| [getAlphaBizTokenDetails()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3032) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/biz-token-details` |
| [getAlphaAssetList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3042) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/asset-list` |
| [getAlphaAssetDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3050) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/asset-detail` |
| [getAlphaPredictionEngineStatus()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3066) | :closed_lock_with_key:  | GET | `/v5/alpha/prediction/engine-status` |
| [getAlphaPredictionPayTokenList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3076) | :closed_lock_with_key:  | GET | `/v5/alpha/prediction/pay-token-list` |
| [getAlphaPredictionEventDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3086) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/event-detail` |
| [getAlphaPredictionOrderEstimate()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3096) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/order-estimate` |
| [executeAlphaPredictionBuy()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3106) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/buy` |
| [executeAlphaPredictionSell()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3116) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/sell` |
| [getAlphaPredictionOrderList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3126) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/order-list` |
| [getAlphaPredictionOrderBook()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3136) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/order-book` |
| [getAlphaPredictionTokenPrice()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3146) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/token-price` |
| [getAlphaPredictionPriceHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3156) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/price-history` |
| [getAlphaPredictionPositionList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3166) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/position-list` |
| [getAlphaPredictionPositionHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3176) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/position-history` |
| [getAlphaPredictionPortfolioSummary()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3186) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/portfolio-summary` |
| [getAlphaPredictionSideMarketList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3196) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/side-market-list` |
| [getAlphaPredictionSportsMatchList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3206) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/sports/match-list` |
| [getAlphaPredictionSportsTimelineStages()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3216) | :closed_lock_with_key:  | GET | `/v5/alpha/prediction/sports/timeline-stages` |
| [getAlphaPredictionSportsGroupStageDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3229) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/sports/group-stage-detail` |
| [getAlphaLPPoolList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3248) | :closed_lock_with_key:  | POST | `/v5/alpha/lp/pool-list` |
| [getAlphaLPPoolInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3258) | :closed_lock_with_key:  | POST | `/v5/alpha/lp/pool-info` |
| [executeAlphaLPStake()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3268) | :closed_lock_with_key:  | POST | `/v5/alpha/lp/stake` |
| [executeAlphaLPRedeem()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3278) | :closed_lock_with_key:  | POST | `/v5/alpha/lp/redeem` |
| [getAlphaLPOrderList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3288) | :closed_lock_with_key:  | POST | `/v5/alpha/lp/order-list` |
| [getAlphaLPPayTokenList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3298) | :closed_lock_with_key:  | POST | `/v5/alpha/lp/pay-token-list` |
| [getAlphaLPPayTokenPrice()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3308) | :closed_lock_with_key:  | POST | `/v5/alpha/lp/pay-token-price` |
| [getAlphaLPPositionList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3318) | :closed_lock_with_key:  | POST | `/v5/alpha/lp/position-list` |
| [getVIPMarginData()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3338) |  | GET | `/v5/spot-margin-trade/data` |
| [getHistoricalInterestRate()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3349) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/interest-rate-history` |
| [getSpotMarginCurrencyData()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3374) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/currency-data` |
| [toggleSpotMarginTrade()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3386) | :closed_lock_with_key:  | POST | `/v5/spot-margin-trade/switch-mode` |
| [setSpotMarginLeverage()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3397) | :closed_lock_with_key:  | POST | `/v5/spot-margin-trade/set-leverage` |
| [setSpotMarginLeverageV2()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3405) | :closed_lock_with_key:  | POST | `/v5/spot-margin-trade/set-leverage` |
| [getSpotMarginState()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3416) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/state` |
| [manualBorrow()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3423) | :closed_lock_with_key:  | POST | `/v5/account/borrow` |
| [getMaxBorrowableAmount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3432) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/max-borrowable` |
| [getPositionTiers()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3441) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/position-tiers` |
| [getCoinState()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3452) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/coinstate` |
| [getAvailableAmountToRepay()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3463) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/repayment-available-amount` |
| [manualRepayWithoutConversion()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3482) | :closed_lock_with_key:  | POST | `/v5/account/no-convert-repay` |
| [getAutoRepayMode()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3495) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/get-auto-repay-mode` |
| [setAutoRepayMode()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3511) | :closed_lock_with_key:  | POST | `/v5/spot-margin-trade/set-auto-repay-mode` |
| [getSpotMarginLiability()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3523) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/liability` |
| [submitFixedRateBorrow()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3532) | :closed_lock_with_key:  | POST | `/v5/spot-margin-trade/fixedborrow` |
| [getFixedRateBorrowOrderInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3541) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/fixedborrow-order-info` |
| [getFixedRateBorrowContractInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3558) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/fixedborrow-contract-info` |
| [getFixedRateBorrowOrderQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3575) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/fixedborrow-order-quote` |
| [renewFixedRateBorrow()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3587) | :closed_lock_with_key:  | POST | `/v5/spot-margin-trade/fixedborrow-renew` |
| [getFlexibleAvailableInventory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3593) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/flexible-available-inventory` |
| [getFixedRateAvailableInventory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3602) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/fixed-available-inventory` |
| [getSpotMarginCoinInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3620) | :closed_lock_with_key:  | GET | `/v5/spot-cross-margin-trade/pledge-token` |
| [getSpotMarginBorrowableCoinInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3637) | :closed_lock_with_key:  | GET | `/v5/spot-cross-margin-trade/borrow-token` |
| [getSpotMarginInterestAndQuota()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3654) | :closed_lock_with_key:  | GET | `/v5/spot-cross-margin-trade/loan-info` |
| [getSpotMarginLoanAccountInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3672) | :closed_lock_with_key:  | GET | `/v5/spot-cross-margin-trade/account` |
| [spotMarginBorrow()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3696) | :closed_lock_with_key:  | POST | `/v5/spot-cross-margin-trade/loan` |
| [spotMarginRepay()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3707) | :closed_lock_with_key:  | POST | `/v5/spot-cross-margin-trade/repay` |
| [getSpotMarginBorrowOrderDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3722) | :closed_lock_with_key:  | GET | `/v5/spot-cross-margin-trade/orders` |
| [getSpotMarginRepaymentOrderDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3751) | :closed_lock_with_key:  | GET | `/v5/spot-cross-margin-trade/repay-history` |
| [toggleSpotCrossMarginTrade()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3780) | :closed_lock_with_key:  | POST | `/v5/spot-cross-margin-trade/switch` |
| [getCollateralCoins()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3800) |  | GET | `/v5/crypto-loan/collateral-data` |
| [getBorrowableCoins()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3817) |  | GET | `/v5/crypto-loan/loanable-data` |
| [getAccountBorrowCollateralLimit()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3835) | :closed_lock_with_key:  | GET | `/v5/crypto-loan/borrowable-collateralisable-number` |
| [borrowCryptoLoan()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3855) | :closed_lock_with_key:  | POST | `/v5/crypto-loan/borrow` |
| [repayCryptoLoan()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3876) | :closed_lock_with_key:  | POST | `/v5/crypto-loan/repay` |
| [getUnpaidLoanOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3892) | :closed_lock_with_key:  | GET | `/v5/crypto-loan/ongoing-orders` |
| [getRepaymentHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3913) | :closed_lock_with_key:  | GET | `/v5/crypto-loan/repayment-history` |
| [getCompletedLoanOrderHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3933) | :closed_lock_with_key:  | GET | `/v5/crypto-loan/borrow-history` |
| [getMaxAllowedReductionCollateralAmount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3952) | :closed_lock_with_key:  | GET | `/v5/crypto-loan/max-collateral-amount` |
| [adjustCollateralAmount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3971) | :closed_lock_with_key:  | POST | `/v5/crypto-loan/adjust-ltv` |
| [getLoanLTVAdjustmentHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3995) | :closed_lock_with_key:  | GET | `/v5/crypto-loan/adjustment-history` |
| [getLoanBorrowableCoins()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4016) |  | GET | `/v5/crypto-loan-common/loanable-data` |
| [getLoanCollateralCoins()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4028) |  | GET | `/v5/crypto-loan-common/collateral-data` |
| [getMaxCollateralAmount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4038) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-common/max-collateral-amount` |
| [getMaxLoanAmount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4057) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-common/max-loan` |
| [updateCollateralAmount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4067) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-common/adjust-ltv` |
| [getCollateralAdjustmentHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4078) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-common/adjustment-history` |
| [getCryptoLoanPosition()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4093) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-common/position` |
| [borrowFlexible()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4110) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-flexible/borrow` |
| [repayFlexible()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4121) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-flexible/repay` |
| [repayCollateralFlexible()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4131) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-flexible/repay-collateral` |
| [getOngoingFlexibleLoans()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4145) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-flexible/ongoing-coin` |
| [getBorrowHistoryFlexible()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4157) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-flexible/borrow-history` |
| [getRepaymentHistoryFlexible()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4170) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-flexible/repayment-history` |
| [getFlexibleLoanAvailableInventory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4184) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-flexible/available-inventory` |
| [getSupplyOrderQuoteFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4204) |  | GET | `/v5/crypto-loan-fixed/supply-order-quote` |
| [getBorrowOrderQuoteFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4217) |  | GET | `/v5/crypto-loan-fixed/borrow-order-quote` |
| [createBorrowOrderFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4230) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-fixed/borrow` |
| [createSupplyOrderFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4243) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-fixed/supply` |
| [cancelBorrowOrderFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4253) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-fixed/borrow-order-cancel` |
| [cancelSupplyOrderFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4267) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-fixed/supply-order-cancel` |
| [getBorrowContractInfoFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4280) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-fixed/borrow-contract-info` |
| [getSupplyContractInfoFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4298) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-fixed/supply-contract-info` |
| [getBorrowOrderInfoFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4316) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-fixed/borrow-order-info` |
| [getSupplyOrderInfoFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4329) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-fixed/supply-order-info` |
| [repayFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4343) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-fixed/fully-repay` |
| [repayCollateralFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4354) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-flexible/repay-collateral` |
| [getRepaymentHistoryFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4367) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-fixed/repayment-history` |
| [renewBorrowOrderFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4384) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-fixed/renew` |
| [getRenewOrderInfoFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4397) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-fixed/renew-info` |
| [getFixedLoanAvailableInventory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4406) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-fixed/available-inventory` |
| [getInstitutionalLendingProductInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4421) |  | GET | `/v5/ins-loan/product-infos` |
| [getInstitutionalLendingCoinDeltaAmount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4433) | :closed_lock_with_key:  | GET | `/v5/ins-loan/coin-delta-amount` |
| [getInstitutionalLendingMarginCoinInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4443) |  | GET | `/v5/ins-loan/ensure-tokens` |
| [getInstitutionalLendingMarginCoinInfoWithConversionRate()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4452) |  | GET | `/v5/ins-loan/ensure-tokens-convert` |
| [getInstitutionalLendingLoanOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4461) | :closed_lock_with_key:  | GET | `/v5/ins-loan/loan-order` |
| [getInstitutionalLendingRepayOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4473) | :closed_lock_with_key:  | GET | `/v5/ins-loan/repaid-history` |
| [getInstitutionalLendingLTV()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4485) | :closed_lock_with_key:  | GET | `/v5/ins-loan/ltv` |
| [getInstitutionalLendingLTVWithLadderConversionRate()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4494) | :closed_lock_with_key:  | GET | `/v5/ins-loan/ltv-convert` |
| [bindOrUnbindUID()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4509) | :closed_lock_with_key:  | POST | `/v5/ins-loan/association-uid` |
| [repayInstitutionalLoan()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4529) | :closed_lock_with_key:  | POST | `/v5/ins-loan/repay-loan` |
| [getExchangeBrokerEarnings()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4550) | :closed_lock_with_key:  | GET | `/v5/broker/earnings-info` |
| [getExchangeBrokerAccountInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4563) | :closed_lock_with_key:  | GET | `/v5/broker/account-info` |
| [getBrokerSubAccountDeposits()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4579) | :closed_lock_with_key:  | GET | `/v5/broker/asset/query-sub-member-deposit-record` |
| [getBrokerVoucherSpec()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4594) | :closed_lock_with_key:  | POST | `/v5/broker/award/info` |
| [issueBrokerVoucher()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4606) | :closed_lock_with_key:  | POST | `/v5/broker/award/distribute-award` |
| [getBrokerIssuedVoucher()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4618) | :closed_lock_with_key:  | POST | `/v5/broker/award/distribution-record` |
| [setBrokerRateLimit()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4635) | :closed_lock_with_key:  | POST | `/v5/broker/apilimit/set` |
| [getBrokerRateLimitCap()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4654) | :closed_lock_with_key:  | GET | `/v5/broker/apilimit/query-cap` |
| [getAllBrokerRateLimits()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4672) | :closed_lock_with_key:  | GET | `/v5/broker/apilimit/query-all` |
| [getEarnProduct()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4692) |  | GET | `/v5/earn/product` |
| [getEarnCouponList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4704) | :closed_lock_with_key:  | GET | `/v5/earn/coupons` |
| [getRWAProductList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4714) |  | GET | `/v5/earn/rwa/product` |
| [placeRWAOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4724) | :closed_lock_with_key:  | POST | `/v5/earn/rwa/place-order` |
| [getRWAPositionList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4733) | :closed_lock_with_key:  | GET | `/v5/earn/rwa/position` |
| [getRWAOrderList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4742) | :closed_lock_with_key:  | GET | `/v5/earn/rwa/order` |
| [getRWANavChart()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4752) |  | GET | `/v5/earn/rwa/nav-chart` |
| [getHoldToEarnAirdropProducts()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4763) |  | GET | `/v5/earn/hold-to-earn/product` |
| [getAdvanceEarnProduct()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4774) |  | GET | `/v5/earn/advance/product` |
| [getLiquidityMiningProduct()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4785) |  | GET | `/v5/earn/liquidity-mining/product` |
| [getFixedTermEarnProduct()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4796) |  | GET | `/v5/earn/fixed-term/product` |
| [getAdvanceEarnProductExtraInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4808) |  | GET | `/v5/earn/advance/product-extra-info` |
| [submitAdvanceEarnPlaceOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4819) | :closed_lock_with_key:  | POST | `/v5/earn/advance/place-order` |
| [getAdvanceEarnPosition()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4830) | :closed_lock_with_key:  | GET | `/v5/earn/advance/position` |
| [getAdvanceEarnOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4841) | :closed_lock_with_key:  | GET | `/v5/earn/advance/order` |
| [submitFixedTermEarnOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4852) | :closed_lock_with_key:  | POST | `/v5/earn/fixed-term/place-order` |
| [redeemFixedTermEarn()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4863) | :closed_lock_with_key:  | POST | `/v5/earn/fixed-term/redeem` |
| [getFixedTermEarnPosition()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4874) | :closed_lock_with_key:  | GET | `/v5/earn/fixed-term/position` |
| [getFixedTermEarnOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4885) | :closed_lock_with_key:  | GET | `/v5/earn/fixed-term/order` |
| [setFixedTermEarnAutoInvest()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4896) | :closed_lock_with_key:  | POST | `/v5/earn/fixed-term/position/auto-invest` |
| [submitStakeRedeem()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4912) | :closed_lock_with_key:  | POST | `/v5/earn/place-order` |
| [getEarnOrderHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4931) | :closed_lock_with_key:  | GET | `/v5/earn/order` |
| [getEarnPosition()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4949) | :closed_lock_with_key:  | GET | `/v5/earn/position` |
| [modifyEarnPosition()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4962) | :closed_lock_with_key:  | POST | `/v5/earn/position/modify` |
| [getEarnYieldHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4975) | :closed_lock_with_key:  | GET | `/v5/earn/yield` |
| [getHoldToEarnAirdropYieldHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4989) | :closed_lock_with_key:  | GET | `/v5/earn/hold-to-earn/yield-history` |
| [getEarnHourlyYieldHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5000) | :closed_lock_with_key:  | GET | `/v5/earn/hourly-yield` |
| [getEarnAprHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5014) |  | GET | `/v5/earn/apr-history` |
| [getEarnTokenProduct()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5024) |  | GET | `/v5/earn/token/product` |
| [submitEarnTokenOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5033) | :closed_lock_with_key:  | POST | `/v5/earn/token/place-order` |
| [getEarnTokenOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5042) | :closed_lock_with_key:  | GET | `/v5/earn/token/order` |
| [getEarnTokenPosition()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5054) | :closed_lock_with_key:  | GET | `/v5/earn/token/position` |
| [getEarnTokenDailyYield()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5063) | :closed_lock_with_key:  | GET | `/v5/earn/token/yield` |
| [getEarnTokenHourlyYield()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5075) | :closed_lock_with_key:  | GET | `/v5/earn/token/hourly-yield` |
| [getEarnTokenHistoryApr()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5087) |  | GET | `/v5/earn/token/history-apr` |
| [getPwmInvestmentPlanList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5102) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/investment-plan/list` |
| [getPwmInvestmentPlanDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5111) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/investment-plan/detail` |
| [getPwmPendingInvestmentPlanDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5120) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/investment-plan/new-plan` |
| [claimPwmWithdrawableFunds()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5129) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/investment-plan/claim` |
| [getPwmInvestmentPlanAssetTrend()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5138) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/investment-plan/asset-trend` |
| [getPwmFundHistoricalNav()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5147) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/investment-plan/fund-nav` |
| [subscribePwmInvestmentPlan()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5156) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/investment-plan/subscribe` |
| [investMorePwmInvestmentPlan()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5165) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/investment-plan/invest-more` |
| [redeemPwmInvestmentPlan()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5174) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/investment-plan/redeem` |
| [getPwmInvestmentPlanOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5183) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/investment-plan/order` |
| [getPwmSubscribableProductInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5192) |  | GET | `/v5/earn/pwm/customize-plan/product` |
| [createPwmCustomizeInvestmentPlan()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5201) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/customize-plan/create` |
| [getPwmAllFunds()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5216) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/asset-manager/all-funds` |
| [settlePwmFundProfit()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5225) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/asset-manager/settle-profit` |
| [createPwmFund()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5234) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/asset-manager/create-fund` |
| [createPwmAssetManagerInvestmentPlan()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5243) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/asset-manager/create-investment-plan` |
| [getPwmAssetManagerInvestmentPlans()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5257) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/asset-manager/get-investment-plan` |
| [managePwmAssetManagerInvestmentPlan()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5269) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/asset-manager/manage-investment-plan` |
| [getPwmAllFundOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5283) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/asset-manager/all-order` |
| [managePwmFundOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5292) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/asset-manager/manage-order` |
| [createPwmFundSubAccount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5301) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/asset-manager/create-sub-account` |
| [pwmFundTransfer()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5313) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/fund-transfer` |
| [getPwmFundTransferRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5322) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/query-fund-transfer-result` |
| [queryCardAssetRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5337) | :closed_lock_with_key:  | POST | `/v5/card/transaction/query-asset-records` |
| [queryCardPointsBalance()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5346) | :closed_lock_with_key:  | POST | `/v5/card/reward/points/balance` |
| [queryCardPointsRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5353) | :closed_lock_with_key:  | POST | `/v5/card/reward/points/records` |
| [queryCardPointsTier()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5362) | :closed_lock_with_key:  | POST | `/v5/card/reward/points/tier` |
| [queryCardMallItemList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5369) | :closed_lock_with_key:  | POST | `/v5/card/reward/mall/item/list` |
| [queryCardPointCashbackDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5378) | :closed_lock_with_key:  | POST | `/v5/card/reward/point/cashback/detail` |
| [createRFQ()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5394) | :closed_lock_with_key:  | POST | `/v5/rfq/create-rfq` |
| [getRFQConfig()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5405) | :closed_lock_with_key:  | GET | `/v5/rfq/config` |
| [cancelRFQ()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5414) | :closed_lock_with_key:  | POST | `/v5/rfq/cancel-rfq` |
| [cancelAllRFQ()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5424) | :closed_lock_with_key:  | POST | `/v5/rfq/cancel-all-rfq` |
| [createRFQQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5433) | :closed_lock_with_key:  | POST | `/v5/rfq/create-quote` |
| [executeRFQQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5444) | :closed_lock_with_key:  | POST | `/v5/rfq/execute-quote` |
| [cancelRFQQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5455) | :closed_lock_with_key:  | POST | `/v5/rfq/cancel-quote` |
| [cancelAllRFQQuotes()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5465) | :closed_lock_with_key:  | POST | `/v5/rfq/cancel-all-quotes` |
| [getRFQRealtimeInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5479) | :closed_lock_with_key:  | GET | `/v5/rfq/rfq-realtime` |
| [getRFQHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5491) | :closed_lock_with_key:  | GET | `/v5/rfq/rfq-list` |
| [getRFQRealtimeQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5505) | :closed_lock_with_key:  | GET | `/v5/rfq/quote-realtime` |
| [getRFQHistoryQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5520) | :closed_lock_with_key:  | GET | `/v5/rfq/quote-list` |
| [getRFQTrades()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5533) | :closed_lock_with_key:  | GET | `/v5/rfq/trade-list` |
| [getRFQPublicTrades()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5546) | :closed_lock_with_key:  | GET | `/v5/rfq/public-trades` |
| [acceptNonLPQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5562) | :closed_lock_with_key:  | POST | `/v5/rfq/accept-other-quote` |
| [getRFQDetails()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5568) | :closed_lock_with_key:  | GET | `/v5/rfq/rfq-detail-list` |
| [getP2PAccountCoinsBalance()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5593) | :closed_lock_with_key:  | GET | `/v5/asset/transfer/query-account-coins-balance` |
| [getP2POnlineAds()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5610) | :closed_lock_with_key:  | POST | `/v5/p2p/item/online` |
| [createP2PAd()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5619) | :closed_lock_with_key:  | POST | `/v5/p2p/item/create` |
| [cancelP2PAd()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5628) | :closed_lock_with_key:  | POST | `/v5/p2p/item/cancel` |
| [updateP2PAd()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5642) | :closed_lock_with_key:  | POST | `/v5/p2p/item/update` |
| [getP2PPersonalAds()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5652) | :closed_lock_with_key:  | POST | `/v5/p2p/item/personal/list` |
| [getP2PAdDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5661) | :closed_lock_with_key:  | POST | `/v5/p2p/item/info` |
| [getP2POrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5676) | :closed_lock_with_key:  | POST | `/v5/p2p/order/simplifyList` |
| [getP2POrderDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5686) | :closed_lock_with_key:  | POST | `/v5/p2p/order/info` |
| [getP2PPendingOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5695) | :closed_lock_with_key:  | POST | `/v5/p2p/order/pending/simplifyList` |
| [markP2POrderAsPaid()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5704) | :closed_lock_with_key:  | POST | `/v5/p2p/order/pay` |
| [releaseP2POrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5713) | :closed_lock_with_key:  | POST | `/v5/p2p/order/finish` |
| [sendP2POrderMessage()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5722) | :closed_lock_with_key:  | POST | `/v5/p2p/order/message/send` |
| [getP2POrderMessages()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5756) | :closed_lock_with_key:  | POST | `/v5/p2p/order/message/listpage` |
| [getP2PUserInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5770) | :closed_lock_with_key:  | POST | `/v5/p2p/user/personal/info` |
| [getP2PCounterpartyUserInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5777) | :closed_lock_with_key:  | POST | `/v5/p2p/user/order/personal/info` |
| [getP2PUserPayments()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5786) | :closed_lock_with_key:  | POST | `/v5/p2p/user/payment/list` |
| [setApiRateLimit()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5806) | :closed_lock_with_key:  | POST | `/v5/apilimit/set` |
| [queryApiRateLimit()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5835) | :closed_lock_with_key:  | GET | `/v5/apilimit/query` |
| [getRateLimitCap()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5854) | :closed_lock_with_key:  | GET | `/v5/apilimit/query-cap` |
| [getAllRateLimits()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5873) | :closed_lock_with_key:  | GET | `/v5/apilimit/query-all` |
| [getLaunchpoolProjectList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5896) |  | GET | `/v5/spot-x/launchpool/project/list` |
| [getLaunchpoolUserActivityLog()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5902) | :closed_lock_with_key:  | POST | `/v5/spot-x/launchpool/user/activity-log` |
| [getLaunchpoolCurrentStaking()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5908) | :closed_lock_with_key:  | GET | `/v5/spot-x/launchpool/user/current-staking` |
| [getLaunchpoolUserHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5914) | :closed_lock_with_key:  | POST | `/v5/spot-x/launchpool/user/history` |
| [getPuzzleProjectList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5920) |  | GET | `/v5/spot-x/puzzle/project/list` |
| [getTokenSplashProjectList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5926) |  | GET | `/v5/spot-x/token-splash/project/list` |
| [getTokenSplashUserActivityParams()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5932) | :closed_lock_with_key:  | GET | `/v5/spot-x/token-splash/user/activity-params` |

# websocket-api-client.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [websocket-api-client.ts](/src/websocket-api-client.ts). 

This client provides WebSocket API endpoints which allow for faster interactions with the Bybit API via a WebSocket connection.

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| [submitNewOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/websocket-api-client.ts#L95) | :closed_lock_with_key:  | WS | `order.create` |
| [amendOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/websocket-api-client.ts#L111) | :closed_lock_with_key:  | WS | `order.amend` |
| [cancelOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/websocket-api-client.ts#L127) | :closed_lock_with_key:  | WS | `order.cancel` |
| [batchSubmitOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/websocket-api-client.ts#L143) | :closed_lock_with_key:  | WS | `order.create-batch` |
| [batchAmendOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/websocket-api-client.ts#L171) | :closed_lock_with_key:  | WS | `order.amend-batch` |
| [batchCancelOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/websocket-api-client.ts#L199) | :closed_lock_with_key:  | WS | `order.cancel-batch` |