const INITIAL_STATE = {
  impdocsList: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'impdocs_fetch_success':
        return { ...state, impdocsList: action.payload };
      default:
        return state;
    }
};