import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';

import ChatStore, { ChatStoreCtx } from '../../stores/chat/ChatStore';
import ChatItem from './ChatItem';

const ChatBody: React.FC = () => {
  const store = useContext(ChatStoreCtx) as ChatStore;
  const { chatList } = store;

  return (
    <div>
      <ul>
        {chatList.map((chat, i) => (
          <ChatItem chat={chat} key={i} />
        ))}
      </ul>
    </div>
  );
};

export default observer(ChatBody);
