const INITIAL_STATE = {
  rgdTravel: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'rgdtravel_fetch_success':
        return { ...state, rgdTravel: action.payload };
      default:
        return state;
    }
};
