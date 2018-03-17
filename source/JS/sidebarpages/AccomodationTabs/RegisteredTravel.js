import React, { Component } from 'react';
import {
  Container,
  ListItem,
  List,
  Text,
  Content
} from 'native-base';
import { connect } from 'react-redux';
import { rgdTravelFetch } from '../../../actions';

let rgdTravelList;

class RegisteredTravel extends Component {
  componentWillMount() {
    this.props.rgdTravelFetch();
    this.createRgdList(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createRgdList(nextProps);
  }

  createRgdList({ rgdTravel }) {
    rgdTravelList = rgdTravel;
  }
  render() {
    return (
      <Container>
        <Content>
          <List
            dataArray={rgdTravelList}
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

const mapStateToProps = ({ rgdTravel }) => {
  return rgdTravel;
};

export default connect(mapStateToProps, { rgdTravelFetch })(RegisteredTravel);
