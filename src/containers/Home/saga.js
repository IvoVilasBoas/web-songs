import { takeLatest, put, call } from 'redux-saga/effects';

import request from 'utils/request';
import { apiPath } from 'utils/apiUtils.js';

import { getCurrentUser, getSongs } from './actions';

export function* getCurrentUserRequest() {
  const BASE_URL = `${apiPath}/users/me`;

  try {
    yield put(getCurrentUser.request());

    const getCurrentUserData = yield call(request, BASE_URL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    yield put(getCurrentUser.success(getCurrentUserData));
  } catch (err) {
    yield put(getCurrentUser.failure(err));
  } finally {
    yield put(getCurrentUser.fulfill());
  }
}

export function* getSongsRequest() {
  const BASE_URL = `${apiPath}/songs`;

  try {
    yield put(getSongs.request());

    const getSongsData = yield call(request, BASE_URL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    yield put(getSongs.success(getSongsData));
  } catch (err) {
    yield put(getSongs.failure(err));
  } finally {
    yield put(getSongs.fulfill());
  }
}

export default function* dataHome() {
  yield takeLatest(getCurrentUser.TRIGGER, getCurrentUserRequest);
  yield takeLatest(getSongs.TRIGGER, getSongsRequest);
}
