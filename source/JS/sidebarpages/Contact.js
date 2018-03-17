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
  Content,
  Card,
  CardItem,
  Text
} from 'native-base';
import { StatusBar, Linking, Platform } from 'react-native';
import { MapView } from 'expo';

class Contact extends Component {
  componentDidMount() {
    if (Platform.OS === 'android') {
      StatusBar.setHidden(false);
      StatusBar.setTranslucent(false);
    }
  }

  openURL() {
    Linking.openURL('http://cgtourism.choice.gov.in/contact/tourist-information-center');
  }

  render() {
    return (
      <Container>
        <Header
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
            <Title style={{ color: 'white' }}>Contact Us</Title>
          </Body>
          <Right>
            <Button
              transparent
            >
              <Icon style={{ color: 'white' }} name='search' />
            </Button>
          </Right>
        </Header>
        <Content style={{ padding: 10 }}>
          <Card>
            <CardItem header>
              <Left>
                <Text style={{ fontSize: 18, fontWeight: '500' }}>CHHATTISGARH TOURISM BOARD</Text>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                <Icon name='compass' />
                <Text style={{ padding: 10, paddingBottom: 0 }}>
                  2nd Floor, Udyog Bhavan, Ring Road No.1, Telibandha, RAIPUR – 492 006 (C.G.)
                </Text>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                <Icon name='call' />
                <Text style={{ padding: 10 }}>
                  +91 771 4224600
                </Text>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                <Icon name='phone-portrait' />
                <Text style={{ padding: 10, paddingLeft: 17 }}>
                  1800 102 6415
                </Text>
              </Left>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <MapView
                style={{ flex: 1, height: 300 }}
                initialRegion={{
                  latitude: 21.2334451,
                  longitude: 81.6639371,
                  latitudeDelta: 0.02,
                  longitudeDelta: 0.01,
                }}
              >
              <MapView.Marker
                coordinate={{
                  latitude: 21.2334451,
                  longitude: 81.6639371
                }}
                title="Chhattisgarh Tourism Board"
                description="Office"
              />
              </MapView>
            </CardItem>
          </Card>
          <Button
            full success style={{ marginBottom: 30, marginTop: 20 }}
            onPress={() => this.openURL()}
          >
            <Text>Tourist Information Center</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Contact;
