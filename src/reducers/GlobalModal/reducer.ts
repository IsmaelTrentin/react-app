import { ReactNode } from 'react';

export interface IGlobalModalState {
  visible: boolean;
  children: ReactNode;
  withContainer: boolean;
}
export type GlobalModalActions =
  'SHOW'
  | 'HIDE'
  | 'SET_VISIBLE'
  | 'SET_CHILDREN'
  | 'SET_WITH_CONTAINER';
export interface IGlobalModalAction {
  type: GlobalModalActions;
  payload: Partial<IGlobalModalState>;
};

const initalState: IGlobalModalState = {
  children: null,
  visible: false,
  withContainer: true
};

export const globalModalReducer = (state: IGlobalModalState = initalState, action: IGlobalModalAction): IGlobalModalState => {
  const { type, payload } = action;
  switch (type) {
    case 'SHOW':
      return { ...state, visible: true };
    case 'HIDE':
      return { ...state, visible: false };
    case 'SET_CHILDREN':
      return { ...state, children: payload.children };
    case 'SET_VISIBLE':
      console.log('setting to visible');
      return payload.visible != null
        ? { ...state, visible: payload.visible }
        : { ...state };
    case 'SET_WITH_CONTAINER':
      return payload.withContainer != null
        ? { ...state, withContainer: payload.withContainer }
        : { ...state };
    default:
      return state;
  }
};