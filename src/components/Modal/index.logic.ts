import { useCallback, useEffect } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';

const Logic = (visible: boolean, onClose?: () => void) => {
  const close = useCallback(() => {
    onClose && onClose();
  }, [onClose]);
  const ref = useClickOutside(close);
  useEffect(() => {
    const listener = (e: any) => {
      if (e.key === 'Escape' && visible) {
        close();
      }
    };
    document.addEventListener('keydown', listener);
    return () => document.removeEventListener('keydown', listener);
  }, [visible, close]);
  return { ref, close };
};

export default Logic;