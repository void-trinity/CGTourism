import Router from '../Router';

const NavReducer = (state, action) => {
    const newState = Router.router.getStateForAction(action, state);
    return newState || state;
};

export default NavReducer;
