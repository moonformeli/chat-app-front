import React from 'react';

import { IRoom } from '../../models/room/interfaces/IRoom';
import styles from './RoomBody.scss';
import RoomChat from './RoomChat';
import RoomMessageInput from './RoomMessageInput';

interface IRoomBodyProps extends Omit<IRoom, 'username' | 'id'> {}

const RoomBody: React.FC<IRoomBodyProps> = ({ messages }) => {
  return (
    <div className={styles.container}>
      {messages.map((message, i) => (
        <RoomChat key={i} {...message} />
      ))}
      <RoomMessageInput />
    </div>
  );
};

export default RoomBody;
