
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
| [getSystemStatus()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L722) | :closed_lock_with_key:  | GET | `/v5/system/status` |
| [getServerTime()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L739) |  | GET | `/v5/market/time` |
| [requestDemoTradingFunds()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L751) | :closed_lock_with_key:  | POST | `/v5/account/demo-apply-money` |
| [createDemoAccount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L764) | :closed_lock_with_key:  | POST | `/v5/user/create-demo-member` |
| [getSpreadInstrumentsInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L777) |  | GET | `/v5/spread/instrument` |
| [getSpreadOrderbook()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L789) |  | GET | `/v5/spread/orderbook` |
| [getSpreadTickers()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L799) |  | GET | `/v5/spread/tickers` |
| [getSpreadRecentTrades()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L810) |  | GET | `/v5/spread/recent-trade` |
| [getSpreadMaxQty()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L822) | :closed_lock_with_key:  | GET | `/v5/spread/max-qty` |
| [submitSpreadOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L831) | :closed_lock_with_key:  | POST | `/v5/spread/order/create` |
| [amendSpreadOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L844) | :closed_lock_with_key:  | POST | `/v5/spread/order/amend` |
| [cancelSpreadOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L856) | :closed_lock_with_key:  | POST | `/v5/spread/order/cancel` |
| [cancelAllSpreadOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L874) | :closed_lock_with_key:  | POST | `/v5/spread/order/cancel-all` |
| [getSpreadOpenOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L893) | :closed_lock_with_key:  | GET | `/v5/spread/order/realtime` |
| [getSpreadOrderHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L910) | :closed_lock_with_key:  | GET | `/v5/spread/order/history` |
| [getSpreadTradeHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L926) | :closed_lock_with_key:  | GET | `/v5/spread/execution/list` |
| [getKline()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L946) |  | GET | `/v5/market/kline` |
| [getMarkPriceKline()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L963) |  | GET | `/v5/market/mark-price-kline` |
| [getIndexPriceKline()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L978) |  | GET | `/v5/market/index-price-kline` |
| [getPremiumIndexPriceKline()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L993) |  | GET | `/v5/market/premium-index-price-kline` |
| [getInstrumentsInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1009) |  | GET | `/v5/market/instruments-info` |
| [getOrderbook()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1020) |  | GET | `/v5/market/orderbook` |
| [getFullDepthOrderbook()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1026) |  | GET | `/v5/market/full_orderbook` |
| [getRPIOrderbook()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1040) |  | GET | `/v5/market/rpi_orderbook` |
| [getTickers()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1046) |  | GET | `/v5/market/tickers` |
| [getFundingRateHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1084) |  | GET | `/v5/market/funding/history` |
| [getPublicTradingHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1099) |  | GET | `/v5/market/recent-trade` |
| [getOpenInterest()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1112) |  | GET | `/v5/market/open-interest` |
| [getHistoricalVolatility()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1122) |  | GET | `/v5/market/historical-volatility` |
| [getInsurance()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1133) |  | GET | `/v5/market/insurance` |
| [getRiskLimit()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1144) |  | GET | `/v5/market/risk-limit` |
| [getOptionDeliveryPrice()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1159) |  | GET | `/v5/market/delivery-price` |
| [getDeliveryPrice()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1172) |  | GET | `/v5/market/delivery-price` |
| [getNewDeliveryPrice()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1188) |  | GET | `/v5/market/new-delivery-price` |
| [getLongShortRatio()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1204) |  | GET | `/v5/market/account-ratio` |
| [getIndexPriceComponents()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1214) |  | GET | `/v5/market/index-price-components` |
| [getOrderPriceLimit()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1220) |  | GET | `/v5/market/price-limit` |
| [getADLAlert()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1234) |  | GET | `/v5/market/adlAlert` |
| [getFeeGroupStructure()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1247) |  | GET | `/v5/market/fee-group-info` |
| [getOptionBaseCoins()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1256) |  | GET | `/v5/market/option-base-coins` |
| [submitOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1268) | :closed_lock_with_key:  | POST | `/v5/order/create` |
| [amendOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1274) | :closed_lock_with_key:  | POST | `/v5/order/amend` |
| [cancelOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1280) | :closed_lock_with_key:  | POST | `/v5/order/cancel` |
| [getActiveOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1289) | :closed_lock_with_key:  | GET | `/v5/order/realtime` |
| [cancelAllOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1295) | :closed_lock_with_key:  | POST | `/v5/order/cancel-all` |
| [getHistoricOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1308) | :closed_lock_with_key:  | GET | `/v5/order/history` |
| [getExecutionList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1320) | :closed_lock_with_key:  | GET | `/v5/execution/list` |
| [batchSubmitOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1338) | :closed_lock_with_key:  | POST | `/v5/order/create-batch` |
| [batchAmendOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1363) | :closed_lock_with_key:  | POST | `/v5/order/amend-batch` |
| [batchCancelOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1388) | :closed_lock_with_key:  | POST | `/v5/order/cancel-batch` |
| [getSpotBorrowCheck()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1410) | :closed_lock_with_key:  | GET | `/v5/order/spot-borrow-check` |
| [setDisconnectCancelAllWindow()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1431) | :closed_lock_with_key:  | POST | `/v5/order/disconnected-cancel-all` |
| [setDisconnectCancelAllWindowV2()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1449) | :closed_lock_with_key:  | POST | `/v5/order/disconnected-cancel-all` |
| [preCheckOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1464) | :closed_lock_with_key:  | POST | `/v5/order/pre-check` |
| [createStrategyOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1481) | :closed_lock_with_key:  | POST | `/v5/strategy/create` |
| [getStrategyList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1492) | :closed_lock_with_key:  | GET | `/v5/strategy/list` |
| [getStrategyOrderList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1503) | :closed_lock_with_key:  | GET | `/v5/strategy/order-list` |
| [stopStrategy()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1514) | :closed_lock_with_key:  | POST | `/v5/strategy/stop` |
| [getPositionInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1539) | :closed_lock_with_key:  | GET | `/v5/position/list` |
| [getFuturesLeverage()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1551) | :closed_lock_with_key:  | GET | `/v5/position/symbol-info` |
| [setLeverage()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1566) | :closed_lock_with_key:  | POST | `/v5/position/set-leverage` |
| [switchIsolatedMargin()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1579) | :closed_lock_with_key:  | POST | `/v5/position/switch-isolated` |
| [setTPSLMode()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1593) | :closed_lock_with_key:  | POST | `/v5/position/set-tpsl-mode` |
| [switchPositionMode()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1608) | :closed_lock_with_key:  | POST | `/v5/position/switch-mode` |
| [setRiskLimit()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1622) | :closed_lock_with_key:  | POST | `/v5/position/set-risk-limit` |
| [setTradingStop()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1637) | :closed_lock_with_key:  | POST | `/v5/position/trading-stop` |
| [setAutoAddMargin()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1648) | :closed_lock_with_key:  | POST | `/v5/position/set-auto-add-margin` |
| [addOrReduceMargin()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1660) | :closed_lock_with_key:  | POST | `/v5/position/add-margin` |
| [getClosedPnL()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1672) | :closed_lock_with_key:  | GET | `/v5/position/closed-pnl` |
| [getClosedOptionsPositions()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1686) | :closed_lock_with_key:  | GET | `/v5/position/get-closed-positions` |
| [movePosition()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1711) | :closed_lock_with_key:  | POST | `/v5/position/move-positions` |
| [getMovePositionHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1722) | :closed_lock_with_key:  | GET | `/v5/position/move-history` |
| [confirmNewRiskLimit()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1741) | :closed_lock_with_key:  | POST | `/v5/position/confirm-pending-mmr` |
| [getPreUpgradeOrderHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1761) | :closed_lock_with_key:  | GET | `/v5/pre-upgrade/order/history` |
| [getPreUpgradeTradeHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1776) | :closed_lock_with_key:  | GET | `/v5/pre-upgrade/execution/list` |
| [getPreUpgradeClosedPnl()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1787) | :closed_lock_with_key:  | GET | `/v5/pre-upgrade/position/closed-pnl` |
| [getPreUpgradeTransactions()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1801) | :closed_lock_with_key:  | GET | `/v5/pre-upgrade/account/transaction-log` |
| [getPreUpgradeOptionDeliveryRecord()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1818) | :closed_lock_with_key:  | GET | `/v5/pre-upgrade/asset/delivery-record` |
| [getPreUpgradeUSDCSessionSettlements()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1832) | :closed_lock_with_key:  | GET | `/v5/pre-upgrade/asset/settlement-record` |
| [getWalletBalance()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1853) | :closed_lock_with_key:  | GET | `/v5/account/wallet-balance` |
| [getTransferableAmount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1864) | :closed_lock_with_key:  | GET | `/v5/account/withdrawal` |
| [getAccountInstrumentsInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1881) | :closed_lock_with_key:  | GET | `/v5/account/instruments-info` |
| [upgradeToUnifiedAccount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1892) | :closed_lock_with_key:  | POST | `/v5/account/upgrade-to-uta` |
| [getBorrowHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1903) | :closed_lock_with_key:  | GET | `/v5/account/borrow-history` |
| [repayLiability()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1924) | :closed_lock_with_key:  | POST | `/v5/account/quick-repayment` |
| [manualRepay()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1949) | :closed_lock_with_key:  | POST | `/v5/account/repay` |
| [setCollateralCoin()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1958) | :closed_lock_with_key:  | POST | `/v5/account/set-collateral-switch` |
| [batchSetCollateralCoin()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1964) | :closed_lock_with_key:  | POST | `/v5/account/set-collateral-switch-batch` |
| [getCollateralInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1974) | :closed_lock_with_key:  | GET | `/v5/account/collateral-info` |
| [getCoinGreeks()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1983) | :closed_lock_with_key:  | GET | `/v5/asset/coin-greeks` |
| [getFeeRate()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1996) | :closed_lock_with_key:  | GET | `/v5/account/fee-rate` |
| [getAccountInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2005) | :closed_lock_with_key:  | GET | `/v5/account/info` |
| [getDCPInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2018) | :closed_lock_with_key:  | GET | `/v5/account/query-dcp-info` |
| [getTransactionLog()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2025) | :closed_lock_with_key:  | GET | `/v5/account/transaction-log` |
| [getClassicTransactionLogs()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2036) | :closed_lock_with_key:  | GET | `/v5/account/contract-transaction-log` |
| [getSMPGroup()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2047) | :closed_lock_with_key:  | GET | `/v5/account/smp-group` |
| [setMarginMode()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2060) | :closed_lock_with_key:  | POST | `/v5/account/set-margin-mode` |
| [setSpotHedging()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2077) | :closed_lock_with_key:  | POST | `/v5/account/set-hedging-mode` |
| [setLimitPriceAction()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2090) | :closed_lock_with_key:  | POST | `/v5/account/set-limit-px-action` |
| [getLimitPriceAction()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2101) | :closed_lock_with_key:  | GET | `/v5/account/user-setting-config` |
| [setDeltaNeutralMode()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2109) | :closed_lock_with_key:  | POST | `/v5/account/set-delta-mode` |
| [setMMP()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2118) | :closed_lock_with_key:  | POST | `/v5/account/mmp-modify` |
| [resetMMP()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2125) | :closed_lock_with_key:  | POST | `/v5/account/mmp-reset` |
| [getMMPState()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2132) | :closed_lock_with_key:  | GET | `/v5/account/mmp-state` |
| [getOptionAssetInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2142) | :closed_lock_with_key:  | GET | `/v5/account/option-asset-info` |
| [getPayInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2152) | :closed_lock_with_key:  | GET | `/v5/account/pay-info` |
| [getTradeInfoForAnalysis()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2162) | :closed_lock_with_key:  | GET | `/v5/account/trade-info-for-analysis` |
| [getAssetOverview()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2182) | :closed_lock_with_key:  | GET | `/v5/asset/asset-overview` |
| [getPortfolioMarginInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2192) | :closed_lock_with_key:  | GET | `/v5/asset/portfolio-margin` |
| [getTotalMembersAssets()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2202) | :closed_lock_with_key:  | GET | `/v5/asset/total-members-assets` |
| [getFundingAccountTransactionHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2214) | :closed_lock_with_key:  | GET | `/v5/asset/fundinghistory` |
| [getDeliveryRecord()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2230) | :closed_lock_with_key:  | GET | `/v5/asset/delivery-record` |
| [getSettlementRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2241) | :closed_lock_with_key:  | GET | `/v5/asset/settlement-record` |
| [getCoinExchangeRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2254) | :closed_lock_with_key:  | GET | `/v5/asset/exchange/order-record` |
| [getCoinInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2269) | :closed_lock_with_key:  | GET | `/v5/asset/coin/query-info` |
| [getSubUID()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2283) | :closed_lock_with_key:  | GET | `/v5/asset/transfer/query-sub-member-list` |
| [getAssetInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2298) | :closed_lock_with_key:  | GET | `/v5/asset/transfer/query-asset-info` |
| [getAllCoinsBalance()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2309) | :closed_lock_with_key:  | GET | `/v5/asset/transfer/query-account-coins-balance` |
| [getCoinBalance()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2323) | :closed_lock_with_key:  | GET | `/v5/asset/transfer/query-account-coin-balance` |
| [getWithdrawableAmount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2337) | :closed_lock_with_key:  | GET | `/v5/asset/withdraw/withdrawable-amount` |
| [getTransferableCoinList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2346) | :closed_lock_with_key:  | GET | `/v5/asset/transfer/query-transfer-coin-list` |
| [createInternalTransfer()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2362) | :closed_lock_with_key:  | POST | `/v5/asset/transfer/inter-transfer` |
| [getInternalTransferRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2381) | :closed_lock_with_key:  | GET | `/v5/asset/transfer/query-inter-transfer-list` |
| [enableUniversalTransferForSubUIDs()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2401) | :closed_lock_with_key:  | POST | `/v5/asset/transfer/save-transfer-sub-member` |
| [createUniversalTransfer()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2412) | :closed_lock_with_key:  | POST | `/v5/asset/transfer/universal-transfer` |
| [getUniversalTransferRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2424) | :closed_lock_with_key:  | GET | `/v5/asset/transfer/query-universal-transfer-list` |
| [getAllowedDepositCoinInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2437) | :closed_lock_with_key:  | GET | `/v5/asset/deposit/query-allowed-list` |
| [setDepositAccount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2452) | :closed_lock_with_key:  | POST | `/v5/asset/deposit/deposit-to-account` |
| [getDepositRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2468) | :closed_lock_with_key:  | GET | `/v5/asset/deposit/query-record` |
| [getSubAccountDepositRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2483) | :closed_lock_with_key:  | GET | `/v5/asset/deposit/query-sub-member-record` |
| [getInternalDepositRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2499) | :closed_lock_with_key:  | GET | `/v5/asset/deposit/query-internal-record` |
| [getMasterDepositAddress()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2511) | :closed_lock_with_key:  | GET | `/v5/asset/deposit/query-address` |
| [getSubDepositAddress()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2529) | :closed_lock_with_key:  | GET | `/v5/asset/deposit/query-sub-member-address` |
| [querySubMemberAddress()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2554) | :closed_lock_with_key:  | GET | `/v5/asset/deposit/query-sub-member-address` |
| [getWithdrawalRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2574) | :closed_lock_with_key:  | GET | `/v5/asset/withdraw/query-record` |
| [getWithdrawalAddressList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2586) | :closed_lock_with_key:  | GET | `/v5/asset/withdraw/query-address` |
| [getExchangeEntities()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2600) | :closed_lock_with_key:  | GET | `/v5/asset/withdraw/vasp/list` |
| [submitDepositOriginatorInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2610) | :closed_lock_with_key:  | POST | `/v5/asset/travel-rule/deposit/submit` |
| [submitWithdrawal()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2625) | :closed_lock_with_key:  | POST | `/v5/asset/withdraw/create` |
| [cancelWithdrawal()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2636) | :closed_lock_with_key:  | POST | `/v5/asset/withdraw/cancel` |
| [getConvertCoins()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2645) | :closed_lock_with_key:  | GET | `/v5/asset/exchange/query-coin-list` |
| [requestConvertQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2656) | :closed_lock_with_key:  | POST | `/v5/asset/exchange/quote-apply` |
| [confirmConvertQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2665) | :closed_lock_with_key:  | POST | `/v5/asset/exchange/convert-execute` |
| [getConvertStatus()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2677) | :closed_lock_with_key:  | GET | `/v5/asset/exchange/convert-result-query` |
| [getConvertHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2696) | :closed_lock_with_key:  | GET | `/v5/asset/exchange/query-convert-history` |
| [getSmallBalanceList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2713) | :closed_lock_with_key:  | GET | `/v5/asset/covert/small-balance-list` |
| [getFiatTradingPairList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2727) | :closed_lock_with_key:  | GET | `/v5/fiat/query-coin-list` |
| [createSubMember()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2745) | :closed_lock_with_key:  | POST | `/v5/user/create-sub-member` |
| [createSubUIDAPIKey()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2757) | :closed_lock_with_key:  | POST | `/v5/user/create-sub-api` |
| [getSubUIDList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2766) | :closed_lock_with_key:  | GET | `/v5/user/query-sub-members` |
| [getSubUIDListUnlimited()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2775) | :closed_lock_with_key:  | GET | `/v5/user/submembers` |
| [setSubUIDFrozenState()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2793) | :closed_lock_with_key:  | POST | `/v5/user/frozen-sub-member` |
| [getQueryApiKey()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2808) | :closed_lock_with_key:  | GET | `/v5/user/query-api` |
| [getSubAccountAllApiKeys()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2815) | :closed_lock_with_key:  | GET | `/v5/user/sub-apikeys` |
| [getUIDWalletType()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2824) | :closed_lock_with_key:  | GET | `/v5/user/get-member-type` |
| [updateMasterApiKey()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2843) | :closed_lock_with_key:  | POST | `/v5/user/update-api` |
| [updateSubApiKey()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2857) | :closed_lock_with_key:  | POST | `/v5/user/update-sub-api` |
| [deleteSubMember()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2870) | :closed_lock_with_key:  | POST | `/v5/user/del-submember` |
| [deleteMasterApiKey()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2885) | :closed_lock_with_key:  | POST | `/v5/user/delete-api` |
| [deleteSubApiKey()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2899) | :closed_lock_with_key:  | POST | `/v5/user/delete-sub-api` |
| [createTaxBatchExport()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2914) | :closed_lock_with_key:  | POST | `/v5/fht/compliance/tax/private/batch_create` |
| [getTaxBatchExport()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2926) | :closed_lock_with_key:  | GET | `/v5/fht/compliance/tax/private/batch_query` |
| [getAffiliateUserList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2949) | :closed_lock_with_key:  | GET | `/v5/affiliate/aff-user-list` |
| [getAffiliateSubAffiliateList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2967) | :closed_lock_with_key:  | GET | `/v5/affiliate/affiliate-sub-list` |
| [getAffiliateUserInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2983) | :closed_lock_with_key:  | GET | `/v5/user/aff-customer-info` |
| [getFriendReferrals()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2995) | :closed_lock_with_key:  | GET | `/v5/user/invitation/referrals` |
| [getReferralCode()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3004) | :closed_lock_with_key:  | GET | `/v5/user/invitation/code` |
| [signAgreement()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3020) | :closed_lock_with_key:  | POST | `/v5/user/agreement` |
| [getAlphaTradeQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3037) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/quote` |
| [executeAlphaTradePurchase()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3048) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/purchase` |
| [executeAlphaTradeRedeem()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3059) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/redeem` |
| [getAlphaPayTokenList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3069) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/pay-token-list` |
| [getAlphaTradeOrderList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3079) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/order-list` |
| [getAlphaBizTokenList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3089) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/biz-token-list` |
| [getAlphaBizTokenPriceList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3099) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/biz-token-price-list` |
| [getAlphaBizTokenDetails()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3109) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/biz-token-details` |
| [getAlphaAssetList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3119) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/asset-list` |
| [getAlphaAssetDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3127) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/asset-detail` |
| [getAlphaPredictionEngineStatus()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3143) | :closed_lock_with_key:  | GET | `/v5/alpha/prediction/engine-status` |
| [getAlphaPredictionPayTokenList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3153) | :closed_lock_with_key:  | GET | `/v5/alpha/prediction/pay-token-list` |
| [getAlphaPredictionEventDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3163) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/event-detail` |
| [getAlphaPredictionOrderEstimate()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3173) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/order-estimate` |
| [executeAlphaPredictionBuy()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3183) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/buy` |
| [executeAlphaPredictionSell()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3193) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/sell` |
| [getAlphaPredictionOrderList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3203) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/order-list` |
| [getAlphaPredictionOrderBook()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3213) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/order-book` |
| [getAlphaPredictionTokenPrice()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3223) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/token-price` |
| [getAlphaPredictionPriceHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3233) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/price-history` |
| [getAlphaPredictionPositionList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3243) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/position-list` |
| [getAlphaPredictionPositionHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3253) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/position-history` |
| [getAlphaPredictionPortfolioSummary()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3263) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/portfolio-summary` |
| [getAlphaPredictionSideMarketList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3273) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/side-market-list` |
| [getAlphaPredictionSportsMatchList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3283) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/sports/match-list` |
| [getAlphaPredictionSportsTimelineStages()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3293) | :closed_lock_with_key:  | GET | `/v5/alpha/prediction/sports/timeline-stages` |
| [getAlphaPredictionSportsGroupStageDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3306) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/sports/group-stage-detail` |
| [getAlphaLPPoolList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3325) | :closed_lock_with_key:  | POST | `/v5/alpha/lp/pool-list` |
| [getAlphaLPPoolInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3335) | :closed_lock_with_key:  | POST | `/v5/alpha/lp/pool-info` |
| [executeAlphaLPStake()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3345) | :closed_lock_with_key:  | POST | `/v5/alpha/lp/stake` |
| [executeAlphaLPRedeem()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3355) | :closed_lock_with_key:  | POST | `/v5/alpha/lp/redeem` |
| [getAlphaLPOrderList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3365) | :closed_lock_with_key:  | POST | `/v5/alpha/lp/order-list` |
| [getAlphaLPPayTokenList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3375) | :closed_lock_with_key:  | POST | `/v5/alpha/lp/pay-token-list` |
| [getAlphaLPPayTokenPrice()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3385) | :closed_lock_with_key:  | POST | `/v5/alpha/lp/pay-token-price` |
| [getAlphaLPPositionList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3395) | :closed_lock_with_key:  | POST | `/v5/alpha/lp/position-list` |
| [getVIPMarginData()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3415) |  | GET | `/v5/spot-margin-trade/data` |
| [getHistoricalInterestRate()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3426) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/interest-rate-history` |
| [getSpotMarginCurrencyData()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3451) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/currency-data` |
| [toggleSpotMarginTrade()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3463) | :closed_lock_with_key:  | POST | `/v5/spot-margin-trade/switch-mode` |
| [setSpotMarginLeverage()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3474) | :closed_lock_with_key:  | POST | `/v5/spot-margin-trade/set-leverage` |
| [setSpotMarginLeverageV2()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3482) | :closed_lock_with_key:  | POST | `/v5/spot-margin-trade/set-leverage` |
| [getSpotMarginState()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3493) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/state` |
| [manualBorrow()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3500) | :closed_lock_with_key:  | POST | `/v5/account/borrow` |
| [getMaxBorrowableAmount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3509) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/max-borrowable` |
| [getPositionTiers()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3518) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/position-tiers` |
| [getCoinState()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3529) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/coinstate` |
| [getAvailableAmountToRepay()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3540) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/repayment-available-amount` |
| [manualRepayWithoutConversion()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3559) | :closed_lock_with_key:  | POST | `/v5/account/no-convert-repay` |
| [getAutoRepayMode()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3572) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/get-auto-repay-mode` |
| [setAutoRepayMode()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3588) | :closed_lock_with_key:  | POST | `/v5/spot-margin-trade/set-auto-repay-mode` |
| [getSpotMarginLiability()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3600) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/liability` |
| [submitFixedRateBorrow()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3609) | :closed_lock_with_key:  | POST | `/v5/spot-margin-trade/fixedborrow` |
| [getFixedRateBorrowOrderInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3618) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/fixedborrow-order-info` |
| [getFixedRateBorrowContractInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3635) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/fixedborrow-contract-info` |
| [getFixedRateBorrowOrderQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3652) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/fixedborrow-order-quote` |
| [renewFixedRateBorrow()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3664) | :closed_lock_with_key:  | POST | `/v5/spot-margin-trade/fixedborrow-renew` |
| [getFlexibleAvailableInventory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3670) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/flexible-available-inventory` |
| [getFixedRateAvailableInventory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3679) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/fixed-available-inventory` |
| [getSpotMarginCoinInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3697) | :closed_lock_with_key:  | GET | `/v5/spot-cross-margin-trade/pledge-token` |
| [getSpotMarginBorrowableCoinInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3714) | :closed_lock_with_key:  | GET | `/v5/spot-cross-margin-trade/borrow-token` |
| [getSpotMarginInterestAndQuota()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3731) | :closed_lock_with_key:  | GET | `/v5/spot-cross-margin-trade/loan-info` |
| [getSpotMarginLoanAccountInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3749) | :closed_lock_with_key:  | GET | `/v5/spot-cross-margin-trade/account` |
| [spotMarginBorrow()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3773) | :closed_lock_with_key:  | POST | `/v5/spot-cross-margin-trade/loan` |
| [spotMarginRepay()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3784) | :closed_lock_with_key:  | POST | `/v5/spot-cross-margin-trade/repay` |
| [getSpotMarginBorrowOrderDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3799) | :closed_lock_with_key:  | GET | `/v5/spot-cross-margin-trade/orders` |
| [getSpotMarginRepaymentOrderDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3828) | :closed_lock_with_key:  | GET | `/v5/spot-cross-margin-trade/repay-history` |
| [toggleSpotCrossMarginTrade()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3857) | :closed_lock_with_key:  | POST | `/v5/spot-cross-margin-trade/switch` |
| [getCollateralCoins()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3877) |  | GET | `/v5/crypto-loan/collateral-data` |
| [getBorrowableCoins()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3894) |  | GET | `/v5/crypto-loan/loanable-data` |
| [getAccountBorrowCollateralLimit()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3912) | :closed_lock_with_key:  | GET | `/v5/crypto-loan/borrowable-collateralisable-number` |
| [borrowCryptoLoan()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3932) | :closed_lock_with_key:  | POST | `/v5/crypto-loan/borrow` |
| [repayCryptoLoan()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3953) | :closed_lock_with_key:  | POST | `/v5/crypto-loan/repay` |
| [getUnpaidLoanOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3969) | :closed_lock_with_key:  | GET | `/v5/crypto-loan/ongoing-orders` |
| [getRepaymentHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3990) | :closed_lock_with_key:  | GET | `/v5/crypto-loan/repayment-history` |
| [getCompletedLoanOrderHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4010) | :closed_lock_with_key:  | GET | `/v5/crypto-loan/borrow-history` |
| [getMaxAllowedReductionCollateralAmount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4029) | :closed_lock_with_key:  | GET | `/v5/crypto-loan/max-collateral-amount` |
| [adjustCollateralAmount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4048) | :closed_lock_with_key:  | POST | `/v5/crypto-loan/adjust-ltv` |
| [getLoanLTVAdjustmentHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4072) | :closed_lock_with_key:  | GET | `/v5/crypto-loan/adjustment-history` |
| [getLoanBorrowableCoins()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4093) |  | GET | `/v5/crypto-loan-common/loanable-data` |
| [getLoanCollateralCoins()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4105) |  | GET | `/v5/crypto-loan-common/collateral-data` |
| [getMaxCollateralAmount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4115) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-common/max-collateral-amount` |
| [getMaxLoanAmount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4134) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-common/max-loan` |
| [updateCollateralAmount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4144) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-common/adjust-ltv` |
| [getCollateralAdjustmentHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4155) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-common/adjustment-history` |
| [getCryptoLoanPosition()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4170) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-common/position` |
| [borrowFlexible()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4187) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-flexible/borrow` |
| [repayFlexible()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4198) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-flexible/repay` |
| [repayCollateralFlexible()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4208) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-flexible/repay-collateral` |
| [getOngoingFlexibleLoans()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4222) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-flexible/ongoing-coin` |
| [getBorrowHistoryFlexible()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4234) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-flexible/borrow-history` |
| [getRepaymentHistoryFlexible()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4247) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-flexible/repayment-history` |
| [getFlexibleLoanAvailableInventory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4261) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-flexible/available-inventory` |
| [getSupplyOrderQuoteFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4281) |  | GET | `/v5/crypto-loan-fixed/supply-order-quote` |
| [getBorrowOrderQuoteFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4294) |  | GET | `/v5/crypto-loan-fixed/borrow-order-quote` |
| [createBorrowOrderFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4307) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-fixed/borrow` |
| [createSupplyOrderFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4320) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-fixed/supply` |
| [cancelBorrowOrderFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4330) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-fixed/borrow-order-cancel` |
| [cancelSupplyOrderFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4344) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-fixed/supply-order-cancel` |
| [getBorrowContractInfoFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4357) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-fixed/borrow-contract-info` |
| [getSupplyContractInfoFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4375) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-fixed/supply-contract-info` |
| [getBorrowOrderInfoFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4393) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-fixed/borrow-order-info` |
| [getSupplyOrderInfoFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4406) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-fixed/supply-order-info` |
| [repayFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4420) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-fixed/fully-repay` |
| [repayCollateralFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4431) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-flexible/repay-collateral` |
| [getRepaymentHistoryFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4444) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-fixed/repayment-history` |
| [renewBorrowOrderFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4461) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-fixed/renew` |
| [getRenewOrderInfoFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4474) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-fixed/renew-info` |
| [getFixedLoanAvailableInventory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4483) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-fixed/available-inventory` |
| [getInstitutionalLendingProductInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4498) |  | GET | `/v5/ins-loan/product-infos` |
| [getInstitutionalLendingCoinDeltaAmount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4510) | :closed_lock_with_key:  | GET | `/v5/ins-loan/coin-delta-amount` |
| [getInstitutionalLendingDelayLiquidationStatus()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4519) | :closed_lock_with_key:  | GET | `/v5/ins-loan/delay-liq-status` |
| [getInstitutionalLendingMarginCoinInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4529) |  | GET | `/v5/ins-loan/ensure-tokens` |
| [getInstitutionalLendingMarginCoinInfoWithConversionRate()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4538) |  | GET | `/v5/ins-loan/ensure-tokens-convert` |
| [getInstitutionalLendingLoanOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4547) | :closed_lock_with_key:  | GET | `/v5/ins-loan/loan-order` |
| [getInstitutionalLendingRepayOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4559) | :closed_lock_with_key:  | GET | `/v5/ins-loan/repaid-history` |
| [getInstitutionalLendingLTV()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4571) | :closed_lock_with_key:  | GET | `/v5/ins-loan/ltv` |
| [getInstitutionalLendingLTVWithLadderConversionRate()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4580) | :closed_lock_with_key:  | GET | `/v5/ins-loan/ltv-convert` |
| [bindOrUnbindUID()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4595) | :closed_lock_with_key:  | POST | `/v5/ins-loan/association-uid` |
| [repayInstitutionalLoan()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4615) | :closed_lock_with_key:  | POST | `/v5/ins-loan/repay-loan` |
| [getExchangeBrokerEarnings()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4636) | :closed_lock_with_key:  | GET | `/v5/broker/earnings-info` |
| [getExchangeBrokerAccountInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4649) | :closed_lock_with_key:  | GET | `/v5/broker/account-info` |
| [getBrokerSubAccountDeposits()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4665) | :closed_lock_with_key:  | GET | `/v5/broker/asset/query-sub-member-deposit-record` |
| [getBrokerVoucherSpec()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4680) | :closed_lock_with_key:  | POST | `/v5/broker/award/info` |
| [issueBrokerVoucher()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4692) | :closed_lock_with_key:  | POST | `/v5/broker/award/distribute-award` |
| [getBrokerIssuedVoucher()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4704) | :closed_lock_with_key:  | POST | `/v5/broker/award/distribution-record` |
| [setBrokerRateLimit()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4721) | :closed_lock_with_key:  | POST | `/v5/broker/apilimit/set` |
| [getBrokerRateLimitCap()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4740) | :closed_lock_with_key:  | GET | `/v5/broker/apilimit/query-cap` |
| [getAllBrokerRateLimits()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4758) | :closed_lock_with_key:  | GET | `/v5/broker/apilimit/query-all` |
| [getEarnProduct()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4778) |  | GET | `/v5/earn/product` |
| [getFlexibleSavingAutoSavings()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4789) | :closed_lock_with_key:  | GET | `/v5/earn/flexible-saving/auto-savings` |
| [setFlexibleSavingAutoSavings()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4800) | :closed_lock_with_key:  | POST | `/v5/earn/flexible-saving/auto-savings` |
| [getEarnCouponList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4810) | :closed_lock_with_key:  | GET | `/v5/earn/coupons` |
| [getRWAProductList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4820) |  | GET | `/v5/earn/rwa/product` |
| [placeRWAOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4830) | :closed_lock_with_key:  | POST | `/v5/earn/rwa/place-order` |
| [getRWAPositionList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4839) | :closed_lock_with_key:  | GET | `/v5/earn/rwa/position` |
| [getRWAOrderList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4848) | :closed_lock_with_key:  | GET | `/v5/earn/rwa/order` |
| [getRWANavChart()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4858) |  | GET | `/v5/earn/rwa/nav-chart` |
| [getHoldToEarnAirdropProducts()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4869) |  | GET | `/v5/earn/hold-to-earn/product` |
| [getAdvanceEarnProduct()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4880) |  | GET | `/v5/earn/advance/product` |
| [getLiquidityMiningProduct()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4891) |  | GET | `/v5/earn/liquidity-mining/product` |
| [reinvestLiquidityMining()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4904) | :closed_lock_with_key:  | POST | `/v5/earn/liquidity-mining/reinvest` |
| [getFixedTermEarnProduct()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4915) |  | GET | `/v5/earn/fixed-term/product` |
| [getAdvanceEarnProductExtraInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4927) |  | GET | `/v5/earn/advance/product-extra-info` |
| [submitAdvanceEarnPlaceOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4938) | :closed_lock_with_key:  | POST | `/v5/earn/advance/place-order` |
| [getAdvanceEarnPosition()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4949) | :closed_lock_with_key:  | GET | `/v5/earn/advance/position` |
| [getAdvanceEarnOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4960) | :closed_lock_with_key:  | GET | `/v5/earn/advance/order` |
| [submitFixedTermEarnOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4971) | :closed_lock_with_key:  | POST | `/v5/earn/fixed-term/place-order` |
| [redeemFixedTermEarn()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4982) | :closed_lock_with_key:  | POST | `/v5/earn/fixed-term/redeem` |
| [getFixedTermEarnPosition()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4993) | :closed_lock_with_key:  | GET | `/v5/earn/fixed-term/position` |
| [getFixedTermEarnOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5004) | :closed_lock_with_key:  | GET | `/v5/earn/fixed-term/order` |
| [setFixedTermEarnAutoInvest()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5015) | :closed_lock_with_key:  | POST | `/v5/earn/fixed-term/position/auto-invest` |
| [submitStakeRedeem()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5031) | :closed_lock_with_key:  | POST | `/v5/earn/place-order` |
| [getEarnOrderHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5050) | :closed_lock_with_key:  | GET | `/v5/earn/order` |
| [getEarnPosition()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5068) | :closed_lock_with_key:  | GET | `/v5/earn/position` |
| [modifyEarnPosition()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5081) | :closed_lock_with_key:  | POST | `/v5/earn/position/modify` |
| [getEarnYieldHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5094) | :closed_lock_with_key:  | GET | `/v5/earn/yield` |
| [getHoldToEarnAirdropYieldHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5108) | :closed_lock_with_key:  | GET | `/v5/earn/hold-to-earn/yield-history` |
| [getEarnHourlyYieldHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5119) | :closed_lock_with_key:  | GET | `/v5/earn/hourly-yield` |
| [getEarnAprHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5133) |  | GET | `/v5/earn/apr-history` |
| [getEarnTokenProduct()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5143) |  | GET | `/v5/earn/token/product` |
| [submitEarnTokenOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5152) | :closed_lock_with_key:  | POST | `/v5/earn/token/place-order` |
| [getEarnTokenOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5161) | :closed_lock_with_key:  | GET | `/v5/earn/token/order` |
| [getEarnTokenPosition()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5173) | :closed_lock_with_key:  | GET | `/v5/earn/token/position` |
| [getEarnTokenDailyYield()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5182) | :closed_lock_with_key:  | GET | `/v5/earn/token/yield` |
| [getEarnTokenHourlyYield()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5194) | :closed_lock_with_key:  | GET | `/v5/earn/token/hourly-yield` |
| [getEarnTokenHistoryApr()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5206) |  | GET | `/v5/earn/token/history-apr` |
| [getPwmInvestmentPlanList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5221) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/investment-plan/list` |
| [getPwmInvestmentPlanDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5230) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/investment-plan/detail` |
| [getPwmPendingInvestmentPlanDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5239) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/investment-plan/new-plan` |
| [claimPwmWithdrawableFunds()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5248) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/investment-plan/claim` |
| [getPwmInvestmentPlanAssetTrend()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5257) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/investment-plan/asset-trend` |
| [getPwmFundHistoricalNav()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5266) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/investment-plan/fund-nav` |
| [subscribePwmInvestmentPlan()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5275) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/investment-plan/subscribe` |
| [investMorePwmInvestmentPlan()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5284) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/investment-plan/invest-more` |
| [redeemPwmInvestmentPlan()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5293) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/investment-plan/redeem` |
| [getPwmInvestmentPlanOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5302) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/investment-plan/order` |
| [getPwmSubscribableProductInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5311) |  | GET | `/v5/earn/pwm/customize-plan/product` |
| [createPwmCustomizeInvestmentPlan()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5320) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/customize-plan/create` |
| [getPwmAllFunds()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5335) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/asset-manager/all-funds` |
| [settlePwmFundProfit()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5344) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/asset-manager/settle-profit` |
| [createPwmFund()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5353) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/asset-manager/create-fund` |
| [createPwmAssetManagerInvestmentPlan()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5362) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/asset-manager/create-investment-plan` |
| [getPwmAssetManagerInvestmentPlans()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5376) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/asset-manager/get-investment-plan` |
| [managePwmAssetManagerInvestmentPlan()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5388) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/asset-manager/manage-investment-plan` |
| [getPwmAllFundOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5402) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/asset-manager/all-order` |
| [managePwmFundOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5411) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/asset-manager/manage-order` |
| [createPwmFundSubAccount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5420) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/asset-manager/create-sub-account` |
| [pwmFundTransfer()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5432) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/fund-transfer` |
| [getPwmFundTransferRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5441) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/query-fund-transfer-result` |
| [queryCardAssetRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5456) | :closed_lock_with_key:  | POST | `/v5/card/transaction/query-asset-records` |
| [queryCardPointsBalance()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5465) | :closed_lock_with_key:  | POST | `/v5/card/reward/points/balance` |
| [queryCardPointsRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5472) | :closed_lock_with_key:  | POST | `/v5/card/reward/points/records` |
| [queryCardPointsTier()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5481) | :closed_lock_with_key:  | POST | `/v5/card/reward/points/tier` |
| [queryCardMallItemList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5488) | :closed_lock_with_key:  | POST | `/v5/card/reward/mall/item/list` |
| [queryCardPointCashbackDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5497) | :closed_lock_with_key:  | POST | `/v5/card/reward/point/cashback/detail` |
| [createRFQ()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5513) | :closed_lock_with_key:  | POST | `/v5/rfq/create-rfq` |
| [getRFQConfig()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5524) | :closed_lock_with_key:  | GET | `/v5/rfq/config` |
| [cancelRFQ()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5533) | :closed_lock_with_key:  | POST | `/v5/rfq/cancel-rfq` |
| [cancelAllRFQ()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5543) | :closed_lock_with_key:  | POST | `/v5/rfq/cancel-all-rfq` |
| [createRFQQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5552) | :closed_lock_with_key:  | POST | `/v5/rfq/create-quote` |
| [executeRFQQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5563) | :closed_lock_with_key:  | POST | `/v5/rfq/execute-quote` |
| [cancelRFQQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5574) | :closed_lock_with_key:  | POST | `/v5/rfq/cancel-quote` |
| [cancelAllRFQQuotes()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5584) | :closed_lock_with_key:  | POST | `/v5/rfq/cancel-all-quotes` |
| [getRFQRealtimeInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5598) | :closed_lock_with_key:  | GET | `/v5/rfq/rfq-realtime` |
| [getRFQHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5610) | :closed_lock_with_key:  | GET | `/v5/rfq/rfq-list` |
| [getRFQRealtimeQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5624) | :closed_lock_with_key:  | GET | `/v5/rfq/quote-realtime` |
| [getRFQHistoryQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5639) | :closed_lock_with_key:  | GET | `/v5/rfq/quote-list` |
| [getRFQTrades()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5652) | :closed_lock_with_key:  | GET | `/v5/rfq/trade-list` |
| [getRFQPublicTrades()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5665) | :closed_lock_with_key:  | GET | `/v5/rfq/public-trades` |
| [acceptNonLPQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5681) | :closed_lock_with_key:  | POST | `/v5/rfq/accept-other-quote` |
| [getRFQDetails()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5687) | :closed_lock_with_key:  | GET | `/v5/rfq/rfq-detail-list` |
| [getP2PAccountCoinsBalance()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5712) | :closed_lock_with_key:  | GET | `/v5/asset/transfer/query-account-coins-balance` |
| [getP2POnlineAds()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5729) | :closed_lock_with_key:  | POST | `/v5/p2p/item/online` |
| [createP2PAd()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5738) | :closed_lock_with_key:  | POST | `/v5/p2p/item/create` |
| [cancelP2PAd()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5747) | :closed_lock_with_key:  | POST | `/v5/p2p/item/cancel` |
| [updateP2PAd()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5761) | :closed_lock_with_key:  | POST | `/v5/p2p/item/update` |
| [getP2PPersonalAds()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5771) | :closed_lock_with_key:  | POST | `/v5/p2p/item/personal/list` |
| [getP2PAdDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5780) | :closed_lock_with_key:  | POST | `/v5/p2p/item/info` |
| [getP2POrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5795) | :closed_lock_with_key:  | POST | `/v5/p2p/order/simplifyList` |
| [getP2POrderDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5805) | :closed_lock_with_key:  | POST | `/v5/p2p/order/info` |
| [getP2PPendingOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5814) | :closed_lock_with_key:  | POST | `/v5/p2p/order/pending/simplifyList` |
| [markP2POrderAsPaid()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5823) | :closed_lock_with_key:  | POST | `/v5/p2p/order/pay` |
| [releaseP2POrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5832) | :closed_lock_with_key:  | POST | `/v5/p2p/order/finish` |
| [reviewP2PSellerCancelOrderApply()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5844) | :closed_lock_with_key:  | POST | `/v5/p2p/order/buyer/examine/sellerCancelOrderApply` |
| [sendP2POrderMessage()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5856) | :closed_lock_with_key:  | POST | `/v5/p2p/order/message/send` |
| [getP2PChatSessions()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5871) | :closed_lock_with_key:  | POST | `/v5/p2p/chat/session/list_v1` |
| [getP2PChatSessionId()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5881) | :closed_lock_with_key:  | POST | `/v5/p2p/chat/session/getSessionId` |
| [sendP2PChatMessage()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5917) | :closed_lock_with_key:  | POST | `/v5/p2p/chat/message/send_v1` |
| [getP2PChatMessages()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5929) | :closed_lock_with_key:  | POST | `/v5/p2p/chat/message/listpage_v1` |
| [getP2POrderMessages()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5938) | :closed_lock_with_key:  | POST | `/v5/p2p/order/message/listpage` |
| [getP2PUserInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5952) | :closed_lock_with_key:  | POST | `/v5/p2p/user/personal/info` |
| [getP2PCounterpartyUserInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5959) | :closed_lock_with_key:  | POST | `/v5/p2p/user/order/personal/info` |
| [getP2PUserPayments()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5968) | :closed_lock_with_key:  | POST | `/v5/p2p/user/payment/list` |
| [setApiRateLimit()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5988) | :closed_lock_with_key:  | POST | `/v5/apilimit/set` |
| [queryApiRateLimit()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6017) | :closed_lock_with_key:  | GET | `/v5/apilimit/query` |
| [getRateLimitCap()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6036) | :closed_lock_with_key:  | GET | `/v5/apilimit/query-cap` |
| [getAllRateLimits()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6055) | :closed_lock_with_key:  | GET | `/v5/apilimit/query-all` |
| [getLaunchpoolProjectList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6078) |  | GET | `/v5/spot-x/launchpool/project/list` |
| [getLaunchpoolUserActivityLog()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6084) | :closed_lock_with_key:  | POST | `/v5/spot-x/launchpool/user/activity-log` |
| [getLaunchpoolCurrentStaking()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6090) | :closed_lock_with_key:  | GET | `/v5/spot-x/launchpool/user/current-staking` |
| [getLaunchpoolUserHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6096) | :closed_lock_with_key:  | POST | `/v5/spot-x/launchpool/user/history` |
| [getPuzzleProjectList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6102) |  | GET | `/v5/spot-x/puzzle/project/list` |
| [getTokenSplashProjectList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6108) |  | GET | `/v5/spot-x/token-splash/project/list` |
| [getTokenSplashUserActivityParams()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6114) | :closed_lock_with_key:  | GET | `/v5/spot-x/token-splash/user/activity-params` |
| [getEventInstrumentsInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6137) |  | GET | `/v5/event/instruments-info` |
| [getEventOrderbook()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6148) |  | GET | `/v5/event/orderbook` |
| [getEventOrderHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6159) | :closed_lock_with_key:  | GET | `/v5/event/order-list` |
| [getEventActiveOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6170) | :closed_lock_with_key:  | GET | `/v5/event/order-realtime` |
| [getEventPositionInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6181) | :closed_lock_with_key:  | GET | `/v5/event/positions` |
| [getEventTradeHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6192) | :closed_lock_with_key:  | GET | `/v5/event/trades` |
| [getEventSettlementRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6203) | :closed_lock_with_key:  | GET | `/v5/event/settlements` |
| [submitEventQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6214) | :closed_lock_with_key:  | POST | `/v5/event/quotes` |
| [cancelEventQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6225) | :closed_lock_with_key:  | POST | `/v5/event/cancel` |

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