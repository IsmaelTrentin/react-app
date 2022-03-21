import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const LatestPathMiddleware = () => {
  const location = useLocation();
  const user = useAuth();

  useEffect(() => {
    if (!user) return;
    const lp = location.pathname;
    const handler = () => localStorage.setItem('latestPath', lp);
    window.addEventListener('beforeunload', handler);
    return () => window.removeEventListener('beforeunload', handler);
  }, [location.pathname, user]);
  return null;
};

export default LatestPathMiddleware;