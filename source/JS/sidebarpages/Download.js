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
import { StatusBar, View, Platform } from 'react-native';
import Brochure from './DownloadTabs/Brochure';
import CtbNewsletter from './DownloadTabs/CtbNewsletter';
import Publications from './DownloadTabs/Publications';
import RegForm from './DownloadTabs/RegForm';

class Download extends Component {
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
            heading="Brochure"
            tabStyle={{ backgroundColor: '#3C3C3C' }}
            textStyle={{ color: '#fff' }}
            activeTabStyle={{ backgroundColor: '#3C3C3C' }}
          >
            <Brochure />
          </Tab>
          <Tab
            heading="Publication"
            tabStyle={{ backgroundColor: '#3C3C3C' }}
            textStyle={{ color: '#fff' }}
            activeTabStyle={{ backgroundColor: '#3C3C3C' }}
          >
            <Publications />
          </Tab>
          <Tab
            heading="Registration Form"
            tabStyle={{ backgroundColor: '#3C3C3C' }}
            textStyle={{ color: '#fff' }}
            activeTabStyle={{ backgroundColor: '#3C3C3C' }}
          >
            <RegForm />
          </Tab>
          <Tab
            heading="CTB Newsletter"
            tabStyle={{ backgroundColor: '#3C3C3C' }}
            textStyle={{ color: '#fff' }}
            activeTabStyle={{ backgroundColor: '#3C3C3C' }}
          >
            <CtbNewsletter />
          </Tab>
          <Tab
            heading="Important Docs"
            tabStyle={{ backgroundColor: '#3C3C3C' }}
            textStyle={{ color: '#fff' }}
            activeTabStyle={{ backgroundColor: '#3C3C3C' }}
          >
            <View />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default Download;
