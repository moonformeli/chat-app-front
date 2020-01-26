import React from 'react';

import img from '../../static/icons8-back-96.png';
import styles from './Navigation.scss';

interface INavigationProps {
  title?: string;
  renderLeft?: boolean;
  onClickLeft?: () => void;
}

const Navigation: React.FC<INavigationProps> = ({
  title = '',
  renderLeft,
  onClickLeft = () => {}
}) => {
  return (
    <div className={styles.container}>
      {renderLeft && (
        <img
          className={styles.back}
          src={img}
          alt="back"
          onClick={onClickLeft}
        />
      )}
      <span className={styles.title}>{title}</span>
    </div>
  );
};

export default Navigation;
