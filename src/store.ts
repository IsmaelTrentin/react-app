import { createStore } from 'redux';
import { IGlobalModalState } from './reducers/GlobalModal/reducer';
import { mainReducer } from './reducers/main.reducer';

export interface IAppState {
  globalModal: IGlobalModalState;
}

export const appStore = createStore(mainReducer);