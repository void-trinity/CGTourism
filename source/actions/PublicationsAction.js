import axios from 'axios';
import baseUrl from '../global';

export const publicationsFetch = () => {
  return (dispatch) => {
    axios.get(`${baseUrl}/downloads/api/publication/list/`)
      .then(response => galleryFetchSuccess(dispatch, response.data))
      .catch(error => galleryFetchFailure(dispatch, error));
  };
};

const galleryFetchSuccess = (dispatch, gallery) => {
    dispatch(
      {
        type: 'publications_fetch_success',
        payload: gallery
      }
    );
};

const galleryFetchFailure = (dispatch, error) => {
    dispatch(
      {
        type: 'publications_fetch_success',
        payload: error
      }
    );
};
