import { observer } from 'mobx-react-lite';
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import styles from './App.scss';
import WebSocketController from './controllers/WebSocketController';
import Chat from './pages/chat/Chat';
import Room from './pages/room/Room';

const socketController = new WebSocketController('ws://localhost:8999/');

const App: React.FC = () => {
  // useEffect(() => {
  //   const ws = new WebSocket('ws://localhost:8999/');

  //   ws.onopen = () => {
  //     console.log('ws open');
  //   };

  //   ws.onmessage = d => {
  //     console.dir(d);
  //   };
  // }, []);

  return (
    <section className={styles.container}>
      <Switch>
        <Route exact={true} path="/list" component={Chat} />
        <Route path="/room/:id" component={Room} />
      </Switch>
    </section>
  );
};

export default observer(App);
