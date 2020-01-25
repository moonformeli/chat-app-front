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
  protected async get<T = any>(url: string, config: AxiosRequestConfig = {}) {
    try {
      const res = await axios.get<T>(url, config);

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
