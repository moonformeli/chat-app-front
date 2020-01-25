import React, { useEffect, useState } from 'react';

import styles from './App.scss';
import Navigation from './components/Navigation/Navigation';
import UserController from './controllers/user/UserController';
import { IUser } from './models/user/interfaces/IUser';
import UserQueryBuilder from './models/user/UserQueryBuilder';

const App: React.FC = () => {
  const [chats, setChats] = useState<IUser[]>([]);
  const userBuilder = new UserQueryBuilder('/list');
  const userController = new UserController(userBuilder);

  const getChats = async () => {
    const res = await userController.getAllChats<IUser[]>();

    console.dir(res);

    const userChats = res.caseOf<void, IUser[]>({
      left: () => {},
      right: d => d
    });

    // if (userChats.)
    console.dir(userChats);
  };

  useEffect(() => {
    getChats();
  }, []);
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
      <Navigation title={'채팅'} />
      <h1>Hello world</h1>
    </section>
  );
};

export default App;
