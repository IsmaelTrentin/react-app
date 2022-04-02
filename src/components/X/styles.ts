import { createStyles } from '@mantine/core';

const styles = createStyles((theme, _, getRef) => ({
  svg: {
    ref: getRef('svg'),
    display: 'inline-block',
    width: '50%',
    height: '50%',
    maxWidth: 30,
    maxHeight: 30,
    fill: theme.colorScheme === 'dark'
      ? '#000'
      : '#fff',
    transition: 'all 120ms ease'
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    minWidth: 30,
    minHeight: 30,
    aspectRatio: '1',
    borderRadius: '50%',
    transition: 'all 120ms ease',
    cursor: 'pointer',
    opacity: 0.4,

    '&:active': {
      backgroundColor: theme.other.bgColors.secondary,
      transform: 'scale(0.92)',
      opacity: 1
    },
    '&:hover': {
      backgroundColor: theme.other.bgColors.secondaryAlt,
      opacity: 1
    },
    '&:focus': {
      backgroundColor: theme.other.bgColors.secondaryAlt,
      opacity: 1
    },
    [`&:hover .${getRef('svg')}`]: {
      fill: theme.colorScheme === 'dark'
        ? '#fff'
        : '#000'
    },
    [`&:focus .${getRef('svg')}`]: {
      fill: theme.colorScheme === 'dark'
        ? '#fff'
        : '#000'
    }
  }
}));

export default styles;