import autobind from 'autobind-decorator';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import HttpStatusCodes from 'http-status-codes';

import EitherEntity from '../services/Either';

export default class AxiosController {
  private either = new EitherEntity();

  private isClientError(res: AxiosResponse) {
    const { status } = res;

    return (
      status >= HttpStatusCodes.BAD_REQUEST &&
      status < HttpStatusCodes.INTERNAL_SERVER_ERROR
    );
  }

  @autobind
  protected async get<T>(url: string, config: AxiosRequestConfig = {}) {
    const res = await axios.get<T>(url, config);

    if (this.isClientError(res)) {
      return this.either.fail({
        data: null,
        status: res.status,
        statusText: res.statusText
      });
    }

    return this.either.success({
      data: res.data,
      status: res.status,
      statusText: res.statusText
    });
  }
}
