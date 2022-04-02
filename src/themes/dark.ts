import { MantineThemeOverride } from '@mantine/core';

const darkTheme: MantineThemeOverride = {
  colorScheme: 'dark',
  focusRing: 'auto',
  defaultRadius: 3,
  colors: {
    primary: ['#7800ff', '#7800ff', '#7800ff', '#7800ff', '#7800ff', '#7800ff', '#7800ff', '#7800ff', '#7800ff', '#7800ff',],
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
      primary: '#25262a',
      primaryAlt: '#202225',
      bgSecondary: '#2f3136',
      bgSecondaryAlt: '#3c3f44'
    },
    textColors: {
      primary: '#73767b',
      alt: '#4a4c51',
      highlight: '#ffffff'
    },
    shadowHover: '0 2px 11px 0 #00000069',
    outline: {
      dark: '#1d1f22'
    }
  }
};

export default darkTheme;