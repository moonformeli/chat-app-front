export interface IAxiosResponse<T> {
  data: T;
  isError: boolean;
  status: number;
  statusText: string;
}