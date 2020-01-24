export default abstract class BaseQueryBuilder {
  protected protocol: string = 'http';
  protected host: string = 'localhost';
  protected port: number = 8999;

  abstract getPath(): string;
}
