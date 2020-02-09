import { createRoutine } from 'redux-saga-routines';

import { GET_CURRENT_USER } from './constants';

export const getCurrentUser = createRoutine(GET_CURRENT_USER);
