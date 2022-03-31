import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import LatestPathMiddleware from '../middlewares/LatestPathMiddleware';
import UnprotectedRouter from './UnprotectedRouter';
import ProtectedRouter from './ProtectedRouter';

interface IProps { }

const AppRouter: React.FC<IProps> = () => {

  return (
    <Router>
      <LatestPathMiddleware />
      <UnprotectedRouter />
      <ProtectedRouter />
    </Router>
  );
};

export default AppRouter;