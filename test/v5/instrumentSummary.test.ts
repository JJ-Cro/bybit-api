import axios from 'axios';

import { RestClientV5 } from '../../src';

jest.mock('axios', () => {
  const axiosMock = jest.fn();
  return {
    __esModule: true,
    default: axiosMock,
  };
});

const axiosMock = axios as unknown as jest.Mock;

function instrumentSummaryResponse(nextPageCursor: string) {
  return {
    status: 200,
    headers: {},
    data: {
      retCode: 0,
      retMsg: 'OK',
      result: {
        category: 'linear',
        list: [
          {
            symbol: '0GUSDT',
            symbolType: '',
            displayName: '0GUSDT',
            baseCoin: '0G',
            settleCoin: 'USDT',
            fullName: '0G',
            marketRegion: '',
            underlyingTicker: '',
            priceIndex: '',
            qtyStep: '0.1',
            tickSize: '0.0001',
            deliveryTime: '0',
          },
        ],
        nextPageCursor,
      },
      retExtInfo: {},
      time: 1791944863432,
    },
  };
}

describe('getInstrumentSummary()', () => {
  const api = new RestClientV5({});

  beforeEach(() => {
    axiosMock.mockReset();
  });

  it('GETs /v5/market/instrument-summary and forwards the cursor page', async () => {
    const cursor = 'first%3D0GUSDT%26last%3DMYXUSDT';
    axiosMock
      .mockResolvedValueOnce(instrumentSummaryResponse(cursor))
      .mockResolvedValueOnce(instrumentSummaryResponse(''));

    const firstPage = await api.getInstrumentSummary({
      category: 'linear',
      limit: 1,
    });
    const secondPage = await api.getInstrumentSummary({
      category: 'linear',
      limit: 1,
      cursor: firstPage.result.nextPageCursor,
      symbol: 'NVDAUSDT',
      symbolType: 'stock',
      marketRegion: 'US',
      baseCoin: 'NVDA',
    });

    expect(firstPage.result.nextPageCursor).toBe(cursor);
    expect(secondPage.result.list[0]?.qtyStep).toBe('0.1');
    expect(axiosMock).toHaveBeenCalledTimes(2);

    const firstCall = axiosMock.mock.calls[0][0];
    const secondCall = axiosMock.mock.calls[1][0];

    expect(firstCall.method).toBe('GET');
    expect(firstCall.url).toBe(
      'https://api.bybit.com/v5/market/instrument-summary',
    );
    expect(firstCall.params).toEqual({
      category: 'linear',
      limit: 1,
    });
    expect(secondCall.url).toBe(firstCall.url);
    expect(secondCall.params).toEqual({
      category: 'linear',
      limit: 1,
      cursor,
      symbol: 'NVDAUSDT',
      symbolType: 'stock',
      marketRegion: 'US',
      baseCoin: 'NVDA',
    });
  });
});
