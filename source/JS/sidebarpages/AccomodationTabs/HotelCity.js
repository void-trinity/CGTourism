import React, { Component } from 'react';
import {
  Container,
  ListItem,
  List,
  Text,
  Content
} from 'native-base';
import { TouchableOpacity, Linking } from 'react-native';
import { connect } from 'react-redux';
import { hotelCityFetch } from '../../../actions';

let hotelCityList;

class HotelCity extends Component {
  componentWillMount() {
    this.props.hotelCityFetch();
    this.createRgdList(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createRgdList(nextProps);
  }

  createRgdList({ hotelCity }) {
    hotelCityList = hotelCity;
  }
  render() {
    return (
      <Container>
        <Content>
          <List
            dataArray={hotelCityList}
            renderRow={(item) =>
                <ListItem>
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => Linking.openURL(item.pdf)}
                  >
                    <Text style={{ flex: 1, marginRight: 'auto' }}>{item.city_name}</Text>
                  </TouchableOpacity>
                </ListItem>
            }
          />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ hotelCity }) => {
  return hotelCity;
};

export default connect(mapStateToProps, { hotelCityFetch })(HotelCity);
