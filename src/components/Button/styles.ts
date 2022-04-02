import { createStyles } from '@mantine/core';

const styles = createStyles((theme, _params) => ({
  button: {
    fontWeight: 'normal',
    transition: 'transform 90ms',
    ':not(:disabled):active': {
      transform: 'scale(0.98)'
    }
  }
}));

export default styles