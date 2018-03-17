import axios from 'axios';
import baseUrl from '../global';

export const ctbnewsFetch = () => {
  return (dispatch) => {
    axios.get(`${baseUrl}/downloads/api/ctb_newsletter/list/`)
      .then(response => galleryFetchSuccess(dispatch, response.data))
      .catch(error => galleryFetchFailure(dispatch, error));
  };
};

const galleryFetchSuccess = (dispatch, gallery) => {
    dispatch(
      {
        type: 'ctbnews_fetch_success',
        payload: gallery
      }
    );
};

const galleryFetchFailure = (dispatch, error) => {
    dispatch(
      {
        type: 'ctbnews_fetch_success',
        payload: error
      }
    );
};
