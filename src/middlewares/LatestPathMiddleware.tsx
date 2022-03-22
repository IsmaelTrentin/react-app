import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const LatestPathMiddleware = () => {
  const location = useLocation();

  useEffect(() => {
    const lp = location.pathname;
    const handler = () => localStorage.setItem('latestPath', lp);
    window.addEventListener('beforeunload', handler);
    return () => window.removeEventListener('beforeunload', handler);
  }, [location.pathname]);
  return null;
};

export default LatestPathMiddleware;