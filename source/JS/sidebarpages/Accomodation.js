import React, { Component } from 'react';
import {
  Container,
  Header,
  Title,
  Left,
  Right,
  Body,
  Button,
  Icon,
  Tab,
  Tabs,
  ScrollableTab
} from 'native-base';
import { StatusBar, Platform } from 'react-native';
import Ctb from './AccomodationTabs/Ctb';
import RegisteredHotel from './AccomodationTabs/RegisteredHotel';
import RegisteredTravel from './AccomodationTabs/RegisteredTravel';
import HotelCity from './AccomodationTabs/HotelCity';
import TourCity from './AccomodationTabs/TourCity';
import Discount from './AccomodationTabs/Discount';
import Guide from './AccomodationTabs/Guide';

class Accomodation extends Component {
  componentDidMount() {
    if (Platform.OS === 'android') {
      StatusBar.setHidden(false);
      StatusBar.setTranslucent(false);
    }
  }

  render() {
    return (
      <Container>
      <Header
        hasTabs
        style={{ backgroundColor: '#3C3C3C' }}
        androidStatusBarColor="black"
        iosBarStyle="light-content"
      >
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('DrawerOpen')}
            >
              <Icon style={{ color: 'white' }} name='menu' />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: 'white' }}>Accomodation</Title>
          </Body>
          <Right>
            <Button
              transparent
            >
              <Icon style={{ color: 'white' }} name='search' />
            </Button>
          </Right>
        </Header>
        <Tabs
          renderTabBar={() => <ScrollableTab />}
        >
          <Tab
            heading="CTB Resorts"
            tabStyle={{ backgroundColor: '#3C3C3C' }}
            textStyle={{ color: '#fff' }}
            activeTabStyle={{ backgroundColor: '#3C3C3C' }}
          >
            <Ctb />
          </Tab>
          <Tab
            heading="Registered Hotels"
            tabStyle={{ backgroundColor: '#3C3C3C' }}
            textStyle={{ color: '#fff' }}
            activeTabStyle={{ backgroundColor: '#3C3C3C' }}
          >
            <RegisteredHotel />
          </Tab>
          <Tab
            heading="Registered Travel & Tour Operators"
            tabStyle={{ backgroundColor: '#3C3C3C' }}
            textStyle={{ color: '#fff' }}
            activeTabStyle={{ backgroundColor: '#3C3C3C' }}
          >
            <RegisteredTravel />
          </Tab>
          <Tab
            heading="Hotel List of Important Cities"
            tabStyle={{ backgroundColor: '#3C3C3C' }}
            textStyle={{ color: '#fff' }}
            activeTabStyle={{ backgroundColor: '#3C3C3C' }}
          >
            <HotelCity />
          </Tab>
          <Tab
            heading="Tour & Travel List of Cities"
            tabStyle={{ backgroundColor: '#3C3C3C' }}
            textStyle={{ color: '#fff' }}
            activeTabStyle={{ backgroundColor: '#3C3C3C' }}
          >
            <TourCity />
          </Tab>
          <Tab
            heading="Discount Policy"
            tabStyle={{ backgroundColor: '#3C3C3C' }}
            textStyle={{ color: '#fff' }}
            activeTabStyle={{ backgroundColor: '#3C3C3C' }}
          >
            <Discount />
          </Tab>
          <Tab
            heading="Tourist Guide Training Selection"
            tabStyle={{ backgroundColor: '#3C3C3C' }}
            textStyle={{ color: '#fff' }}
            activeTabStyle={{ backgroundColor: '#3C3C3C' }}
          >
            <Guide />
          </Tab>
        </Tabs>

      </Container>
    );
  }
}

export default Accomodation;
