import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { ContainerState } from './types';
import { newSliceSaga } from './saga';

// The initial state of the NewSlice container
export const initialState: ContainerState = {
  count: 0,
};

const slice = createSlice({
  name: 'newSlice',
  initialState,
  reducers: {
    actionAdd(state) {
      state.count = state.count + 1;
    },
    actionDel(state) {
      state.count = state.count - 1;
    },
    actionSet(state, action: PayloadAction<any>) {
      state.count = action.payload;
    },
  },
});

export const { actions: newSliceActions, reducer, name: sliceKey } = slice;

export const useNewSliceSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: newSliceSaga });
  return { actions: slice.actions };
};
