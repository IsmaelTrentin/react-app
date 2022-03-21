import React from 'react';
import { Provider } from 'react-redux';
import { userStore } from './store';

const UserProvider: React.FC<{}> = props => {
  const {
    children
  } = props;
  return (
    <Provider
      store={userStore}
    >
      {children}
    </Provider>
  );
};

export default UserProvider;