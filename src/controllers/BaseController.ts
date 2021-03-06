import autobind from 'autobind-decorator';
import { AxiosRequestConfig } from 'axios';

import AxiosController from './AxiosController';

export default class BaseController extends AxiosController {
  constructor() {
    super();
  }

  @autobind
  protected async send<T = any>(config: AxiosRequestConfig, body: any = {}) {
    const { url = '' } = config;

    if (config.method?.toUpperCase() === 'GET') {
      return await this.get<T>(url, config);
    }
    if (config.method?.toUpperCase() === 'POST') {
      return await this.post<T>(url, body, config);
    }
    return Promise.reject();
  }
}
