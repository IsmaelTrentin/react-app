import { useSelector } from 'react-redux';
import { UserState } from '../reducers/User/reducer';
import { IAppState } from '../store';

export const useAuth = () => {
  return useSelector<IAppState, UserState>(state => state.user);
};