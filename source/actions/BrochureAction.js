import axios from 'axios';
import baseUrl from '../global';

export const brochureFetch = () => {
  return (dispatch) => {
    axios.get(`${baseUrl}/downloads/api/brochure/list/`)
      .then(response => galleryFetchSuccess(dispatch, response.data))
      .catch(error => galleryFetchFailure(dispatch, error));
  };
};

const galleryFetchSuccess = (dispatch, gallery) => {
    dispatch(
      {
        type: 'brochure_fetch_success',
        payload: gallery
      }
    );
};

const galleryFetchFailure = (dispatch, error) => {
    dispatch(
      {
        type: 'brochure_fetch_success',
        payload: error
      }
    );
};
