import React, { Component } from 'react';
import {
  Card,
  CardItem,
  Body,
  Text,
  Left,
} from 'native-base';
import {
  Image,
  TouchableOpacity,
} from 'react-native';
import baseUrl from '../../global';

class PlacesCard extends Component {
  openPlace() {
      const place = this.props.item;
      this.props.navigation.navigate('place', { place });
  }

  render() {
    const { images, name, location } = this.props.item;
    console.log(name);
    console.log(images[0]);
    return (
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={this.openPlace.bind(this)}
      >
        <Card
          style={{ margin: 'auto', flex: 0 }}
        >
          <CardItem>
            <Left>
              <Image
                source={{ uri: `${baseUrl}${images[0]}/` }}
                style={styles.image}
              />
            </Left>
            <Body>
              <Text
                style={styles.header}
              >
                {name}
              </Text>
              <Text
                style={styles.locationtext}
              >
                {location}
              </Text>
            </Body>
          </CardItem>
        </Card>
      </TouchableOpacity>
    );
  }
}

const styles = {
  image: {
    height: 100,
    width: 100,
    backgroundColor: '#abacad'
  },
  header: {
    fontSize: 20,
    fontWeight: '500',
  },
  locationtext: {
    fontSize: 12,
    marginTop: 'auto'
  }
};

export default PlacesCard;
