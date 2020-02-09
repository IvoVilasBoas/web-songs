import { createSelector } from 'reselect';

import { initialState } from './reducer';

const selectShowcasesDomain = state => state.showcases || initialState;
const selectCurrentUserDomain = state => state.currentUser || initialState;

const selectShowcases = () => createSelector(selectShowcasesDomain, subState => subState);
const selectCurrentUser = () => createSelector(selectCurrentUserDomain, subState => subState);

export { selectShowcases, selectShowcasesDomain, selectCurrentUser, selectCurrentUserDomain };
