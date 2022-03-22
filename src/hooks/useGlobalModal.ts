import { useSelector } from 'react-redux';
import { IGlobalModalState } from '../reducers/GlobalModal/reducer';
import { IAppState } from '../store';

export const useGlobalModal = () => {
  return useSelector<IAppState, IGlobalModalState>(state => state.globalModal);
};