import React from 'react';
import styles from './Navigation.scss';

interface INavigationProps {
  title?: string;
}

const Navigation: React.FC<INavigationProps> = ({ title = '' }) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{title}</span>
    </div>
  );
};

export default Navigation;
