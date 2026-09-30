export interface GetP2PAccountCoinsBalanceParamsV5 {
  memberId?: string;
  accountType: string;
  coin?: string;
  withBonus?: 0 | 1;
}

export interface GetP2POnlineAdsParamsV5 {
  tokenId: string;
  currencyId: string;
  side: '0' | '1'; // 0: buy; 1: sell
  page?: string;
  size?: string;
}

export interface P2PTradingPreferenceSetV5 {
  hasUnPostAd?: 0 | 1;
  isKyc?: 0 | 1;
  isEmail?: 0 | 1;
  isMobile?: 0 | 1;
  hasRegisterTime?: 0 | 1;
  registerTimeThreshold?: number;
  orderFinishNumberDay30?: number;
  completeRateDay30?: string;
  nationalLimit?: string;
  hasOrderFinishNumberDay30?: 0 | 1;
  hasCompleteRateDay30?: 0 | 1;
  hasNationalLimit?: 0 | 1;
}

export interface CreateP2PAdParamsV5 {
  tokenId: string;
  currencyId: string;
  side: '0' | '1'; // 0: buy; 1: sell
  priceType: '0' | '1'; // 0: fixed rate; 1: floating rate
  premium: string;
  price: string;
  minAmount: string;
  maxAmount: string;
  remark: string;
  tradingPreferenceSet: P2PTradingPreferenceSetV5;
  paymentIds: string[];
  quantity: string;
  paymentPeriod: string;
  itemType: 'ORIGIN' | 'BULK';
}

export interface UpdateP2PAdParamsV5 {
  id: string;
  priceType: '0' | '1'; // 0: fixed rate; 1: floating rate
  premium: string;
  price: string;
  minAmount: string;
  maxAmount: string;
  remark: string;
  tradingPreferenceSet: P2PTradingPreferenceSetV5;
  paymentIds: string[];
  actionType: 'MODIFY' | 'ACTIVE'; // MODIFY: modify adv; ACTIVE: reonline adv
  quantity: string;
  paymentPeriod: string;
  itemType?: 'ORIGIN' | 'BULK';
  subsidyAd?: boolean;
  securityRiskToken?: string;
}

export interface GetP2PPersonalAdsParamsV5 {
  itemId?: string;
  status?: '1' | '2'; // 1: Sold Out; 2: Available
  side?: '0' | '1'; // 0: buy; 1: sell
  tokenId?: string;
  page?: string;
  size?: string;
  currencyId?: string;
}

export interface GetP2POrdersParamsV5 {
  status?: number;
  beginTime?: string;
  endTime?: string;
  tokenId?: string;
  side?: number[];
  page: number;
  size: number;
}

export interface GetP2PPendingOrdersParamsV5 {
  status?: number;
  beginTime?: string;
  endTime?: string;
  tokenId?: string;
  side?: number[];
  page: number;
  size: number;
}

export interface MarkP2POrderAsPaidParamsV5 {
  orderId: string;
  paymentType: string;
  paymentId: string;
}

export interface SendP2POrderMessageParamsV5 {
  message: string;
  contentType: string;
  orderId: string;
  msgUuid?: string;
  fileName?: string;
}

export interface GetP2POrderMessagesParamsV5 {
  orderId: string;
  currentPage?: string;
  size: string;
}

export interface GetP2PCounterpartyUserInfoParamsV5 {
  originalUid: string;
  orderId: string;
}

export interface GetP2PChatSessionsParamsV5 {
  /** Pagination cursor. Pass 0 for the first page. */
  lastId: number;
  size: number;
  /** 0: unread; 1: read; 2: all. */
  readStatus: 0 | 1 | 2;
  type?: 'GROUP' | 'SINGLE';
}

export interface GetP2PChatSessionIdParamsV5 {
  /** Counterparty mask ID from the order detail's targetUserMaskId. */
  userMaskId: string;
}

export interface SendP2PChatMessageParamsV5 {
  /** Message content, up to 1000 characters. Use the uploaded URL for files. */
  message: string;
  contentType: 'str' | 'pic' | 'pdf' | 'video';
  /** AES encrypted session ID. */
  sessionId: string;
  orderId: string;
}

export interface GetP2PChatMessagesParamsV5 {
  /** Pagination cursor. Pass 0 to start from the latest message. */
  lastId: number;
  /** Page size, up to 30. */
  limit: number;
  /** AES encrypted session ID. */
  sessionId: string;
}
