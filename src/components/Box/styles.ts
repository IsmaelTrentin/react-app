import { createStyles } from '@mantine/core';

const styles = createStyles(theme => ({
  box: {
    padding: '1rem',
    borderRadius: 3,
    boxShadow: theme.other.shadows.default,
    backgroundColor: theme.other.bgColors.secondary,
    transition: 'box-shadow 160ms ease, transform 100ms ease',
    '&:hover': {
      boxShadow: theme.other.shadows.hover,
      cursor: 'pointer'
    },
    '&:active': {
      boxShadow: theme.other.shadows.active,
    }
  }
}));

export default styles;