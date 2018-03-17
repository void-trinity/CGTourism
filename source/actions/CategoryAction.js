import axios from 'axios';
import baseUrl from '../global';

export const categoryFetch = () => {
  return (dispatch) => {
    dispatch({ type: 'category_fetch' });
    axios.get(`${baseUrl}/places/api/category/list/`)
      .then(response => categoryFetchSuccess(dispatch, response.data))
      .catch(error => categoryFetchFailure(dispatch, error));
  };
};

const categoryFetchSuccess = (dispatch, category) => {
    dispatch(
      {
        type: 'category_fetch_success',
        payload: category
      }
    );
};

const categoryFetchFailure = (dispatch, error) => {
    dispatch(
      {
        type: 'category_fetch_success',
        payload: error
      }
    );
};
