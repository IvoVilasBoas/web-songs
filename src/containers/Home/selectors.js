import { createSelector } from 'reselect';

import { initialState } from './reducer';

const selectSongsDomain = state => state.home || initialState;

const selectCurrentUser = () => createSelector(selectSongsDomain, subState => subState);
const selectSongs = () => createSelector(selectSongsDomain, subState => subState);
export { selectCurrentUser, selectSongs, selectSongsDomain };
