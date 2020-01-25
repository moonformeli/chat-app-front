import UserController from '../../../controllers/user/UserController';
import { IUser } from '../../../models/user/interfaces/IUser';
import UserQueryBuilder from '../UserQueryBuilder';

const controller = new UserController(new UserQueryBuilder('/list'));

// FIXME 테스트만 작성하고 바벨을 연결하지 못했음. decorator 를 인식할 수 없다고 나옴
describe('유저 데이터를 성공적으로 받아올 수 있다', () => {
  it('path 를 올바르게 지정하면 성공한다', async done => {
    const res = await controller.getAllChats();

    const data = res.doRight<IUser[]>({
      right: r => r
    });

    expect(data).toBeTruthy();
    expect(data.status).toBe(200);
    expect(data.isError).toBe(false);
  });
});
