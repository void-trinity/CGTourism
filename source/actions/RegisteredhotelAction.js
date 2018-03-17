import axios from 'axios';
import baseUrl from '../global';

// const hotelarray = [
//   {
//     name: 'Hotel Baba Inn',
//     address: 'Near Navkar Hospital, Shailendra Nagar, Raipur (C.G.)',
//     contactno: 'Ph. 0771-4212121 Mo. 83570-09911',
//     email: 'info@hotelivy.in',
//     website: 'www.hotelbabainn.com'
//   },
//   {
//     name: 'Hotel Baba Inn',
//     address: 'Near Navkar Hospital, Shailendra Nagar, Raipur (C.G.)',
//     contactno: 'Ph. 0771-4212121 Mo. 83570-09911',
//     email: 'info@hotelivy.in',
//     website: 'www.hotelbabainn.com'
//   },
//   {
//     name: 'Hotel Baba Inn',
//     address: 'Near Navkar Hospital, Shailendra Nagar, Raipur (C.G.)',
//     contactno: 'Ph. 0771-4212121 Mo. 83570-09911',
//     email: 'info@hotelivy.in',
//     website: 'www.hotelbabainn.com'
//   },
//   {
//     name: 'Hotel Baba Inn',
//     address: 'Near Navkar Hospital, Shailendra Nagar, Raipur (C.G.)',
//     contactno: 'Ph. 0771-4212121 Mo. 83570-09911',
//     email: 'info@hotelivy.in',
//     website: 'www.hotelbabainn.com'
//   },
//   {
//     name: 'Hotel Baba Inn',
//     address: 'Near Navkar Hospital, Shailendra Nagar, Raipur (C.G.)',
//     contactno: 'Ph. 0771-4212121 Mo. 83570-09911',
//     email: 'info@hotelivy.in',
//     website: 'www.hotelbabainn.com'
//   },
// ];

export const rgdHotFetch = () => {
  // return {
  //   type: 'rgdhotel_fetch_success',
  //   payload: hotelarray
  // };
  return (dispatch) => {
    axios.get(`${baseUrl}/accomodations/api/registered_hotels/list/`)
      .then(response => rgdHotelFetchSuccess(dispatch, response.data))
      .catch(error => rgdHotelFetchFailure(dispatch, error));
  };
};

const rgdHotelFetchSuccess = (dispatch, category) => {
    dispatch(
      {
        type: 'rgdhotel_fetch_success',
        payload: category
      }
    );
};

const rgdHotelFetchFailure = (dispatch, error) => {
    dispatch(
      {
        type: 'rgdhotel_fetch_failure',
        payload: error
      }
    );
};
