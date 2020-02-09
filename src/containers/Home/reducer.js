import { getCurrentUser } from './actions';

export const initialState = {
  loading: false,
  fetched: false,
  error: null,
  currentUser: [],
};

const currentUserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case getCurrentUser.REQUEST:
      return { ...state, loading: true, error: false };
    case getCurrentUser.SUCCESS:
      return { ...state, loading: false, error: false, currentUser: payload };
    case getCurrentUser.FAILURE:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

export default currentUserReducer;
