import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { SESH_KEY } from '../util/local.storage.keys';

interface IProps { }

const UnprotectedRouter: React.FC<IProps> = () => {
  const { data: user, refetch } = useAuth();
  const onLogin = () => {
    // TODO: authorize and get sesh id
    localStorage.setItem(SESH_KEY, '1');
    refetch();
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