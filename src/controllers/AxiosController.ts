import autobind from 'autobind-decorator';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import HttpStatusCodes from 'http-status-codes';

import EitherEntity from '../services/Either';

export default class AxiosController {
  @autobind
  private isClientError(res: AxiosResponse) {
    const { status } = res;

    return (
      status >= HttpStatusCodes.BAD_REQUEST &&
      status < HttpStatusCodes.INTERNAL_SERVER_ERROR
    );
  }

  @autobind
  private dispatch<T>(res: AxiosResponse<T>) {
    if (this.isClientError(res)) {
      return EitherEntity.fail<null>({
        data: null,
        isError: true,
        status: res.status,
        statusText: res.statusText
      });
    }

    return EitherEntity.success<T>({
      data: res.data,
      isError: false,
      status: res.status,
      statusText: res.statusText
    });
  }

  @autobind
  protected async get<T = any>(url: string, config: AxiosRequestConfig = {}) {
    try {
      const res = await axios.get<T>(url, config);
      return this.dispatch<T>(res);
    } catch (e) {
      return EitherEntity.fail<null>({
        data: null,
        isError: true,
        status: 404,
        statusText: e
      });
    }
  }

  @autobind
  protected async post<T = any>(
    url: string,
    data: any,
    config: AxiosRequestConfig
  ) {
    try {
      const res = await axios.post<T>(url, data, config);
      return this.dispatch<T>(res);
    } catch (e) {
      return EitherEntity.fail<null>({
        data: null,
        isError: true,
        status: 404,
        statusText: e
      });
    }
  }
}
