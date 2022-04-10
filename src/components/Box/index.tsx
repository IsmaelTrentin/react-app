import React, { CSSProperties } from 'react';
import useStyles from './styles';
import { noselect as noselectStyle } from './../../util/global.styles';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  noselect?: boolean;
  width?: string | number;
  height?: string | number;
  padding?: string | number;
}

const Box: React.FC<IProps> = props => {
  const {
    style,
    noselect = false,
    width,
    height,
    padding,
    children
  } = props;
  const { classes } = useStyles();
  const _style = noselect
    ? { ...style, ...noselectStyle as CSSProperties }
    : style;
  if (_style) {
    _style.width = width;
    _style.height = height;
    _style.padding = padding;
  }

  return (
    <div
      className={classes.box}
      style={_style}
    >
      {children}
    </div>
  );
};

export default Box;