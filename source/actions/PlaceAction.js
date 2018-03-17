import axios from 'axios';
import baseUrl from '../global';

let placesArray;

export const renderPlaceList = (key) => {
  return (dispatch) => {
    axios(`${baseUrl}/places/api/list/${key}/`)
    .then(response => renderSuccess(dispatch, response.data))
    .catch(error => console.log(error));
    console.log(placesArray);
  };
};

export const clearPlaceList = () => {
  return {
    type: 'render_place_list',
    payload: {}
  };
};

const renderSuccess = (dispatch, places) => {
  console.log(places);
  dispatch({
    type: 'render_place_list',
    payload: places
  });
};
