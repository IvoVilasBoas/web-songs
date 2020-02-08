const reducer = (state, action) => {
  switch (action.type) {
    case 'email':
      return { ...state, email: action.payload };
    case 'name':
      return { ...state, firstName: action.payload };
    case 'password':
      return { ...state, password: action.payload };
    case 'loading':
      return { ...state, loading: action.payload };
    default:
      throw new Error();
  }
};

export default reducer;
