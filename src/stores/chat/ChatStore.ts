import { action, computed, observable } from 'mobx';
import { createContext } from 'react';

import { IUser } from '../../models/user/interfaces/IUser';

export default class ChatStore {
  @observable
  chatList: IUser[] = [];
}

export const ChatStoreCtx = createContext<ChatStore>(null!);
