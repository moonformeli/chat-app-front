import autobind from 'autobind-decorator';

import BaseQueryBuilder from '../BaseQueryBuilder';

export default class RoomQueryBuilder extends BaseQueryBuilder {
  constructor(private path: string = '') {
    super();
  }

  @autobind
  getPort(): number {
    return this.port;
  }

  @autobind
  getPath(): string {
    const basePath = `${this.protocol}://${this.host}:${this.port}`;

    if (this.path.includes('/')) {
      return `${basePath}${this.path}`;
    }
    return `${basePath}/${this.path}`;
  }
}
