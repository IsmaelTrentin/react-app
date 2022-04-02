import React from 'react';
import { useDispatch } from 'react-redux';
import { useGlobalModal } from '../../hooks/useGlobalModal';
import { hideGlobalModal } from '../../reducers/GlobalModal/actions';
import Modal from '../Modal';

interface IProps { }

const GlobalModal: React.FC<IProps> = () => {
  const {
    visible,
    withContainer,
    children
  } = useGlobalModal();
  const dispatch = useDispatch();
  const handleOnClose = () => {
    dispatch(hideGlobalModal());
  };

  return (
    <Modal
      visible={visible}
      noContainer={!withContainer}
      children={children}
      onClose={handleOnClose}
    />
  );
};

export default GlobalModal;