import { createSelector } from 'reselect';

import { initialState } from './reducer';

export const selectUseRedux = state => {
  return state.useRedux;
};

export const selectUser = () =>
  createSelector(selectUseRedux, state => {
    return state.user;
  });
export const selectCustomer = () =>
  createSelector(selectUseRedux, state => {
    return state.customer;
  });
