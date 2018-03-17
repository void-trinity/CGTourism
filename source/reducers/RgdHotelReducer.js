const INITIAL_STATE = {
  rgdHot: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'rgdhotel_fetch_success':
        return { ...state, rgdHot: action.payload };
      default:
        return state;
    }
};
