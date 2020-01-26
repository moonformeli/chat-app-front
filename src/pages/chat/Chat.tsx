import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef } from 'react';

import ChatBody from '../../components/Chat/ChatBody';
import Navigation from '../../components/Navigation/Navigation';
import UserController from '../../controllers/user/UserController';
import { IUser } from '../../models/user/interfaces/IUser';
import UserQueryBuilder from '../../models/user/UserQueryBuilder';
import ChatStore, { ChatStoreCtx } from '../../stores/chat/ChatStore';

const Chat: React.FC = () => {
  const chatStore = useRef(new ChatStore()).current;
  const userBuilder = new UserQueryBuilder('/list');
  const userController = new UserController(userBuilder);

  const getChats = async () => {
    const res = await userController.getAllChats<IUser[]>();
    const userChats = res.caseOf<void, IUser[]>({
      left: () => {},
      right: d => d
    });

    if (!userChats || userChats.isError || !userChats.data) {
      return;
    }

    chatStore.chatList = userChats.data;
  };

  useEffect(() => {
    getChats();
  }, []);

  return (
    <ChatStoreCtx.Provider value={chatStore}>
      <Navigation title={'채팅'} />
      <ChatBody />
    </ChatStoreCtx.Provider>
  );
};

export default observer(Chat);
