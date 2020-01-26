import autobind from 'autobind-decorator';

export default class WebSocketController {
  private ws: WebSocket;

  constructor(url: string) {
    this.ws = new WebSocket(url);
    this.ws.onopen = this.onOpen;
    this.ws.onmessage = this.onMessage;
  }

  @autobind
  private onOpen() {
    console.log('socket is connected');
  }

  @autobind
  private onMessage(msg: any) {
    console.dir(msg);
  }
}
