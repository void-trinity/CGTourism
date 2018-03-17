import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Login from './JS/Login';
import SideBar from './JS/Sidebar';
import Home from './JS/sidebarpages/Home';
import Accomodation from './JS/sidebarpages/Accomodation';
import Contact from './JS/sidebarpages/Contact';
import Destination from './JS/sidebarpages/Destination';
import IGallery from './JS/sidebarpages/IGallery';
import Packages from './JS/sidebarpages/Packages';
import Wallpapers from './JS/sidebarpages/Wallpapers';
import CategoryItems from './JS/sidebarpages/CategoryItems';
import Place from './JS/sidebarpages/Place';
import About from './JS/sidebarpages/About';
import Profile from './JS/sidebarpages/Profile';
import Download from './JS/sidebarpages/Download';
import Reviews from './JS/sidebarpages/Reviews';

const Drawer = DrawerNavigator(
  {
    Home: { screen: Home },
    Destination: { screen: Destination },
    Accomodation: { screen: Accomodation },
    Packages: { screen: Packages },
    Wallpapers: { screen: Wallpapers },
    IGallery: { screen: IGallery },
    Contact: { screen: Contact },
    About: { screen: About },
    Profile: { screen: Profile },
    Download: { screen: Download },
  },
  {
    initialRouteName: 'Home',
    contentOptions: {
      activeTintColor: '#e91e63'
    },
    contentComponent: props => <SideBar {...props} />
  }
);

const Router = StackNavigator({
  login: { screen: Login },
  drawer: { screen: Drawer },
  categoryelements: { screen: CategoryItems },
  place: { screen: Place },
  Reviews: { screen: Reviews }
},

{
  initialRouteName: 'login',
  headerMode: 'none'
});

export default Router;
