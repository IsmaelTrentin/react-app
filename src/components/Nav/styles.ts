import { createStyles } from '@mantine/core';
import { noselect } from '../../util/global.styles';

const styles = createStyles((theme) => ({
  main: {
    gridArea: 'nav',
    position: 'relative',
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'flex-start',
    height: '100%',
    paddingTop: '0.25rem',
    backgroundColor: theme.other.bgColors.primaryAlt
  },
  selector: {
    position: 'absolute',
    right: 0,
    width: 4,
    border: 'none',
    backgroundColor: theme.colors.primary,
    height: '2rem',
    transition: 'all 200ms ease, opacity 200ms 100ms'
  },
  entry: {
    ...noselect,
    width: '100%',
    padding: '0 1.5rem',
    margin: '1rem 0 0 0',
    fontSize: theme.headings.sizes.h3.fontSize,
    color: theme.other.textColors.alt,
    transition: 'color 100ms',
    '&:hover': {
      color: theme.other.textColors.primary
    }
  },
  current: {
    color: `${theme.other.textColors.highlight} !important`
  }
}));

export default styles;