import { observer } from 'mobx-react-lite';
import React, { useLayoutEffect, useMemo, useRef } from 'react';

import { IRoom } from '../../models/room/interfaces/IRoom';
import styles from './RoomBody.scss';
import RoomChat from './RoomChat';
import RoomMessageInput from './RoomMessageInput';

interface IRoomBodyProps extends Omit<IRoom, 'username' | 'id'> {}

const RoomBody: React.FC<IRoomBodyProps> = ({ messages }) => {
  const elRef = useRef<HTMLDivElement>(null);
  const containerRef = useMemo(
    () => document.querySelector('#root > section'),
    []
  );

  useLayoutEffect(() => {
    containerRef?.scrollTo(0, containerRef.scrollHeight);
  });

  return (
    <div className={styles.container} ref={elRef}>
      {messages.map((message, i) => (
        <RoomChat key={i} {...message} />
      ))}
      <RoomMessageInput />
    </div>
  );
};

export default observer(RoomBody);
