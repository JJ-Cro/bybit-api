import { RestClientV5 } from '../../src/index';

// or
// import { RestClientV5 } from 'bybit-api';

/**
 * The first parameter of the REST client allows you to pass any configuration parameters supported by the SDK.
 *
 * These include API keys, if you wish to use private endpoints, but also expose other features such as
 * setting a custom base URL (e.g. for Turkish users).
 *
 * Refer to the API documentation for a complete list of domains: https://bybit-exchange.github.io/docs/v5/guide#authentication
 */
const client = new RestClientV5({
  /**
   * You can pass a completely custom base URL,
   * e.g. if you're trying to use a domain that hasn't been added yet (please let us know)
   */
  // baseUrl: 'https://api5.bybit.com',
  //
  //
  /**
   *
   * Predefined API regions are available through the `apiRegion` property.
   * Choose the region where your Bybit account is registered:
   *
   */
  //
  //
  // default: routes to api.bybit.com
  // apiRegion: 'default',
  //
  //
  // bytick: routes to api.bytick.com
  // apiRegion: 'bytick',
  //
  //
  // NL: routes to api.bybit.nl (for Netherlands users)
  // apiRegion: 'NL',
  //
  //
  // TK: routes to api.bybit.tr (for Turkey users)
  // apiRegion: 'TK',
  //
  //
  // KZ: routes to api.bybit.kz (for Kazakhstan users)
  // apiRegion: 'KZ',
  //
  //
  // HK: routes to api.spark-fintech.com and adds x-refer-site-id: HKG
  // Testnet routes to api-testnet.spark-fintech.com
  // apiRegion: 'HK',
  //
  //
  // GE: routes to api.bybitgeorgia.ge (for Georgia users)
  // apiRegion: 'GE',
  //
  //
  // UAE: routes to api.bybit.ae (for United Arab Emirates users)
  // apiRegion: 'UAE',
  //
  //
  // EU: routes to api.bybit.eu (for EU and EEA users)
  // apiRegion: 'EU',
  //
  //
  // ID: routes to api.bybit.id (for Indonesian users)
  // apiRegion: 'ID',
  //
  //
  // JP: routes to api.manepa.jp (for Japan users)
  // Testnet routes to api-testnet.manepa.jp
  // apiRegion: 'JP',
  //
  //
  /**
   * Brazil and Argentina international accounts use the global API domain
   * with an x-site-id header. Choose the site ID for your account:
   */
  // siteId: 'BRA_BTL',
  // siteId: 'ARG_BTL',
});

(async () => {
  try {
    const time1 = await client.getServerTime();

    console.log('time res: ', { time1 });
  } catch (e) {
    console.error('request failed: ', e);
  }
})();
