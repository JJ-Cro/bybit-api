import { RestClientOptions, RestClientV5 } from '../../src';
import { getTestProxy } from '../proxy.util';

/** Real, read-only mainnet requests. The key needs wallet and Earn read access. */
describe('Private GET serialization (HMAC)', () => {
  let api: RestClientV5;

  function createClient(options: RestClientOptions = {}): RestClientV5 {
    return new RestClientV5(
      {
        key: process.env.API_KEY_COM,
        secret: process.env.API_SECRET_COM,
        testnet: false,
        recv_window: 10000,
        ...options,
      },
      { ...getTestProxy(), timeout: 15000 },
    );
  }

  beforeAll(() => {
    expect(process.env.API_KEY_COM).toEqual(expect.any(String));
    expect(process.env.API_SECRET_COM).toEqual(expect.any(String));
    api = createClient();
  });

  it('preserves legacy wallet arrays and returns both requested coins', async () => {
    const response = await liveRequest(
      api.getWalletBalance({
        accountType: 'UNIFIED',
        // JavaScript callers could already pass arrays despite the string type.
        coin: ['BTC', 'ETH'] as unknown as string,
      }),
    );

    expectWalletCoins(response, ['BTC', 'ETH']);
  });

  it('preserves comma-separated wallet strings', async () => {
    const response = await liveRequest(
      api.getWalletBalance({ accountType: 'UNIFIED', coin: 'BTC,ETH' }),
    );
    expectWalletCoins(response, ['BTC', 'ETH']);
  });

  it('preserves signed scalar queries with numeric values', async () => {
    const response = await liveRequest(
      api.getActiveOrders({
        category: 'linear',
        symbol: 'BTCUSDT',
        openOnly: 0,
        limit: 1,
      }),
    );
    expect(response.retCode).toBe(0);
    expect(response.result.category).toBe('linear');
  });

  it.each([
    { coins: ['BTC'] },
    { coins: ['BTC', 'ETH'] },
    { coins: ['ETH', 'BTC'] },
    { coins: ['BTC', 'ETH', 'BTC'] },
  ])(
    'Earn returns exactly the requested coin set for $coins',
    async ({ coins }) => {
      const response = await liveRequest(
        api.getFlexibleSavingAutoSavings({ coins }),
      );
      expectEarnCoins(response, coins);
    },
  );

  it('Earn treats an empty array like omitted coins', async () => {
    const all = await liveRequest(api.getFlexibleSavingAutoSavings());
    expect(all.retCode).toBe(0);
    expect(all.result.coins.length).toBeGreaterThan(0);

    const empty = await liveRequest(
      api.getFlexibleSavingAutoSavings({ coins: [] }),
    );
    expectEarnCoins(
      empty,
      all.result.coins.map((coin) => coin.coin),
    );
  });

  it('Earn accepts 50 supported coins and rejects 51', async () => {
    const all = await liveRequest(api.getFlexibleSavingAutoSavings());
    expect(all.retCode).toBe(0);
    const supported = [...new Set(all.result.coins.map((coin) => coin.coin))];
    // Fail visibly if the live environment cannot exercise the documented limit.
    expect(supported.length).toBeGreaterThanOrEqual(51);

    const coins = supported.slice(0, 50);
    const accepted = await liveRequest(
      api.getFlexibleSavingAutoSavings({ coins }),
    );
    expectEarnCoins(accepted, coins);

    const rejected = await liveRequest(
      api.getFlexibleSavingAutoSavings({ coins: supported.slice(0, 51) }),
    );
    expect(rejected.retCode).toBe(180001);
  }, 60000);

  it.each([
    { label: 'strict validation', options: { strict_param_validation: true } },
    { label: 'encoding disabled', options: { encodeSerialisedValues: false } },
  ])(
    'preserves both formats with $label',
    async ({ options }) => {
      const client = createClient(options);
      const wallet = await liveRequest(
        client.getWalletBalance({
          accountType: 'UNIFIED',
          coin: ['BTC', 'ETH'] as unknown as string,
        }),
      );
      expectWalletCoins(wallet, ['BTC', 'ETH']);
      const earn = await liveRequest(
        client.getFlexibleSavingAutoSavings({ coins: ['BTC', 'ETH'] }),
      );
      expectEarnCoins(earn, ['BTC', 'ETH']);
    },
    40000,
  );

  it('accepts explicit request options through getPrivate', async () => {
    const response = await liveRequest(
      api.getPrivate(
        '/v5/earn/flexible-saving/auto-savings',
        { coins: ['BTC', 'ETH'] },
        { serialiserArrayFormat: 'repeat' },
      ),
    );
    expectEarnCoins(response, ['BTC', 'ETH']);
  });

  it('keeps serialization options local to concurrent requests', async () => {
    const [wallet, earn] = await Promise.all([
      liveRequest(
        api.getWalletBalance({
          accountType: 'UNIFIED',
          coin: ['BTC', 'ETH'] as unknown as string,
        }),
      ),
      liveRequest(api.getFlexibleSavingAutoSavings({ coins: ['BTC', 'ETH'] })),
    ]);
    expectWalletCoins(wallet, ['BTC', 'ETH']);
    expectEarnCoins(earn, ['BTC', 'ETH']);

    const subsequent = await liveRequest(
      api.getWalletBalance({
        accountType: 'UNIFIED',
        coin: ['BTC', 'ETH'] as unknown as string,
      }),
    );
    expectWalletCoins(subsequent, ['BTC', 'ETH']);
  }, 40000);

  it('preserves public GET requests when SDK request options are present', async () => {
    const publicClient = createClient({ key: undefined, secret: undefined });
    const response = await liveRequest(
      publicClient.get(
        '/v5/market/tickers',
        { category: 'linear', symbol: 'BTCUSDT' },
        { serialiserArrayFormat: 'repeat' },
      ),
    );
    expect(response.retCode).toBe(0);
    expect(response.result.list.map((ticker) => ticker.symbol)).toEqual([
      'BTCUSDT',
    ]);
  });
});

function expectWalletCoins(
  response: Awaited<ReturnType<RestClientV5['getWalletBalance']>>,
  requested: string[],
) {
  expect(response.retCode).toBe(0);
  const coins = response.result.list.flatMap((account) =>
    account.coin.map((coin) => coin.coin),
  );
  expect([...new Set(coins)].sort()).toEqual([...new Set(requested)].sort());
}

function expectEarnCoins(
  response: Awaited<ReturnType<RestClientV5['getFlexibleSavingAutoSavings']>>,
  requested: string[],
) {
  expect(response.retCode).toBe(0);
  expect(typeof response.result.selectedAll).toBe('boolean');
  const coins = response.result.coins.map((coin) => coin.coin);
  expect([...new Set(coins)].sort()).toEqual([...new Set(requested)].sort());
}

/** Keep credentials and account data out of network failure reports. */
async function liveRequest<T>(request: Promise<T>): Promise<T> {
  try {
    return await request;
  } catch (error) {
    throw new Error(
      `Live API request failed (code: ${error?.code ?? 'unknown'})`,
    );
  }
}
