import { useEffect, useRef } from 'react';

export const useClickOutside = (handler: () => void) => {
  let node = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const internalHandler = (e: MouseEvent) => {
      if (!node.current) return;
      if (!node.current.contains(e.target as Node)) {
        handler();
      }
    }
    document.addEventListener('mousedown', internalHandler);
    return () => document.removeEventListener('mousedown', internalHandler);
  });
  return node;
}