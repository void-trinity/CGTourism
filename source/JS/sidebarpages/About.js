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
  Card,
  CardItem,
  Text,
  Content
} from 'native-base';
import { StatusBar, Platform, Image } from 'react-native';

class Home extends Component {
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
            <Title style={{ color: 'white' }}>About Us</Title>
          </Body>
          <Right>
            <Button
              transparent
            >
              <Icon style={{ color: 'white' }} name='search' />
            </Button>
          </Right>
        </Header>
        <Content style={{ paddingHorizontal: 10 }}>
          <Card>
            <CardItem cardBody>
              <Image
                source={require('../../BG/raman.jpg')} style={{ height: 300, width: null, flex: 1, resizeMode: 'cover' }}
              />
            </CardItem>
            <CardItem>
                <Text
                  style={{ fontWeight: '500', fontSize: 18 }}
                >
                  DR. RAMAN SINGH
                </Text>
            </CardItem>
            <CardItem>
              <Text
                style={{ fontSize: 14 }}
              >
              Honourable Chief Minister, Chhattisgarh
              </Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem cardBody>
              <Image
                source={require('../../BG/dayaldas.jpg')} style={{ height: 300, width: null, flex: 1, resizeMode: 'cover' }}
              />
            </CardItem>
            <CardItem>
                <Text
                  style={{ fontWeight: '500', fontSize: 18 }}
                >
                  SHRI DAYALDAS BAGHEL
                </Text>
            </CardItem>
            <CardItem>
              <Text
                style={{ fontSize: 14 }}
              >
              Honourable Tourism Minister, Chhattisgarh
              </Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem cardBody>
              <Image
                source={require('../../BG/santosh.jpg')} style={{ height: 300, width: null, flex: 1, resizeMode: 'cover' }}
              />
            </CardItem>
            <CardItem>
                <Text
                  style={{ fontWeight: '500', fontSize: 18 }}
                >
                  SHRI SANTOSH BAFNA
                </Text>
            </CardItem>
            <CardItem>
              <Text
                style={{ fontSize: 14 }}
              >
              Honourable Chairman, Chhattisgarh Tourism Board
              </Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem cardBody>
              <Image
                source={require('../../BG/kedar.jpg')} style={{ height: 300, width: null, flex: 1, resizeMode: 'cover' }}
              />
            </CardItem>
            <CardItem>
                <Text
                  style={{ fontWeight: '500', fontSize: 18 }}
                >
                  SHRI KEDAR NATH GUPTA
                </Text>
            </CardItem>
            <CardItem>
              <Text
                style={{ fontSize: 14 }}
              >
              Honourable Vice Chairman, Chhattisgarh Tourism Board
              </Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default Home;
