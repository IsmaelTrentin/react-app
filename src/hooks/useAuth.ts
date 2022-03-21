import { useSelector } from 'react-redux';
import { UserState } from '../providers/User/reducer';

export const useAuth = () => {
  return useSelector<UserState, UserState>((state) => state);
};