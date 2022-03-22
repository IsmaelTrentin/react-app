import { IUser } from '../../@types';
import { IUserAction } from './reducer';

export const setUser = (user: IUser): IUserAction => {
  return ({
    type: 'SET',
    payload: user
  })
};

export const updateName = (newName: string): IUserAction => ({
  type: 'UPDATE_NAME',
  payload: {
    name: newName
  }
});