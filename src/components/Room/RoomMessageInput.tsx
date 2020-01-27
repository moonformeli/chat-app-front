import React, { ChangeEvent, useState } from 'react';

import img from '../../static/icons8-message-send-dotted-80.png';
import styles from './RoomMessageInput.scss';

interface IRoomMessageInputProps {}

const RoomMessageInput: React.FC<IRoomMessageInputProps> = () => {
  const [message, setMessage] = useState('');

  const onChangeMessage = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setMessage(value);
  };

  const onSendMessage = () => {};

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        placeholder="메시지를 입력하세요."
        value={message}
        onChange={onChangeMessage}
      />
      <div className={styles.imgContainer} onClick={onSendMessage}>
        <img src={img} className={styles.img} />
      </div>
    </div>
  );
};

export default RoomMessageInput;
