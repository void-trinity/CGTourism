import React, { Component } from 'react';
import {
  Container,
  ListItem,
  List,
  Text,
  Content
} from 'native-base';
import { connect } from 'react-redux';
import { rgdHotFetch } from '../../../actions';

let rgdHotelList;

class RegisteredHotel extends Component {
  componentWillMount() {
    this.props.rgdHotFetch();
    this.createRgdList(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createRgdList(nextProps);
  }

  createRgdList({ rgdHot }) {
    rgdHotelList = rgdHot;
  }
  render() {
    return (
      <Container>
        <Content>
          <List
            dataArray={rgdHotelList}
            renderRow={(item) =>
              <ListItem>
                <Text>{item.name}</Text>
              </ListItem>
            }
          />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ rgdHot }) => {
  return rgdHot;
};

export default connect(mapStateToProps, { rgdHotFetch })(RegisteredHotel);
