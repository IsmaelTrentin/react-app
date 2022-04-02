import { Global } from '@mantine/core';
import React from 'react';
import font from './public/fonts/CircularStd-Book.ttf';

interface IProps { }

const GlobalStyles: React.FC<IProps> = () => {

  return (
    <Global
      styles={(theme) => ([
        {
          '@font-face': {
            fontFamily: 'Circular Std',
            src: `url(${font}) format("truetype")`,
            fontWeight: 200,
            fontStyle: 'normal'
          },
        },
        {
          '*': {
            margin: 0,
            padding: 0,
            fontFamily: "'Circular Std', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale'
          },
          html: {
            width: '100%',
            height: '100%',
            fontSize: '16px',
            backgroundColor: theme.other.bgColors.primary
          },
          body: {
            ...theme.fn.fontStyles(),
            width: '100vw',
            height: '100vh',
            overflow: 'hidden'
          },
          '#root': {
            width: '100%',
            height: '100vh'
          },
          a: {
            textDecoration: 'none',
            '&:active': {
              textDecoration: 'none'
            }
          },
          'p, span, div, pre': {
            color: theme.other.textColors.primary
          }
        }
      ])}
    />
  );
};

export default GlobalStyles;