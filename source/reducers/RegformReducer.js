const INITIAL_STATE = {
  regformList: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'regform_fetch_success':
        return { ...state, regformList: action.payload };
      default:
        return state;
    }
};