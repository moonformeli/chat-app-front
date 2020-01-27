import { observer } from 'mobx-react-lite';
import React, { useRef } from 'react';
import { Route, Switch } from 'react-router-dom';

import styles from './App.scss';
import Chat from './pages/chat/Chat';
import Room from './pages/room/Room';
import ChatStore, { ChatStoreCtx } from './stores/chat/ChatStore';
import WebSocketStore, {
  WebSocketStoreCtx
} from './stores/socket/WebSocketStore';

const App: React.FC = () => {
  const chatStore = useRef<ChatStore>(new ChatStore()).current;
  const socketStore = useRef<WebSocketStore>(new WebSocketStore()).current;

  return (
    <section className={styles.container}>
      <ChatStoreCtx.Provider value={chatStore}>
        <WebSocketStoreCtx.Provider value={socketStore}>
          <Switch>
            <Route exact={true} path="/list" component={Chat} />
            <Route path="/room/:id" component={Room} />
          </Switch>
        </WebSocketStoreCtx.Provider>
      </ChatStoreCtx.Provider>
    </section>
  );
};

export default observer(App);
