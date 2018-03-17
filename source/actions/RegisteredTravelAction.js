import axios from 'axios';
import baseUrl from '../global';

// const travelarray = [
//   {
//     name: 'Satguru Travels',
//     address: 'Shop No. 5, C.G. Eye Hospital Complex, Telibandha Chowk, Raipur (C.G.)',
//     contactno: '4003000,9425205065',
//     email: 'satgurutravels@gmail.com'
//   },
//   {
//     name: 'Satguru Travels',
//     address: 'Shop No. 5, C.G. Eye Hospital Complex, Telibandha Chowk, Raipur (C.G.)',
//     contactno: '4003000,9425205065',
//     email: 'satgurutravels@gmail.com'
//   },
//   {
//     name: 'Satguru Travels',
//     address: 'Shop No. 5, C.G. Eye Hospital Complex, Telibandha Chowk, Raipur (C.G.)',
//     contactno: '4003000,9425205065',
//     email: 'satgurutravels@gmail.com'
//   },
//   {
//     name: 'Satguru Travels',
//     address: 'Shop No. 5, C.G. Eye Hospital Complex, Telibandha Chowk, Raipur (C.G.)',
//     contactno: '4003000,9425205065',
//     email: 'satgurutravels@gmail.com'
//   },
//   {
//     name: 'Satguru Travels',
//     address: 'Shop No. 5, C.G. Eye Hospital Complex, Telibandha Chowk, Raipur (C.G.)',
//     contactno: '4003000,9425205065',
//     email: 'satgurutravels@gmail.com'
//   },
// ];

export const rgdTravelFetch = () => {
  // return {
  //   type: 'rgdtravel_fetch_success',
  //   payload: travelarray
  // };
  return (dispatch) => {
    axios.get(`${baseUrl}/accomodations/api/registered_travel_operators/list/`)
      .then(response => rgdTravelFetchSuccess(dispatch, response.data))
      .catch(error => rgdTravelFetchFailure(dispatch, error));
  };
};

const rgdTravelFetchSuccess = (dispatch, rgdTravel) => {
    dispatch(
      {
        type: 'rgdtravel_fetch_success',
        payload: rgdTravel
      }
    );
};

const rgdTravelFetchFailure = (dispatch, error) => {
    dispatch(
      {
        type: 'rgdtravel_fetch_failure',
        payload: error
      }
    );
};
