const INITIAL_STATE = {
  hotelCity: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'hotelCity_fetch_success':
        return { ...state, hotelCity: action.payload };
      default:
        return state;
    }
};
