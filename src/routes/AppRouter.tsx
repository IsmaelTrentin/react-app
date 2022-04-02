import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from '../components/Nav';
import { useAuth } from '../hooks/useAuth';
// import appStyles from './../components/app.module.scss';
import Home from '../views/Home';

interface IProps { }

const AppView: React.FC<IProps> = () => {
  const { data: user, isLoading } = useAuth();
  const classes = { view: '' };

  if (!user && isLoading) {
    return null;
  }

  if (!user) {
    return <h1>error</h1>;
  }

  return (
    <>
      <div>
        <Nav />
      </div>
      <div className={classes.view}>
        <Routes>
          <Route
            path="/"
            element={<Home />}
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