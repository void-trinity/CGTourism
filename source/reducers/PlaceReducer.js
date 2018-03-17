const INITIAL_STATE = {
  places: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'render_place_list':
        return { ...state, places: action.payload };
      default:
        return state;
    }
};
