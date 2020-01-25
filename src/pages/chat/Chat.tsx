import React, { useEffect, useState } from 'react';

import ChatBody from '../../components/Chat/ChatBody';
import Navigation from '../../components/Navigation/Navigation';
import UserController from '../../controllers/user/UserController';
import { IUser } from '../../models/user/interfaces/IUser';
import UserQueryBuilder from '../../models/user/UserQueryBuilder';

const Chat: React.FC = () => {
  const [chats, setChats] = useState<IUser[]>([]);
  const userBuilder = new UserQueryBuilder('/list');
  const userController = new UserController(userBuilder);

  const getChats = async () => {
    const res = await userController.getAllChats<IUser[]>();
    const userChats = res.caseOf<void, IUser[]>({
      left: () => {},
      right: d => d
    });

    if (!userChats) {
      return;
    }

    setChats(userChats.data || []);
  };

  useEffect(() => {
    getChats();
  }, []);
  return (
    <>
      <Navigation title={'채팅'} />
      <ChatBody chats={chats} />
    </>
  );
};

export default Chat;
