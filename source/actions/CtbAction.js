import axios from 'axios';
import baseUrl from '../global';

export const ctbFetch = () => {
  return (dispatch) => {
    axios.get(`${baseUrl}/accomodations/api/cbt_resorts/list/`)
      .then(response => ctbFetchSuccess(dispatch, response.data))
      .catch(error => ctbFetchFailure(dispatch, error));
  };
};

const ctbFetchSuccess = (dispatch, category) => {
    dispatch(
      {
        type: 'ctb_fetch_success',
        payload: category
      }
    );
};

const ctbFetchFailure = (dispatch, error) => {
    dispatch(
      {
        type: 'ctb_fetch_success',
        payload: error
      }
    );
};
