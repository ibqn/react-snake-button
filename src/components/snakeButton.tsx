import { FunctionComponent } from 'react';
import styles from './snakeButton.module.sass';

export const SnakeButton: FunctionComponent = () => {
  return (
    <button className={styles.button}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Button
    </button>
  );
};

export default SnakeButton;
