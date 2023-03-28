import { put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { newSliceActions as actions } from '.';

import * as cons from './constants';

// export function* doSomething() {}

export function* countSaga(count: PayloadAction<any>) {
  console.log('countSaga', count);
  yield put(actions.actionSet(count.payload));
}

export function* newSliceSaga() {
  yield takeLatest(cons.SET_COUNT as any, countSaga); // 监听页面通过createAction发起的saga
}
