import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import NavReducer from './NavReducer';
import CategoryReducer from './CategoryReducer';
import PlaceReducer from './PlaceReducer';
import CtbReducer from './CtbReducer';
import RgdHotelReducer from './RgdHotelReducer';
import RgdTravelReducer from './RgdTravelReducer';
import HotelCityReducer from './HotelCityReducer';
import GalleryReducer from './GalleryReducer';
import BrochureReducer from './BrochureReducer';
import CtbnewsReducer from './CtbnewsReducer';
import impdocsReducer from './impdocsReducer';
import PublicationsReducer from './PublicationsReducer';
import RegformReducer from './RegformReducer';

export default combineReducers({
  login: LoginReducer,
  nav: NavReducer,
  category: CategoryReducer,
  places: PlaceReducer,
  ctb: CtbReducer,
  rgdHot: RgdHotelReducer,
  rgdTravel: RgdTravelReducer,
  hotelCity: HotelCityReducer,
  galleryList: GalleryReducer,
  brochureList: BrochureReducer,
  ctbnewsList: CtbnewsReducer,
  impdocsList: impdocsReducer,
  publicationsList: PublicationsReducer,
  regformList: RegformReducer
});
