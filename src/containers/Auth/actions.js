import { createRoutine } from 'redux-saga-routines';
import { DO_REGISTER, DO_LOGIN } from './constants';

export const doRegister = createRoutine(DO_REGISTER);
export const doLogin = createRoutine(DO_LOGIN);
