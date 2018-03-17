import axios from 'axios';
import baseUrl from '../global';

export const hotelCityFetch = () => {
  return (dispatch) => {
    axios.get(`${baseUrl}/accomodations/api/city_hotel/list/`)
      .then(response => hotelCityFetchSuccess(dispatch, response.data))
      .catch(error => hotelCityFetchFailure(dispatch, error));
  };
};

const hotelCityFetchSuccess = (dispatch, category) => {
    dispatch(
      {
        type: 'hotelCity_fetch_success',
        payload: category
      }
    );
};

const hotelCityFetchFailure = (dispatch, error) => {
    dispatch(
      {
        type: 'hotelCity_fetch_success',
        payload: error
      }
    );
};
