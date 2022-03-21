import { IUser } from '../../@types';

export type UserState = IUser | null;
export type UserActions =
  'UPDATE_NAME'
  | 'SET';
export interface IUserAction {
  type: UserActions;
  payload: IUser;
};

const initalState: UserState = null

export const userReducer = (state: UserState = initalState, action: IUserAction): UserState => {
  const { type, payload } = action;
  switch (type) {
    case 'SET':
      return { ...action.payload };
    case 'UPDATE_NAME':
      if (!payload) {
        console.error('NO PAYLOAD ERROR');
        return state ? { ...state } : null;
      }
      return { ...state, name: payload.name };
    default:
      return state;
  }
};