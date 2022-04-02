import { createStyles } from '@mantine/core';

const styles = createStyles((theme, _, getRef) => ({
  wrapper: {
    ref: getRef('wrapper'),
    width: '100%',
    height: '100%',
    zIndex: 9
  },
  bg: {
    position: 'absolute',
    width: '100vw',
    height: '100vh',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#00000045',
    zIndex: 9
  },
  'bg-enter': {
    opacity: 0,
    transition: 'opacity 220ms',
    [`& .${getRef('wrapper')}`]: {
      opacity: 0,
      transition: 'opacity 220ms'
    }
  },
  'bg-enter-active': {
    opacity: 1,
    [`& .${getRef('wrapper')}`]: {
      opacity: 1,
      animation: 'bounce-in 220ms'
    }
  },
  'bg-exit': {
    transition: 'opacity 220ms ease',
    [`& .${getRef('wrapper')}`]: {
      transition: 'transform 220ms'
    }
  },
  'bg-exit-active': {
    opacity: 0,
    [`& .${getRef('wrapper')}`]: {
      transform: 'scale(0.9)'
    }
  },
  modal: {
    position: 'absolute',
    minWidth: 200,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 10,
    boxShadow: theme.shadows.md,
    backgroundColor: theme.other.bgColors.secondary,
    borderRadius: 4
  },
  'modal-no-container': {
    position: 'absolute',
    minWidth: 200,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 10,
    boxShadow: theme.shadows.md,
    backgroundColor: theme.other.bgColors.secondary,
    borderRadius: 4
  },
  x: {
    position: 'absolute',
    right: 5,
    top: 5,
    zIndex: 11
  }
}));

export default styles;