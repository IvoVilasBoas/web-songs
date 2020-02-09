import { getCurrentUser, getSongs } from './actions';

export const initialState = {
  loading: false,
  fetched: false,
  error: null,
  currentUser: [],
  songsResults: [],
};

const currentUserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case getCurrentUser.REQUEST:
      return { ...state, loading: true, error: false };
    case getCurrentUser.SUCCESS:
      return { ...state, loading: false, error: false, currentUser: payload };
    case getCurrentUser.FAILURE:
      return { ...state, loading: false, error: payload };

    case getSongs.REQUEST:
      return { ...state, loading: true, error: false };
    case getSongs.SUCCESS:
      return { ...state, loading: false, error: false, songsResults: payload };
    case getSongs.FAILURE:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

export default currentUserReducer;
