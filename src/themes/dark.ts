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
      secondary: '#2f3136',
      secondaryAlt: '#3c3f44'
    },
    textColors: {
      primary: '#73767b',
      alt: '#4a4c51',
      highlight: '#ffffff'
    },
    shadows: {
      default: '5px 5px 0 0 #7800ffff, 10px 10px 0 0 #00000022',
      hover: '8px 8px 0 0 #7800ffff, 16px 16px 0 0 #00000022',
      active: '11px 11px 0 0 #7800ffff, 22px 22px 0 0 #00000011'
    },
    shadowHover: '0 2px 11px 0 #00000069',
    outline: {
      dark: '#1d1f22'
    }
  }
};

export default darkTheme;