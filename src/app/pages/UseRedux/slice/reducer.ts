import { createSlice } from 'utils/@reduxjs/toolkit';
import { fromJS } from 'immutable';

import { useInjectReducer } from 'utils/redux-injectors';

export const initialState = {
  user: { name: 'Kobe', height: 190, id: 24 },
  customer: { name: 'Tom', height: 170, id: 1 },
};

const slice = createSlice({
  name: 'useRedux',
  initialState,
  reducers: {
    actionUser(state, { payload }) {
      state.user = payload;
    },
  },
});

export const { actions: useReduxAction } = slice;

console.log(slice, 'slice', slice.getInitialState());

export const useSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};
