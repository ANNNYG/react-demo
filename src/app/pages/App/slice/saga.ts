import { fork, call, takeLatest, all, put, select } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { apiFetchUserInfo } from './api';
import { appActions } from './index';
import { UserInfoState } from './types';
import { selectLogined } from './selectors';

export const CHANGE_COUNT = 'app/change_count';

function isAllow(): boolean {
  const NO_AUTH_URL = ['/uacsuc', '/login'];
  const { pathname } = window.location;
  return NO_AUTH_URL.includes(pathname);
}

function* fetchUserInfoWatcher() {
  const userLogined = yield select(selectLogined);
  if (isAllow() || !userLogined) return;
  yield all([call(fetchUserInfoSaga)]);
}

export function* fetchUserInfoSaga() {
  try {
    const { data } = yield call(apiFetchUserInfo);
    const info: UserInfoState = {
      id: data.id,
      name: data.name || data.email,
    };
    yield put(appActions.actionInitUser(info));
  } catch (error) {
    console.error(error);
  }
}

export function* messageCountSaga(count: PayloadAction<any>) {
  console.log('messageCountSaga', count);
  yield put(appActions.actionChangeCount(count.payload));
}

export function* appSaga() {
  yield fork(fetchUserInfoWatcher);
  yield takeLatest(appActions.actionFetchUser.type, fetchUserInfoSaga); // 监听slice重点额action
  yield takeLatest(CHANGE_COUNT as any, messageCountSaga); // 监听页面通过createAction发起的saga
}
