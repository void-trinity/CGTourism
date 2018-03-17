import { StatusBar } from 'react-native';

const React = require('react-native');

const { Platform, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
  text: {
    fontWeight: Platform.OS === 'ios' ? '500' : '400',
    fontSize: 16,
    marginLeft: 20,
    color: '#FFFFFF',
  },
  header: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#3C3C3C'
  },
  drawerCover: {
    alignSelf: 'stretch',
    height: deviceHeight / 3.5,
    width: null,
    position: 'relative',
    marginBottom: 10,
  },
  drawerImage: {
    position: 'absolute',
    left: Platform.OS === 'android' ? deviceWidth / 10 : deviceWidth / 9,
    top: Platform.OS === 'android' ? deviceHeight / 13 : deviceHeight / 12,
    width: 210,
    height: 75,
    resizeMode: 'center'
  },
};
