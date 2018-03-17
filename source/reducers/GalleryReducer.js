const INITIAL_STATE = {
  galleryList: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'gallery_fetch_success':
        return { ...state, galleryList: action.payload };
      default:
        return state;
    }
};
