const INITIAL_STATE = {
  ctb: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'ctb_fetch_success':
        return { ...state, ctb: action.payload };
      default:
        return state;
    }
};
