import { doRegister, doLogin } from './actions';

export const initialState = {
  loading: false,
  error: false,
  payload: false,
  type: '',
  registerResults: [],
  loginResults: [],
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case doRegister.REQUEST:
      return { ...state, loading: true, error: false };
    case doRegister.SUCCESS:
      return { ...state, loading: false, error: false, registerResults: payload };
    case doRegister.FAILURE:
      return { ...state, loading: false, error: payload };
    case doLogin.REQUEST:
      return { ...state, loading: true, error: false };
    case doLogin.SUCCESS:
      return { ...state, loading: false, error: false, loginResults: payload };
    case doLogin.FAILURE:
      return { ...state, loading: false, error: !payload ? '410' : payload };
    default:
      return state;
  }
};

export default authReducer;
