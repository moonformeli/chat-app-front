import { Either, left, right, Left, Right } from 'fp-ts/lib/Either';

interface IEitherEntity<L = any, R = any> {
  fail: (l: L) => Either<L, never>;
  success: (r: R) => Either<never, R>;
}

export default class EitherEntity implements IEitherEntity {
  fail<L>(l: L) {
    return left(l);
  }

  success<R>(r: R) {
    return right(r);
  }
}
