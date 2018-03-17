const INITIAL_STATE = {
  brochureList: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'brochure_fetch_success':
        return { ...state, brochureList: action.payload };
      default:
        return state;
    }
};
