import { takeLatest, put, call } from 'redux-saga/effects';
import request from 'utils/request';
import { apiPath } from 'utils/apiUtils.js';

import { doRegister, doLogin } from './actions';

export function* register(state) {
  console.log('SAGA Register State:', state);
  const BASE_URL = `${apiPath}/auth/register`;
  const register = state.payload;
  try {
    yield put(doRegister.request());
    const registerResults = yield call(request, BASE_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: register.email,
        name: register.name,
        password: register.password,
      }),
    });

    console.log('SAGA register - RegisterResults', registerResults);
    yield put(doRegister.success(registerResults));
  } catch (error) {
    yield put(doRegister.failure(error));
  } finally {
    yield put(doRegister.fulfill());
  }
}

export function* login(state) {
  console.log('SAGA Login State:', state);
  const BASE_URL = `${apiPath}/auth/login`;
  const login = state.payload;
  try {
    yield put(doLogin.request());
    const loginResults = yield call(request, BASE_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: login.email,
        password: login.password,
      }),
    });
    yield put(doLogin.success(loginResults));
  } catch (error) {
    yield put(doLogin.failure(error));
  } finally {
    yield put(doLogin.fulfill());
  }
}

export default function* auth() {
  yield takeLatest(doRegister.TRIGGER, register);
  yield takeLatest(doLogin.TRIGGER, login);
}
