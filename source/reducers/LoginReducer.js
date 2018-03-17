const INITIAL_STATE = {
    username: '',
    password: '',
    user: null,
    loading: false,
    error: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'login_update':
        return { ...state, [action.payload.prop]: action.payload.value };
      case 'login_user':
        return { ...state, loading: true, error: false };
      case 'login_user_success':
        return { ...state, ...INITIAL_STATE, user: action.payload };
      case 'login_user_fail':
        return { ...state, error: true, password: '', username: '', loading: false };
      default:
        return state;
    }
};
