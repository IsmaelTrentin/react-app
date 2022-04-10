import { createStyles } from '@mantine/core';

const styles = createStyles((theme) => ({
  app: {
    display: 'grid',
    gridTemplateColumns: '250px auto',
    gridTemplateRows: 'auto',
    gridTemplateAreas: "'nav view'",
    width: '100%',
    height: '100vh',
    transition: 'grid-template-columns 120ms'
  },
  view: {
    gridArea: 'view',
    overflow: 'auto'
  }
}));

export default styles;