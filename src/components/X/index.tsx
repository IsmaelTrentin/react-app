import React from 'react';
import useStyles from './styles';
import { ReactComponent as XSvg } from '../../public/svg/x.svg';

interface IProps {
  onClick?: () => void;
}

const X: React.FC<IProps> = ({ onClick }) => {
  const { classes } = useStyles();
  return (
    <div className={classes.main} onClick={onClick}>
      <XSvg className={classes.svg} />
    </div>
  );
}

export default X;