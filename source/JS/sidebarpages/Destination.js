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
  List,
  ListItem
} from 'native-base';
import { StatusBar, Platform } from 'react-native';
import { connect } from 'react-redux';
import CategoryCard from './CategoryCard';
import { categoryFetch } from '../../actions';

let categorylist;

class Destination extends Component {
  componentWillMount() {
    this.props.categoryFetch();
    this.createCategoryList(this.props);
  }

  componentDidMount() {
    if (Platform.OS === 'android') {
      StatusBar.setHidden(false);
      StatusBar.setTranslucent(false);
    }
  }

  componentWillReceiveProps(nextProps) {
    this.createCategoryList(nextProps);
  }

  createCategoryList({ category }) {
    categorylist = category;
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
            <Title style={{ color: 'white' }}>Destinations</Title>
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
            dataArray={categorylist}
            renderRow={(categoryitem) =>
              <ListItem noBorder>
                <CategoryCard item={categoryitem} navigation={this.props.navigation} />
              </ListItem>
            }
          />
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = ({ category }) => {
  return category;
};

export default connect(mapStateToProps, { categoryFetch })(Destination);
