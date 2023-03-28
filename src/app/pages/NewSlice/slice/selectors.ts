import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectDomain = (state: RootState) => state.newSlice || initialState;

export const selectNewSlice = createSelector(
  [selectDomain],
  newSliceState => newSliceState,
);
