import React from 'react';
import { Button as MantineButton, useMantineTheme } from '@mantine/core';
import useStyles from './styles';

interface IProps extends React.ComponentProps<'button'> {
  text?: string;
  size?: 'slim' | 'normal' | 'big';
}

const Button: React.FC<IProps> = props => {
  const {
    text,
    size = 'normal',
    onClick,
    children
  } = props;
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const padding = size === 'big'
    ? '0 1.5rem'
    : size === 'slim'
      ? '1 0.75rem'
      : '0 1rem';
  const fontSize = size === 'big'
    ? theme.fontSizes.lg
    : size === 'slim'
      ? theme.fontSizes.sm
      : theme.fontSizes.md;
  const height = size === 'big'
    ? '3rem'
    : size === 'slim'
      ? '2rem'
      : '2.3rem';

  return (
    <MantineButton
      onClick={onClick}
      className={classes.button}
      styles={{
        root: {
          padding: padding,
          fontSize: fontSize,
          height: height
        },
        label: {
          color: '#fff'
        }
      }}
    >
      {children ? children : text}
    </MantineButton>
  );
};

export default Button;