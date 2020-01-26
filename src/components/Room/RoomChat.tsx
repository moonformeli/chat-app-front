import React from 'react';
import { classes } from 'typestyle';

import { IMessage } from '../../models/user/interfaces/IUser';
import styles from './RoomChat.scss';

interface IRoomChatProps extends IMessage {}

const RoomChat: React.FC<IRoomChatProps> = ({ isMe, message, messageType }) => {
  return (
    <p className={styles.container}>
      <span className={classes(styles.message, isMe && styles.myMessage)}>
        <span>{message}</span>
      </span>
    </p>
  );
};

export default RoomChat;
