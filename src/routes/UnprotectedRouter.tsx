import React from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { setUser } from '../reducers/User/actions';

interface IProps { }

const UnprotectedRouter: React.FC<IProps> = () => {
  const user = useAuth();
  const dispatch = useDispatch();
  const onLogin = () => {
    // TODO: Fetch user data
    const mockFetch = {
      name: 'test_user'
    };
    dispatch(setUser(mockFetch));
    localStorage.setItem('sid', '1');
  };

  return (
    <>
      {!user && (
        <Routes>
          {/* Manages all views that DO NOT need auth */}
          <Route path="*" element={<div onClick={onLogin}>LOGIN PAGE</div>} />
          <Route path="/register" element={<div>REGISTER PAGE</div>} />
        </Routes>
      )}
    </>
  );
};

export default UnprotectedRouter;