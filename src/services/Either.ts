import autobind from 'autobind-decorator';

import { IAxiosResponse } from '../models/axios/interfaces/IAxios';

export default class EitherEntity<T> {
  private v: IAxiosResponse<T>;
  constructor(v: IAxiosResponse<T>) {
    this.v = v;
  }

  @autobind
  map<T = any>(fn: (args?: any) => IAxiosResponse<T>) {
    return new EitherEntity(fn(this.v));
  }

  @autobind
  caseOf<L = any, R = any>({
    left,
    right
  }: {
    left: (l?: any) => L;
    right: (r?: any) => R;
  }) {
    if (this.v.isError) {
      return left();
    }
    return right(this.v);
  }

  static fail<L = any>(l: IAxiosResponse<L>): EitherEntity<L> {
    return new EitherEntity<L>(l);
  }

  static success<R = any>(r: IAxiosResponse<R>): EitherEntity<R> {
    return new EitherEntity<R>(r);
  }
}
