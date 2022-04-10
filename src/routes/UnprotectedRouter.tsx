import Login from './../views/Login';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface IProps { }

const UnprotectedRouter: React.FC<IProps> = () => {
  const { data: user } = useAuth();

  return (
    <>
      {!user && (
        <Routes>
          {/* Manages all views that DO NOT need auth */}
          <Route path="*" element={<Login />} />
          <Route path="/register" element={<div>REGISTER PAGE</div>} />
        </Routes>
      )}
    </>
  );
};

export default UnprotectedRouter;