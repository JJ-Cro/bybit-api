/**
 * GET /v5/earn/liquidity-mining/product (public, 50 req/s per IP)
 */
export interface GetLiquidityMiningProductParamsV5 {
  baseCoin?: string;
  quoteCoin?: string;
}

export interface ReinvestLiquidityMiningParamsV5 {
  productId: string;
  orderLinkId: string;
  positionId: string;
  leverage?: string;
}
