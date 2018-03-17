import axios from 'axios';
import baseUrl from '../global';

export const impdocsFetch = () => {
  return (dispatch) => {
    axios.get(`${baseUrl}/downloads/api/important_document/list/`)
      .then(response => galleryFetchSuccess(dispatch, response.data))
      .catch(error => galleryFetchFailure(dispatch, error));
  };
};

const galleryFetchSuccess = (dispatch, gallery) => {
    dispatch(
      {
        type: 'impdocs_fetch_success',
        payload: gallery
      }
    );
};

const galleryFetchFailure = (dispatch, error) => {
    dispatch(
      {
        type: 'impdocs_fetch_success',
        payload: error
      }
    );
};
