import { IUser } from '../../user/interfaces/IUser';

export interface IRoom extends Pick<IUser, 'id' | 'messages' | 'username'> {}
