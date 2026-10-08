import { serializeParams } from '../../src/util/requestUtils';

const undefinedParamError =
  'Failed to sign API request due to undefined parameter';

/**
 * Private GET signing calls serializeParams(params, strict, false, encode).
 * sortProperties is false on that path. The function default is true.
 */
function serializeForSigning(
  params: object,
  strictValidation = false,
  encodeValues = true,
): string {
  return serializeParams(params, strictValidation, false, encodeValues);
}

describe('serializeParams', () => {
  describe('empty input', () => {
    it('returns an empty string when called with no arguments', () => {
      expect(serializeParams()).toBe('');
    });

    it('returns an empty string for undefined params', () => {
      expect(serializeParams(undefined)).toBe('');
    });

    it('returns an empty string for an empty object', () => {
      expect(serializeParams({})).toBe('');
    });

    it('throws when params is null', () => {
      expect(() => serializeParams(null as unknown as object)).toThrow(
        TypeError,
      );
    });
  });

  describe('scalar values', () => {
    it('serialises one string', () => {
      expect(serializeParams({ symbol: 'BTCUSDT' })).toBe('symbol=BTCUSDT');
    });

    it('sorts string keys alphabetically by default', () => {
      expect(
        serializeParams({
          symbol: 'BTCUSDT',
          category: 'linear',
          limit: '50',
        }),
      ).toBe('category=linear&limit=50&symbol=BTCUSDT');
    });

    it('keeps insertion order when sortProperties is false', () => {
      expect(
        serializeParams(
          { symbol: 'BTCUSDT', category: 'linear', limit: '50' },
          false,
          false,
        ),
      ).toBe('symbol=BTCUSDT&category=linear&limit=50');
    });

    it('serialises integers, floats, and negative numbers', () => {
      expect(
        serializeParams({
          limit: 50,
          price: 1.25,
          offset: -3,
        }),
      ).toBe('limit=50&offset=-3&price=1.25');
    });

    it('serialises true and false', () => {
      expect(serializeParams({ reduceOnly: false, isSelected: true })).toBe(
        'isSelected=true&reduceOnly=false',
      );
    });

    it('serialises null as the string null', () => {
      expect(serializeParams({ cursor: null })).toBe('cursor=null');
    });

    it('keeps an empty string value', () => {
      expect(serializeParams({ cursor: '' })).toBe('cursor=');
    });

    it('serialises NaN and Infinity through ToString', () => {
      expect(
        serializeParams({ bad: Number.NaN, big: Number.POSITIVE_INFINITY }),
      ).toBe('bad=NaN&big=Infinity');
    });

    it('serialises a bigint', () => {
      expect(serializeParams({ limit: BigInt(1) })).toBe('limit=1');
    });
  });

  describe('encoding', () => {
    it('encodes space, plus, percent, ampersand, equals, unicode, and slash', () => {
      expect(
        serializeParams({
          space: 'a b',
          plus: 'a+b',
          percent: 'abc%def',
          pair: 'a&b=c',
          coin: '乙',
          symbol: 'BTC/USDT',
        }),
      ).toBe(
        'coin=%E4%B9%99&pair=a%26b%3Dc&percent=abc%25def&plus=a%2Bb&space=a%20b&symbol=BTC%2FUSDT',
      );
    });

    it('leaves special characters raw when encoding is disabled', () => {
      expect(
        serializeParams(
          {
            cursor: 'abc%def',
            pair: 'a&b=c',
            space: 'a b',
          },
          false,
          true,
          false,
        ),
      ).toBe('cursor=abc%def&pair=a&b=c&space=a b');
    });

    it('encodes a percent in a cursor so it cannot break the signature', () => {
      expect(serializeParams({ cursor: 'abc%def' })).toBe('cursor=abc%25def');
    });

    it('does not split a comma-separated string into repeated keys', () => {
      expect(serializeParams({ coins: 'BTC,ETH' })).toBe('coins=BTC%2CETH');
    });

    it('does not encode the key itself', () => {
      expect(serializeParams({ 'a b': 'c' })).toBe('a b=c');
    });
  });

  describe('key order', () => {
    it('sorts uppercase before lowercase', () => {
      expect(serializeParams({ symbol: 'B', Symbol: 'A' })).toBe(
        'Symbol=A&symbol=B',
      );
    });

    it('sorts numeric-looking keys lexicographically, not numerically', () => {
      expect(serializeParams({ 10: 'x', 2: 'y' })).toBe('10=x&2=y');
    });

    it('lists integer-index keys first when sorting is disabled', () => {
      expect(
        serializeParams({ b: '1', a: '2', 10: 'x', 2: 'y' }, false, false),
      ).toBe('2=y&10=x&b=1&a=2');
    });

    it('ignores symbol keys', () => {
      const params: Record<string | symbol, string> = { symbol: 'BTCUSDT' };
      params[Symbol('hidden')] = 'nope';

      expect(serializeParams(params)).toBe('symbol=BTCUSDT');
    });

    it('ignores inherited keys', () => {
      const proto = { leaked: 'yes' };
      const params = Object.create(proto) as { symbol?: string };
      params.symbol = 'BTCUSDT';

      expect(serializeParams(params)).toBe('symbol=BTCUSDT');
    });

    it('stringifies a plain object instead of expanding it', () => {
      expect(serializeParams({ extra: { coin: 'BTC' } })).toBe(
        'extra=%5Bobject%20Object%5D',
      );
    });

    it('does not treat an array-like object as an array', () => {
      expect(
        serializeParams({
          list: { 0: 'BTC', 1: 'ETH', length: 2 },
        }),
      ).toBe('list=%5Bobject%20Object%5D');
    });
  });

  describe('arrays', () => {
    it('repeats the key once per item', () => {
      expect(serializeParams({ coins: ['BTC', 'ETH'] })).toBe(
        'coins=BTC&coins=ETH',
      );
    });

    it('keeps array item order and does not sort the items', () => {
      expect(serializeParams({ coins: ['ETH', 'BTC', 'SOL'] })).toBe(
        'coins=ETH&coins=BTC&coins=SOL',
      );
    });

    it('serialises a one-item array as a single pair', () => {
      expect(serializeParams({ coins: ['BTC'] })).toBe('coins=BTC');
    });

    it('serialises numbers and booleans inside an array', () => {
      expect(serializeParams({ side: [0, 1, false, true] })).toBe(
        'side=0&side=1&side=false&side=true',
      );
    });

    it('serialises null inside an array as the string null', () => {
      expect(serializeParams({ coins: [null] })).toBe('coins=null');
    });

    it('keeps an empty string inside an array', () => {
      expect(serializeParams({ coins: ['', 'BTC'] })).toBe('coins=&coins=BTC');
    });

    it('encodes special characters inside array items', () => {
      expect(serializeParams({ coins: ['BTC USDT', 'ETH&SOL', 'a+b'] })).toBe(
        'coins=BTC%20USDT&coins=ETH%26SOL&coins=a%2Bb',
      );
    });

    it('leaves array items raw when encoding is disabled', () => {
      expect(
        serializeParams({ coins: ['BTC USDT', 'ETH&SOL'] }, false, true, false),
      ).toBe('coins=BTC USDT&coins=ETH&SOL');
    });

    it('stringifies a nested array as one comma-joined value', () => {
      expect(serializeParams({ coins: [['BTC', 'ETH']] })).toBe(
        'coins=BTC%2CETH',
      );
    });

    it('stringifies an object inside an array', () => {
      expect(serializeParams({ coins: [{ coin: 'BTC' }] })).toBe(
        'coins=%5Bobject%20Object%5D',
      );
    });

    it('omits an empty array', () => {
      expect(serializeParams({ coins: [] })).toBe('');
    });

    it('omits an empty array without leaving a dangling ampersand when sorted', () => {
      expect(
        serializeParams({
          symbol: 'BTCUSDT',
          coins: [],
          category: 'spot',
        }),
      ).toBe('category=spot&symbol=BTCUSDT');
    });

    it('omits an empty array without leaving a dangling ampersand in insertion order', () => {
      expect(
        serializeParams(
          { symbol: 'BTCUSDT', coins: [], category: 'spot' },
          false,
          false,
        ),
      ).toBe('symbol=BTCUSDT&category=spot');
    });

    it('returns an empty string when every value is an empty array', () => {
      expect(serializeParams({ a: [], b: [] })).toBe('');
    });

    it('serialises more than one array and sorts the keys around them', () => {
      expect(
        serializeParams({
          tags: ['ST'],
          coins: ['BTC', 'ETH'],
        }),
      ).toBe('coins=BTC&coins=ETH&tags=ST');
    });

    it('preserves order across a long array', () => {
      const coins = Array.from({ length: 50 }, (_, index) => `C${index}`);

      expect(serializeParams({ coins })).toBe(
        coins.map((coin) => `coins=${coin}`).join('&'),
      );
    });

    it('turns a sparse hole into an empty join gap', () => {
      // map skips holes, then join treats the skipped slot as an empty string.
      const coins = ['BTC'];
      coins[2] = 'ETH';

      expect(serializeParams({ coins }, false)).toBe('coins=BTC&&coins=ETH');
    });
  });

  describe('strict validation', () => {
    it('throws when an array item is undefined', () => {
      expect(() =>
        serializeParams({ coins: ['BTC', undefined] }, true),
      ).toThrow(undefinedParamError);
    });

    it('throws for an undefined array item even when encoding is disabled', () => {
      expect(() =>
        serializeParams({ coins: [undefined, 'ETH'] }, true, true, false),
      ).toThrow(undefinedParamError);
    });

    it('does not throw for a sparse hole, even when strict validation is on', () => {
      const coins = ['BTC'];
      coins[2] = 'ETH';

      expect(serializeParams({ coins }, true)).toBe('coins=BTC&&coins=ETH');
    });

    it('allows a fully defined array when strict validation is on', () => {
      expect(serializeParams({ coins: ['BTC', 'ETH'] }, true)).toBe(
        'coins=BTC&coins=ETH',
      );
    });

    it('does not throw for a scalar undefined when encoding is on', () => {
      // encodeURIComponent(undefined) is the string "undefined", so the
      // typeof check never sees the original undefined value.
      expect(serializeParams({ cursor: undefined }, true, true, true)).toBe(
        'cursor=undefined',
      );
    });

    it('throws for a scalar undefined when encoding is off', () => {
      expect(() =>
        serializeParams({ cursor: undefined }, true, true, false),
      ).toThrow(undefinedParamError);
    });

    it('serialises a scalar undefined as the string undefined when strict validation is off', () => {
      expect(serializeParams({ cursor: undefined }, false, true, true)).toBe(
        'cursor=undefined',
      );
      expect(serializeParams({ cursor: undefined }, false, true, false)).toBe(
        'cursor=undefined',
      );
    });
  });

  describe('values that must not be dropped', () => {
    it('keeps zero and false next to a normal string', () => {
      expect(
        serializeParams({
          symbol: 'BTCUSDT',
          limit: 0,
          reduceOnly: false,
        }),
      ).toBe('limit=0&reduceOnly=false&symbol=BTCUSDT');
    });

    it('keeps zero and false inside an array', () => {
      expect(serializeParams({ flags: [0, false, ''] })).toBe(
        'flags=0&flags=false&flags=',
      );
    });
  });

  describe('private GET signing call', () => {
    it('keeps caller key order instead of sorting', () => {
      expect(
        serializeForSigning({
          category: 'linear',
          symbol: 'BTCUSDT',
          limit: 50,
        }),
      ).toBe('category=linear&symbol=BTCUSDT&limit=50');
    });

    it('repeats coins in caller order', () => {
      expect(serializeForSigning({ coins: ['ETH', 'BTC'] })).toBe(
        'coins=ETH&coins=BTC',
      );
    });

    it('places a repeated coins list after earlier scalar params', () => {
      expect(
        serializeForSigning({
          category: 'spot',
          coins: ['BTC', 'ETH'],
        }),
      ).toBe('category=spot&coins=BTC&coins=ETH');
    });

    it('drops an empty coins list without joining the neighbours with a double ampersand', () => {
      expect(
        serializeForSigning({
          category: 'spot',
          coins: [],
          symbol: 'BTCUSDT',
        }),
      ).toBe('category=spot&symbol=BTCUSDT');
    });

    it('encodes a cursor percent on the signing path', () => {
      expect(serializeForSigning({ cursor: 'abc%def' })).toBe(
        'cursor=abc%25def',
      );
    });

    it('can disable encoding on the signing path', () => {
      expect(serializeForSigning({ cursor: 'abc%def' }, false, false)).toBe(
        'cursor=abc%def',
      );
    });

    it('still throws for an undefined array item on the signing path', () => {
      expect(() =>
        serializeForSigning({ coins: ['BTC', undefined] }, true),
      ).toThrow(undefinedParamError);
    });
  });
});
