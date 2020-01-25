import React from 'react';

import { IUser } from '../../models/user/interfaces/IUser';
import ChatItem from './ChatItem';

interface IChatBodyProps {
  chats: IUser[];
}

const ChatBody: React.FC<IChatBodyProps> = ({ chats }) => {
  return (
    <div>
      <ul>
        {chats.map((chat, i) => (
          <ChatItem chat={chat} key={i} />
        ))}
      </ul>
    </div>
  );
};

export default ChatBody;
