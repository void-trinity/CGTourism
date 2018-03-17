import React, { Component } from 'react';
import { Image, Dimensions, TouchableOpacity } from 'react-native';
import axios from 'axios';
import {
  Card,
  CardItem,
  Title,
  List,
  ListItem,
  Body
} from 'native-base';
import baseUrl from '../../global';

class MajorAttractions extends Component {
  constructor(props) {
    super(props);
    this.state = { MajorAttractions: [] };
  }

  componentWillMount() {
    axios(`${baseUrl}/places/api/list/major_attraction`)
    .then(response => this.setState({ MajorAttractions: response.data }));
  }

  openPlace(place) {
      this.props.navigation.navigate('place', { place });
  }

  render() {
    return (
      <Card
        style={{ flex: 1 }}
      >
      <CardItem body>
        <Body>
          <Title style={{ fontSize: 18, color: 'black', fontWeight: '100' }}>Major Attractions</Title>
        </Body>
      </CardItem>
      <List
        horizontal
        dataArray={this.state.MajorAttractions}
        renderRow={(place) =>
          <ListItem
            noBorder
            style={{ margin: 0 }}
          >
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => this.openPlace(place)}
            >
              <Card
                style={{ flex: 1, width: Dimensions.get('window').width - 20 }}
              >
                <CardItem header>
                  <Title style={{ fontSize: 14, color: '#8a8f96', fontWeight: '100' }}>{place.name}</Title>
                </CardItem>
                <CardItem>
                  <Image source={{ uri: baseUrl + place.images[0] }} style={{ height: 200, width: null, flex: 1, }} />
                </CardItem>
              </Card>
            </TouchableOpacity>
          </ListItem>
        }
      />
      </Card>
    );
  }
}

export default MajorAttractions;
