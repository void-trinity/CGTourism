const INITIAL_STATE = {
  category: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'category_fetch_success':
        return { ...state, category: action.payload };
      default:
        return state;
    }
};
