import { useCallback, useState } from 'react';
import { useIsMounted } from './useIsMounted';

export const useModal = () => {
  const [visible, setIsVisible] = useState<boolean>(false);
  const isMounted = useIsMounted();
  const hideModal = useCallback(() => isMounted.current && setIsVisible(false), [isMounted]);
  const showModal = useCallback(() => isMounted.current && setIsVisible(true), [isMounted]);
  return { visible, setIsVisible, hideModal, showModal };
}