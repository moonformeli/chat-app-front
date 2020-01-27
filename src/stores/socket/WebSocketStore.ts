import { action, observable } from 'mobx';
import { createContext } from 'react';

export default class WebSocketStore {
  @observable
  ws: WebSocket = new WebSocket('ws://localhost:8999/');
  @observable
  beforeOnMessage: ((msg: any) => void) | null = null;

  constructor() {
    this.ws.addEventListener('open', () => console.log('socket is connected'));
    this.ws.addEventListener('message', (msg: MessageEvent) =>
      this.onMessage(msg)
    );
  }

  @action.bound
  onMessage(msg: MessageEvent) {
    this.beforeOnMessage?.(msg);
  }
}

export const WebSocketStoreCtx = createContext<WebSocketStore>(null!);
