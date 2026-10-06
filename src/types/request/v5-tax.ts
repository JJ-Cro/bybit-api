export type TaxReportTypeV5 =
  | 'ALL'
  | 'TRADE'
  | 'P&L'
  | 'EARN'
  | 'DEPOSIT&WITHDRAWAL'
  | 'BONUS'
  | 'AIRDROP'
  | 'CARD';

export interface TaxBatchExportItemV5 {
  type: TaxReportTypeV5;
  /** Subcategory number. Required but ignored when type is ALL; pass "". */
  number: string;
}

/** POST /v5/fht/compliance/tax/private/batch_create */
export interface CreateTaxBatchExportParamsV5 {
  /** UNIX seconds. Must be within the last 18 months. */
  startTime: number;
  /** UNIX seconds. Later than startTime, span at most 12 months. */
  endTime: number;
  items: TaxBatchExportItemV5[];
  sourceInstitution?: string;
  /** orc is the default when omitted */
  exportFileType?: 'orc' | 'csv';
}

/** GET /v5/fht/compliance/tax/private/batch_query */
export interface GetTaxBatchExportParamsV5 {
  batchId: string;
}
