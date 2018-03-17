import React, { Component } from 'react';
import {
  Container,
  Header,
  Title,
  Right,
  Body,
  Content,
  List,
  ListItem,
  Button,
  Icon
} from 'native-base';
import { connect } from 'react-redux';
import PlacesCard from './PlacesCard';
import { renderPlaceList, clearPlaceList } from '../../actions';

let placesArray;

class CategoryItems extends Component {
  componentWillMount() {
    const { params } = this.props.navigation.state;
    const key = params ? params.key : null;
    this.props.clearPlaceList();
    this.props.renderPlaceList(key);
    this.makePlaceList(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.makePlaceList(nextProps);
  }

  componentWillUnmount() {
    this.props.clearPlaceList();
  }

  makePlaceList({ places }) {
    placesArray = places;
  }

  render() {
    const { params } = this.props.navigation.state;
    const category = params ? params.category : null;
    console.log(category);
    return (
      <Container>
        <Header
          style={{ backgroundColor: '#3C3C3C' }}
          androidStatusBarColor="black"
          iosBarStyle="light-content"
        >
          <Body>
            <Title style={{ paddingLeft: 10, color: 'white' }}>{category}</Title>
          </Body>
          <Right>
            <Button
              transparent
            >
              <Icon style={{ color: 'white' }} name='search' />
            </Button>
          </Right>
        </Header>
        <Content>
          <List
            dataArray={placesArray}
            renderRow={(place) =>
              <ListItem
                noBorder
                style={{ margin: 0 }}
              >
                <PlacesCard item={place} navigation={this.props.navigation} />
              </ListItem>
            }
          />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ places }) => {
  return places;
};

export default connect(mapStateToProps, { renderPlaceList, clearPlaceList })(CategoryItems);
