import React from 'react';
import { Route, Routes } from 'react-router';
import { useAuth } from '../hooks/useAuth';
import AppView from './AppView';

const ProtectedRouter = () => {
  const user = useAuth();

  return (
    <>
      {user && (
        <Routes>
          {/* Manages all views that need auth */}
          <Route path="*" element={<AppView />} />
        </Routes>
      )}
    </>
  )
};

export default ProtectedRouter;