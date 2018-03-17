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
  Content
} from 'native-base';
import { connect } from 'react-redux';
import { StatusBar, View, Image, Dimensions, StyleSheet, Platform } from 'react-native';
import { galleryFetch } from '../../actions';

let galleryarray;

class IGallery extends Component {
  componentWillMount() {
    this.props.galleryFetch();
    this.creategalleryList(this.props);
  }

  componentDidMount() {
    if (Platform.OS === 'android') {
      StatusBar.setHidden(false);
      StatusBar.setTranslucent(false);
    }
  }

  componentWillReceiveProps(nextProps) {
    this.creategalleryList(nextProps);
  }

  creategalleryList({ galleryList }) {
    galleryarray = galleryList;
  }

  render() {
    return (
      <Container style={{ backgroundColor: '#3c3c3c' }}>
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
            <Title style={{ color: 'white' }}>Image Gallery</Title>
          </Body>
          <Right>
            <Button
              transparent
            >
              <Icon style={{ color: 'white' }} name='search' />
            </Button>
          </Right>
        </Header>
        <Content style={styles.scrollContainer}>
          <View style={styles.container}>
              {galleryarray.map(place =>
                <Image
                  key='url'
                  source={{ uri: place.image }}
                  style={styles.card}
                />
              )}
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 2,
  },
  card: {
    margin: 5,
    borderRadius: 5,
    width: Dimensions.get('window').width / 2 - 15,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7FFF00',
    resizeMode: 'stretch',
  }
});

const mapStateToProps = ({ galleryList }) => {
  return galleryList;
};

export default connect(mapStateToProps, { galleryFetch })(IGallery);
