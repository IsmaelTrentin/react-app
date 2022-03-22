import { ReactNode } from 'react';
import { IGlobalModalAction } from './reducer';

export const showGlobalModal = (): IGlobalModalAction => ({
  type: 'SHOW',
  payload: {}
});

export const hideGlobalModal = (): IGlobalModalAction => ({
  type: 'HIDE',
  payload: {}
});

export const setGlobalModalVisible = (visible: boolean): IGlobalModalAction => ({
  type: 'SET_VISIBLE',
  payload: {
    visible: visible
  }
});

export const setGlobalModalChildren = (children: ReactNode): IGlobalModalAction => ({
  type: 'SET_CHILDREN',
  payload: {
    children: children
  }
});

export const setGlobalModalWithContainer = (withContainer: boolean): IGlobalModalAction => ({
  type: 'SET_WITH_CONTAINER',
  payload: {
    withContainer: withContainer
  }
});