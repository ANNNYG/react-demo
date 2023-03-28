import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.app || initialState;

export const selectApp = createSelector([selectSlice], state => state);

export const selectUserInfo = createSelector(
  [selectApp],
  appState => appState.userInfo,
);

export const selectLogined = createSelector(
  [selectApp],
  appState => appState.userLogined,
);

export const selectMessageCount = createSelector(
  [selectApp],
  appState => appState.messageCount,
);
