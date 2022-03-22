import { combineReducers } from 'redux';
import { globalModalReducer } from './GlobalModal/reducer';
import { userReducer } from './User/reducer';

export const mainReducer = combineReducers({
  user: userReducer,
  globalModal: globalModalReducer
});