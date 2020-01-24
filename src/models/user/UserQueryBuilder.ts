import BaseQueryBuilder from '../BaseQueryBuilder';
import autobind from 'autobind-decorator';

export default class UserQueryBuilder extends BaseQueryBuilder {
  constructor(private path: string = '') {
    super();
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
