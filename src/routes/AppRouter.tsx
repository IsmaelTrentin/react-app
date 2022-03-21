import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import LatestPathMiddleware from '../middlewares/LatestPathMiddleware';
import { useDispatch } from 'react-redux'
import { setUser } from '../providers/User/actions';
import UnprotectedRouter from './UnprotectedRouter';
import ProtectedRouter from './ProtectedRouter';

interface IProps { }

const AppRouter: React.FC<IProps> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // TODO: Fetch persistent user session data
    if (localStorage.getItem('sid')) {
      dispatch(setUser({
        name: 'test_user'
      }));
    }
  }, [dispatch]);

  return (
    <Router>
      <LatestPathMiddleware />
      <UnprotectedRouter />
      <ProtectedRouter />
    </Router>
  );
};

export default AppRouter;