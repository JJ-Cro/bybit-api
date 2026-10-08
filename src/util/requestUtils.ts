import { AxiosResponse } from 'axios';

import { APIRateLimit } from '../types';

export type APIRegion =
  | 'default'
  | 'bytick'
  | 'TK'
  | 'KZ'
  | 'HK'
  | 'GE'
  | 'UAE'
  | 'EU'
  | 'ID'
  | 'JP';

/** SDK options for an individual REST method call, separate from API parameters. */
export interface RestCallOptions {
  /**
   * Array format for private GET query parameters. Values:
   *
   * - `comma` (default): `{ coins: ["BTC", "ETH"] }` becomes
   *   `?coins=BTC%2CETH`. An empty array becomes `?coins=`.
   * - `repeat`: `{ coins: ["BTC", "ETH"] }` becomes `?coins=BTC&coins=ETH`.
   *   Some endpoints require this. Empty arrays are omitted completely.
   *
   * Examples assume `encodeSerialisedValues` is enabled (the default).
   * Public requests and JSON/multipart bodies retain their existing
   * serialization.
   */
  serialiserArrayFormat?: 'comma' | 'repeat';
}

export interface RestClientOptions {
  /** Your API key */
  key?: string;

  /** Your API secret */
  secret?: string;

  /** Set to `true` to connect to testnet. Uses the live environment by default. */
  testnet?: boolean;

  /**
   * Set to `true` to use Bybit's V5 demo trading: https://bybit-exchange.github.io/docs/v5/demo
   */
  demoTrading?: boolean;

  /** Override the max size of the request window (in ms) */
  recv_window?: number;

  /**
   * Disabled by default.
   * This can help on machines with consistent latency problems.
   *
   * Note: this feature is not recommended as one slow request can cause problems
   */
  enable_time_sync?: boolean;

  /**
   * Enable keep alive for REST API requests (via axios).
   * See: https://github.com/tiagosiebler/bybit-api/issues/368
   */
  keepAlive?: boolean;

  /**
   * When using HTTP KeepAlive, how often to send TCP KeepAlive packets over sockets being kept alive. Default = 1000.
   * Only relevant if keepAlive is set to true.
   * Default: 1000 (defaults comes from https agent)
   */
  keepAliveMsecs?: number;

  /** How often to sync time drift with bybit servers */
  sync_interval_ms?: number | string;

  /** Determines whether to perform time synchronization before sending private requests */
  syncTimeBeforePrivateRequests?: boolean;

  /** Default: false. If true, we'll throw errors if any params are undefined */
  strict_param_validation?: boolean;

  /**
   * Default: true.
   * If true, request parameters will be URI encoded during the signing process.
   * New behaviour introduced in v3.2.1 to fix rare parameter-driven sign errors with unified margin cursors containing "%".
   */
  encodeSerialisedValues?: boolean;

  /**
   * Optionally override API protocol + domain
   * e.g baseUrl: 'https://api.bytick.com'
   **/
  baseUrl?: string;

  apiRegion?: APIRegion;

  /**
   * Site ID sent as the `x-site-id` header on every REST request.
   * WebSocket clients expose the same top-level `siteId` option.
   * Brazil and Argentina internal accounts now use `api.bybit.com` without this header.
   * Keep passing it only if a remaining site still requires `x-site-id`.
   * @see https://bybit-exchange.github.io/docs/v5/guide#authentication
   */
  siteId?: string;

  /** Default: true. whether to try and post-process request exceptions. */
  parse_exceptions?: boolean;

  /** Default: false. Enable to parse/include per-API/endpoint rate limits in responses. */
  parseAPIRateLimits?: boolean;

  /** Default: false. Enable to throw error if rate limit parser fails */
  throwOnFailedRateLimitParse?: boolean;

  /** Default: false. Enable to automatically throw responses for failed REST API requests */
  throwExceptions?: boolean;

  /**
   * Allows you to provide a custom "signMessage" function, e.g. to use node's much faster createHmac method
   *
   * Look in the examples folder for a demonstration on using node's createHmac instead.
   */
  customSignMessageFn?: (message: string, secret: string) => Promise<string>;
}

/**
 * Serialise a (flat) object into a query string
 * @param params the object to serialise
 * @param strict_validation throw if any properties are undefined
 * @param sortProperties sort properties alphabetically before building a query string
 * @param encodeSerialisedValues URL encode value before serialising
 * @param arrayFormat array representation, defaulting to legacy comma coercion
 * @returns the params object as a serialised string key1=value1&key2=value2&etc
 */
export function serializeParams(
  params: object = {},
  strict_validation = false,
  sortProperties = true,
  encodeSerialisedValues = true,
  arrayFormat: RestCallOptions['serialiserArrayFormat'] = 'comma',
): string {
  const properties = sortProperties
    ? Object.keys(params).sort()
    : Object.keys(params);

  const parts: string[] = [];
  for (const key of properties) {
    const rawValue = params[key];
    const repeatArray = arrayFormat === 'repeat' && Array.isArray(rawValue);
    const values = repeatArray ? rawValue : [rawValue];

    for (const item of values) {
      const value = encodeSerialisedValues ? encodeURIComponent(item) : item;

      // Preserve legacy validation after coercion; repeated items validate raw values.
      const validationValue = repeatArray ? item : value;
      if (
        strict_validation === true &&
        typeof validationValue === 'undefined'
      ) {
        throw new Error(
          'Failed to sign API request due to undefined parameter',
        );
      }
      parts.push(`${key}=${value}`);
    }
  }
  return parts.join('&');
}

export function getRestBaseUrl(
  useTestnet: boolean,
  restClientOptions: RestClientOptions,
): string {
  const domainMap: {
    [Region in APIRegion]: string;
  } = {
    default: 'https://api.bybit.com',
    bytick: 'https://api.bytick.com',
    TK: 'https://api.bybit.tr',
    KZ: 'https://api.bybit.kz',
    HK: 'https://api.spark-fintech.com',
    GE: 'https://api.bybitgeorgia.ge',
    UAE: 'https://api.bybit.ae',
    EU: 'https://api.bybit.eu',
    ID: 'https://api.bybit.id',
    JP: 'https://api.manepa.jp',
  };

  const exchangeBaseUrls = {
    livenet: domainMap,
    testnet: 'https://api-testnet.bybit.com',
    demoLivenet: 'https://api-demo.bybit.com',
  };

  if (restClientOptions.baseUrl) {
    return restClientOptions.baseUrl;
  }

  if (restClientOptions.demoTrading) {
    return exchangeBaseUrls.demoLivenet;
  }

  if (useTestnet) {
    if (restClientOptions.apiRegion === 'JP') {
      return 'https://api-testnet.manepa.jp';
    }
    if (restClientOptions.apiRegion === 'HK') {
      return 'https://api-testnet.spark-fintech.com';
    }
    return exchangeBaseUrls.testnet;
  }

  if (restClientOptions.apiRegion) {
    const regionalBaseURL =
      exchangeBaseUrls.livenet[restClientOptions.apiRegion];

    if (!regionalBaseURL) {
      throw new Error(
        `No base URL found for region "${restClientOptions.apiRegion}". Check that your "apiRegion" value is valid.`,
      );
    }
    return regionalBaseURL;
  }

  return exchangeBaseUrls.livenet.default;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isWsPong(msg: any): boolean {
  if (!msg) {
    return false;
  }
  if (msg.pong || msg.ping) {
    return true;
  }

  if (msg['op'] === 'pong') {
    return true;
  }

  if (msg['ret_msg'] === 'pong') {
    return true;
  }

  return (
    msg.request &&
    msg.request.op === 'ping' &&
    msg.ret_msg === 'pong' &&
    msg.success === true
  );
}

export const APIID = 'bybitapinode';
export const APIIDEU = 'Cg000971';

/**
 * Used to switch how authentication/requests work under the hood (primarily for SPOT since it's different there)
 */
export const REST_CLIENT_TYPE_ENUM = {
  v5: 'v5',
} as const;

export type RestClientType =
  (typeof REST_CLIENT_TYPE_ENUM)[keyof typeof REST_CLIENT_TYPE_ENUM];

/** Parse V5 rate limit response headers, if enabled */
export function parseRateLimitHeaders(
  headers: AxiosResponse['headers'] | undefined,
  throwOnFailedRateLimitParse: boolean,
): APIRateLimit | undefined {
  try {
    if (!headers || typeof headers !== 'object') {
      return;
    }
    const remaining = headers['x-bapi-limit-status'];
    const max = headers['x-bapi-limit'];
    const resetAt = headers['x-bapi-limit-reset-timestamp'];

    if (
      typeof remaining === 'undefined' ||
      typeof max === 'undefined' ||
      typeof resetAt === 'undefined'
    ) {
      return;
    }

    const result: APIRateLimit = {
      remainingRequests: Number(remaining),
      maxRequests: Number(max),
      resetAtTimestamp: Number(resetAt),
    };

    if (
      isNaN(result.remainingRequests) ||
      isNaN(result.maxRequests) ||
      isNaN(result.resetAtTimestamp)
    ) {
      return;
    }

    return result;
  } catch (e) {
    if (throwOnFailedRateLimitParse) {
      console.log(
        new Date(),
        'parseRateLimitHeaders()',
        'Failed to parse rate limit headers',
        {
          headers,
          exception: e,
        },
      );
      throw e;
    }
  }

  return undefined;
}

export function isEUAPIRegion(restClientOptions: RestClientOptions): boolean {
  return (
    restClientOptions.apiRegion === 'EU' ||
    restClientOptions.baseUrl?.includes('.eu') === true
  );
}
