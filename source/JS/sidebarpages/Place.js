import React, { Component } from 'react';
import {
  Container,
  Header,
  Title,
  Right,
  Body,
  Card,
  CardItem,
  Content,
  Text,
  Left,
  Icon,
  Button
} from 'native-base';
import { MapView } from 'expo';
import Slideshow from 'react-native-slideshow';
import baseUrl from '../../global';

class Place extends Component {
  returndistance() {
    const { params } = this.props.navigation.state;
    const { latitude, longitude } = params.place;
    return (`${latitude}, ${longitude}`);
  }
  render() {
    const { params } = this.props.navigation.state;
    const { name, images, description, latitude, longitude, location, reviews_place } = params.place;
     const imagelist = images.map((item) => {
       return { url: baseUrl + item };
     });
    console.log(parseInt(latitude, 10));
    return (
      <Container>
        <Header
          style={{ backgroundColor: '#3C3C3C' }}
          androidStatusBarColor="black"
          iosBarStyle="light-content"
        >
          <Body>
            <Title style={{ color: 'white', paddingLeft: 10 }}>{name}</Title>
          </Body>
          <Right>
            <Button
              transparent
            >
              <Icon style={{ color: 'white' }} name='search' />
            </Button>
          </Right>
        </Header>
        <Content
          style={{ padding: 10 }}
        >
          <Card>
            <CardItem header>
              <Text style={{ color: '#858a91', fontSize: 20, fontWeight: '100' }}>
                Photos
              </Text>
            </CardItem>
            <CardItem>
              <Left>
                <Slideshow
                  dataSource={imagelist}
                  style={{ resizeMode: 'center' }}
                />
              </Left>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left style={{ paddingLeft: 20 }}>
                <Icon name='map' style={{ fontSize: 22, color: '#858a91' }} />
                <Text style={{ paddingLeft: 10, fontSize: 16, color: '#858a91' }}>
                  {location}
                </Text>
              </Left>
            </CardItem>
            <CardItem>
              <Left style={{ paddingLeft: 20 }}>
                <Icon name='navigate' style={{ fontSize: 22, color: '#858a91' }} />
              </Left>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <Text style={{ color: '#858a91', fontSize: 20, fontWeight: '100' }}>
                Description
              </Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={{ color: '#858a91', fontSize: 14, fontWeight: '100' }}>
                  {description}
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <Text style={{ color: '#858a91', fontSize: 20, fontWeight: '100' }}>
                Map
              </Text>
            </CardItem>
            <CardItem>
              <MapView
                style={{ flex: 1, height: 300 }}
                initialRegion={{
                  latitude: Number.parseFloat(latitude),
                  longitude: Number.parseFloat(longitude),
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
              >
              <MapView.Marker
                coordinate={{
                  latitude: Number.parseFloat(latitude),
                  longitude: Number.parseFloat(longitude)
                }}
                title="My Marker"
                description="Some description"
              />
              </MapView>
            </CardItem>
          </Card>
          <Button
            full success style={{ marginBottom: 30, marginTop: 20 }}
            onPress={() => this.props.navigation.navigate('Reviews', { reviews_place, name })}
          >
            <Text>Reviews</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Place;
