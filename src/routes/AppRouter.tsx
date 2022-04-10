import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from '../components/Nav';
import { useAuth } from '../hooks/useAuth';
import useStyles from './../components/app.styles';
import Home from '../views/Home';
import GlobalModal from '../components/GlobalModal';

interface IProps { }

const AppView: React.FC<IProps> = () => {
  const { data: user, isLoading } = useAuth();
  const { classes } = useStyles();

  if (!user && isLoading) {
    return null;
  }

  if (!user) {
    return <h1>error</h1>;
  }

  return (
    <div className={classes.app}>
      <Nav />
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
      <GlobalModal />
    </div>
  );
};

export default AppView;