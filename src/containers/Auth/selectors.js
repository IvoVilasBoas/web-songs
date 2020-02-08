import { createSelector } from 'reselect';

import { initialState } from './reducer';

const selectAuthRegister = () => createSelector(selectAuthDomain, subState => subState);
const selectAuthLogin = () => createSelector(selectAuthDomain, subState => subState);

const selectAuthDomain = state => state.auth || initialState;

export { selectAuthRegister, selectAuthLogin, selectAuthDomain };
