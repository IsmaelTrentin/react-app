import React from 'react';
import styles from './index.module.scss';
import { ReactComponent as XSvg } from '../../public/svg/x.svg';

interface IProps {
  onClick?: () => void;
}

const X: React.FC<IProps> = ({ onClick }) => {
  return (
    <div className={styles.main} onClick={onClick}>
      <XSvg className={styles.svg} />
    </div>
  );
}

export default X;