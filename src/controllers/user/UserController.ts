import { AxiosRequestConfig } from 'axios';
import BaseController from '../BaseController';
import UserQueryBuilder from '../../models/user/UserQueryBuilder';
import autobind from 'autobind-decorator';

export default class UserController extends BaseController {
  constructor(private builder: UserQueryBuilder) {
    super();
  }

  @autobind
  async getAllChats() {
    const url = this.builder.getPath();
    const config: AxiosRequestConfig = {
      url,
      method: 'get'
    };

    return await this.send(config);
  }
}
