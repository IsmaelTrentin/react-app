import { createStore } from 'redux';
import { IUser } from './@types';
import { IGlobalModalState } from './reducers/GlobalModal/reducer';
import { mainReducer } from './reducers/main.reducer';

export interface IAppState {
  user: IUser | null;
  globalModal: IGlobalModalState;
}

export const appStore = createStore(mainReducer);