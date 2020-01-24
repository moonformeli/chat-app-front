import autobind from 'autobind-decorator';
import { AxiosRequestConfig } from 'axios';

import UserQueryBuilder from '../../models/user/UserQueryBuilder';
import BaseController from '../BaseController';

export default class UserController extends BaseController {
  constructor(private builder: UserQueryBuilder) {
    super();
  }

  @autobind
  async getAllChats<T = any>() {
    const url = this.builder.getPath();
    const config: AxiosRequestConfig = {
      url,
      method: 'get'
    };

    return await this.send<T>(config);
  }
}
