import autobind from 'autobind-decorator';
import { AxiosRequestConfig } from 'axios';

import RoomQueryBuilder from '../../models/room/RoomQueryBuilder';
import BaseController from '../BaseController';

export default class UserController extends BaseController {
  constructor(private builder: RoomQueryBuilder) {
    super();
  }

  @autobind
  async getRoomDetail<T = any>(body: { [key: string]: any }) {
    const url = this.builder.getPath();
    const config: AxiosRequestConfig = {
      url,
      method: 'post'
    };

    return await this.send<T>(config, body);
  }
}
