import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useRef } from 'react';

import ChatBody from '../../components/Chat/ChatBody';
import Navigation from '../../components/Navigation/Navigation';
import UserController from '../../controllers/user/UserController';
import { IUser } from '../../models/user/interfaces/IUser';
import UserQueryBuilder from '../../models/user/UserQueryBuilder';
import ChatStore, { ChatStoreCtx } from '../../stores/chat/ChatStore';
import WebSocketStore, {
  WebSocketStoreCtx
} from '../../stores/socket/WebSocketStore';

const Chat: React.FC = () => {
  const userController = new UserController(new UserQueryBuilder('/list'));
  const chatStore = useContext<ChatStore>(ChatStoreCtx);
  const socketStore = useContext<WebSocketStore>(WebSocketStoreCtx);

  const getMessage = (msg: MessageEvent) => {
    const { data } = msg;
    const message = JSON.parse(data);

    const user = chatStore.chatList.find(item => item.username === '구현모');

    if (!user) {
      return;
    }

    user.messages.push(message);
  };

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
    socketStore.beforeOnMessage = getMessage;
  }, []);

  return (
    <>
      <Navigation title={'채팅'} />
      <ChatBody />
    </>
  );
};

export default observer(Chat);
