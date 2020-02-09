import { takeLatest, put, call } from 'redux-saga/effects';

import request from 'utils/request';
import { apiPath } from 'utils/apiUtils.js';

import { getCurrentUser } from './actions';

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

export default function* currentUserCases() {
  yield takeLatest(getCurrentUser.TRIGGER, getCurrentUserRequest);
}
