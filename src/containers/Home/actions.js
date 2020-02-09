import { createRoutine } from 'redux-saga-routines';

import { GET_CURRENT_USER, GET_SONGS } from './constants';

export const getCurrentUser = createRoutine(GET_CURRENT_USER);
export const getSongs = createRoutine(GET_SONGS);
