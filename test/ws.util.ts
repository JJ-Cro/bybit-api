/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { DefaultLogger, WebsocketClient } from '../src';

export function getSilentLogger(_logHint?: string): typeof DefaultLogger {
  return {
    trace: () => {},
    info: () => {},
    error: () => {},
  };
}

export const fullLogger: typeof DefaultLogger = {
  trace: (...params) => console.log('trace', ...params),
  info: (...params) => console.info('info', ...params),
  error: (...params) => console.error('error', ...params),
};

export type WsClientEvent =
  | 'open'
  | 'update'
  | 'close'
  | 'exception'
  | 'reconnect'
  | 'reconnected'
  | 'response';

/** Resolves a promise if an event is seen before a timeout (defaults to 4.5 seconds) */
export function waitForSocketEvent(
  wsClient: WebsocketClient,
  event: WsClientEvent,
  timeoutMs: number = 4.5 * 1000,
) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(
        // eslint-disable-next-line max-len
        `Failed to receive "${event}" event before timeout. Check that these are correct: topic, api keys (if private), signature process (if private)`,
      );
    }, timeoutMs);

    let resolvedOnce = false;

    function cleanup() {
      clearTimeout(timeout);
      resolvedOnce = true;
      wsClient.removeListener(event, (e) => resolver(e));
      wsClient.removeListener('exception', (e) => rejector(e));
    }

    function resolver(event) {
      resolve(event);
      cleanup();
    }

    function rejector(event) {
      if (!resolvedOnce) {
        reject(event);
      }
      cleanup();
    }

    wsClient.on(event, (e) => resolver(e));
    wsClient.on('exception', (e) => rejector(e));

    // if (event !== 'close') {
    //   wsClient.on('close', (event) => {
    //     clearTimeout(timeout);

    //     if (!resolvedOnce) {
    //       reject(event);
    //     }
    //   });
    // }
  });
}

export function listenToSocketEvents(wsClient: WebsocketClient) {
  const retVal: Record<
    'update' | 'open' | 'response' | 'close' | 'exception',
    typeof jest.fn
  > = {
    open: jest.fn(),
    response: jest.fn(),
    update: jest.fn(),
    close: jest.fn(),
    exception: jest.fn(),
  };

  wsClient.on('open', retVal.open);
  wsClient.on('response', retVal.response);
  wsClient.on('update', retVal.update);
  wsClient.on('close', retVal.close);
  wsClient.on('exception', retVal.exception);

  return {
    ...retVal,
    cleanup: () => {
      wsClient.removeListener('open', retVal.open);
      wsClient.removeListener('response', retVal.response);
      wsClient.removeListener('update', retVal.update);
      wsClient.removeListener('close', retVal.close);
      wsClient.removeListener('exception', retVal.exception);
    },
  };
}

export function logAllEvents(wsClient: WebsocketClient) {
  wsClient.on('update', (data) => {
    // console.log('wsUpdate: ', JSON.stringify(data, null, 2));
  });

  wsClient.on('open', (data) => {
    console.log('wsOpen: ', data.wsKey);
  });
  wsClient.on('response', (data) => {
    console.log('wsResponse ', JSON.stringify(data, null, 2));
  });
  wsClient.on('reconnect', ({ wsKey }) => {
    console.log('wsReconnecting ', wsKey);
  });
  wsClient.on('reconnected', (data) => {
    console.log('wsReconnected ', data?.wsKey);
  });
  wsClient.on('close', (data) => {
    // console.log('wsClose: ', data);
  });
}

export function promiseSleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
