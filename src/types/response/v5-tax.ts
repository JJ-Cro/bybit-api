export interface TaxBatchExportResultV5 {
  batchId: string;
}

export interface TaxBatchExportTaskV5 {
  type: string;
  number: string;
  /** 0 queued, 1 processing, 2 succeeded, -1 failed */
  status: 0 | 1 | 2 | -1;
  url: string;
  queryId: string;
}

export interface TaxBatchExportStatusV5 {
  items: TaxBatchExportTaskV5[];
}
