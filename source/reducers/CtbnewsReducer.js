const INITIAL_STATE = {
  ctbnewsList: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'ctbnews_fetch_success':
        return { ...state, ctbnewsList: action.payload };
      default:
        return state;
    }
};