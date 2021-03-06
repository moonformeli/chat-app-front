import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import { classes } from 'typestyle';

import { IUser } from '../../models/user/interfaces/IUser';
import { format } from '../../utils';
import styles from './ChatItem.scss';

interface IChatItemProps {
  chat: IUser;
}

const ChatItem: React.FC<IChatItemProps> = ({ chat }) => {
  const mostRecentMessage = chat.messages[chat.messages.length - 1];
  const unReadMessages = chat.messages.filter(message => !message.isRead)
    .length;

  return (
    <li className={styles.container}>
      <Link to={`/room/${chat.id}`} className={styles.link}>
        <div className={styles.profile}>
          <i style={{ backgroundImage: `url(${chat.profile})` }} />
        </div>
        <div className={styles.message}>
          <strong className={styles.username}>{chat.username}</strong>
          <p className={styles.recentMessage}>{mostRecentMessage.message}</p>
        </div>
        <div className={styles.receive}>
          <span className={styles.time}>
            {format(mostRecentMessage.createdAt)}
          </span>
          <span
            className={classes(
              styles.unRead,
              unReadMessages === 0 && styles.hidden
            )}
          >
            <strong>{unReadMessages}</strong>
          </span>
        </div>
      </Link>
    </li>
  );
};

export default observer(ChatItem);
