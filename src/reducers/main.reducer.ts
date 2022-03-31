import { combineReducers } from 'redux';
import { globalModalReducer } from './GlobalModal/reducer';

export const mainReducer = combineReducers({
  globalModal: globalModalReducer
});