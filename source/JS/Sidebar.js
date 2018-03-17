import React, { Component } from 'react';
import {
  Content,
  Text,
  Container,
  Left,
  List,
  ListItem
} from 'native-base';
import { Image, View } from 'react-native';
import styles from './style';

const datas = [
  {
    name: 'Home',
    bg: '#C5F442',
    route: 'Home'
  },
  {
    name: 'Destinations',
    bg: '#C5F442',
    route: 'Destination'
  },
  {
    name: 'Accomodation',
    bg: '#C5F442',
    route: 'Accomodation'
  },
  {
    name: 'Tour Packages',
    bg: '#C5F442',
    route: 'Packages'
  },
  {
    name: 'Wallpapers',
    bg: '#C5F442',
    route: 'Wallpapers'
  },
  {
    name: 'Image Gallery',
    bg: '#C5F442',
    route: 'IGallery'
  },
  {
    name: 'Contact Us',
    bg: '#C5F442',
    route: 'Contact'
  },
  {
    name: 'About Us',
    bg: '#C5F442',
    route: 'About'
  },
  {
    name: 'Profile',
    bg: '#C5F442',
    route: 'Profile'
  },
  {
    name: 'Downloads',
    bg: '#C5F442',
    route: 'Download'
  }
];

const drawerCover = require('../BG/cgtlogo.png');
const drawerImage = require('../BG/cgtlogo.png');

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: '#3C3C3C', top: -1 }}
        >
          <View source={drawerCover} style={[styles.drawerCover, { backgroundColor: 'yellow' }]} />
          <Image square style={styles.drawerImage} source={drawerImage} />
          <List
            dataArray={datas}
            renderRow={data =>
            <ListItem
              button
              noBorder
              onPress={() => this.props.navigation.navigate(data.route)}
            >
              <Left>
                <Text style={styles.text}>
                  {data.name}
                </Text>
              </Left>
            </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
