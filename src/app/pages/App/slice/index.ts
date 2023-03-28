import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import {
  LOCAL_ACCESS_TOKEN,
  LOCAL_EXPIRES_IN,
  getLocal,
} from 'utils/localStorage';
import { appSaga } from './saga';
import { AppState } from './types';

/*
 * logined Auth用户验证
 */
function isLogined(): boolean {
  return (
    !!getLocal(LOCAL_ACCESS_TOKEN) ||
    Date.now() < Number(getLocal(LOCAL_EXPIRES_IN)) - 3600000 * 1.8
  );
}

export const initialState: AppState = {
  userFetching: false,
  userLogined: isLogined(),
  userInfo: {
    id: '',
    name: '',
  },
  messageCount: 0,
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    actionFetchUser(state) {
      state.userFetching = true;
      state.userLogined = true;
    },
    actionInitUser(state, action: PayloadAction<any>) {
      state.userInfo = action.payload;
    },
    actionChangeCount(state, action: PayloadAction<any>) {
      state.messageCount = action.payload;
    },
  },
});

export const { actions: appActions } = slice;

export const useAppSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: appSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useAppSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
