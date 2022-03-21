import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from '../components/Nav';
import { useAuth } from '../hooks/useAuth';
import appStyles from '../app.module.scss';

interface IProps { }

const AppView: React.FC<IProps> = () => {
  const user = useAuth();

  if (!user) {
    return null;
  }

  return (
    <>
      <div className={appStyles.nav}>
        <Nav />
      </div>
      <div className={appStyles.view}>
        <Routes>
          <Route
            path="/"
            element={<div>user data: <pre>{JSON.stringify(user, null, 2)}</pre></div>}
          />
          <Route
            path="/test"
            element={<div>Test route</div>}
          />
          <Route
            path="*"
            element={<h1>404</h1>}
          />
        </Routes>
      </div>
    </>
  );
};

export default AppView;