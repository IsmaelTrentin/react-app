import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { appStore } from './store';
import { MantineProvider } from '@mantine/core';
import darkTheme from './themes/dark';
import whiteTheme from './themes/white';
import GlobalStyles from './GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <MantineProvider theme={whiteTheme}>
        <GlobalStyles />
        <App />
      </MantineProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();