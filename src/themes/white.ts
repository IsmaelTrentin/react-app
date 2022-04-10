import { MantineThemeOverride } from '@mantine/core';

// const primary = '#09d684';
const primary = '#7800ff'; //#09d684 #0088ff
const whiteTheme: MantineThemeOverride = {
  colorScheme: 'light',
  focusRing: 'auto',
  defaultRadius: 3,
  colors: {
    primary: [primary, primary, primary, primary, primary, primary, primary, primary, primary, primary,],
    red: ['#ff2a4e', '#ff2a4e', '#ff2a4e', '#ff2a4e', '#ff2a4e', '#ff2a4e', '#ff2a4e', '#ff2a4e', '#ff2a4e', '#ff2a4e']
  },
  primaryColor: 'primary',
  fontFamily: 'Circular Std',
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  },
  shadows: {
    lg: '0 2px 11px 0 #0000002c',
    md: '0 2px 11px 0 #0000002c',
    sm: '0 2px 11px 0 #0000002c',
    xl: '0 2px 11px 0 #0000002c',
    xs: '0 2px 11px 0 #0000002c'
  },
  headings: {
    fontFamily: 'Circular Std',
    fontWeight: 200,
    sizes: {
      h1: {
        fontSize: '2rem'
      },
      h2: {
        fontSize: '1.5rem'
      },
      h3: {
        fontSize: '1.25rem'
      }
    }
  },
  dir: 'ltr',
  loader: 'oval',
  other: {
    bgColors: {
      primary: '#ffffff',
      primaryAlt: '#f1f1f1',
      secondary: '#f9f9f9',
      secondaryAlt: '#eaeaea'
    },
    textColors: {
      primary: '#4a4c51',
      alt: '#73767b',
      highlight: primary//'#000000'
    },
    shadows: {
      default: `5px 5px 0 0 ${primary}ff, 10px 10px 0 0 #00000006`,
      hover: `8px 8px 0 0 ${primary}ff, 16px 16px 0 0 #00000006`,
      active: `11px 11px 0 0 ${primary}ff, 22px 22px 0 0 #00000006`
    },
    shadowHover: '5px 5px 0 0 #7800ffff, 10px 10px 0 0 #00000033, 15px 15px 0 0 #00000011',
    outline: {
      dark: '#1d1f22'
    }
  }
};

export default whiteTheme;