const INITIAL_STATE = {
  publicationsList: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'publications_fetch_success':
        return { ...state, publicationsList: action.payload };
      default:
        return state;
    }
};
