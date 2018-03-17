import axios from 'axios';
import baseUrl from '../global';

export const regformFetch = () => {
  return (dispatch) => {
    axios.get(`${baseUrl}/downloads/api/registration_form/list/`)
      .then(response => galleryFetchSuccess(dispatch, response.data))
      .catch(error => galleryFetchFailure(dispatch, error));
  };
};

const galleryFetchSuccess = (dispatch, gallery) => {
    dispatch(
      {
        type: 'regform_fetch_success',
        payload: gallery
      }
    );
};

const galleryFetchFailure = (dispatch, error) => {
    dispatch(
      {
        type: 'regform_fetch_success',
        payload: error
      }
    );
};
