import axios from 'axios';
import baseUrl from '../global';

export const galleryFetch = () => {
  return (dispatch) => {
    axios.get(`${baseUrl}/image_gallery/api/list`)
      .then(response => galleryFetchSuccess(dispatch, response.data))
      .catch(error => galleryFetchFailure(dispatch, error));
  };
};

const galleryFetchSuccess = (dispatch, gallery) => {
    dispatch(
      {
        type: 'gallery_fetch_success',
        payload: gallery
      }
    );
};

const galleryFetchFailure = (dispatch, error) => {
    dispatch(
      {
        type: 'hotelCity_fetch_success',
        payload: error
      }
    );
};
