import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { navigatorRef } from '../App';
import baseUrl from '../global.js';

export const loginUpdate = ({ prop, value }) => {
  return {
    type: 'login_update',
    payload: { prop, value }
  };
};

export const signInAttempt = ({ username, password }) => {
  console.log('attempting signin');
  console.log(username, password);
  console.log(baseUrl);
  return (dispatch) => {
    dispatch({ type: 'login_user' });
    axios(`${baseUrl}/user/api/retrieve/${username}/`, {
      headers: { 'Content-Type': 'application/json' },
      auth: { username, password }
    })
    .then(response => loginUserSuccess(dispatch, response.data))
    .catch(error => loginUserFail(dispatch, error));
  };
};

const loginUserSuccess = (dispatch, user) => {
  console.log(user);
  dispatch({
    type: 'login_user_success',
    payload: user
  });
  console.log('here1515');
  AsyncStorage.setItem('username', user.username);
  navigatorRef.dispatch(NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'drawer' })],
    }));
};

const loginUserFail = (dispatch, error) => {
  console.log('error', error);
  dispatch({ type: 'login_user_fail' });
};
