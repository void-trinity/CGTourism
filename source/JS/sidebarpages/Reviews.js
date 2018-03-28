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
  ListItem,
  List,
  Thumbnail,
  Text,
  Footer,
  FooterTab,
  Input
} from 'native-base';
import axios from 'axios';
import { StatusBar, Platform, AsyncStorage, KeyboardAvoidingView, Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { navigatorRef } from '../../App';
import baseUrl from '../../global';

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', review: '' };
  }

  componentDidMount() {
    if (Platform.OS === 'android') {
      StatusBar.setHidden(false);
      StatusBar.setTranslucent(false);
    }
  }

  addcomment() {
    const { params } = this.props.navigation.state;
    const { name } = params;
    if (this.state.review.length > 0) {
      axios.post(`${baseUrl}/places/api/review/add/`, {
        username: this.state.username,
        review: this.state.review,
        placename: name
      });
      Alert.alert(
        'Review Added Successfully',
        'Will be taken to home page to affect changes',
        [
          { text: 'OK',
              onPress: () =>
                navigatorRef.dispatch(NavigationActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'drawer' })]
            })) }
        ],
        { cancelable: false }
      );
    }
  }

  render() {
    const { params } = this.props.navigation.state;
    const reviewsArray = params.reviews_place;
    AsyncStorage.getItem('username')
    .then((response) => this.setState({ username: response }));
    return (
      <Container>
      <KeyboardAvoidingView
        behavior='padding'
        style={{
        flex: 1,
      }}
      >
        <Header
          style={{ backgroundColor: '#3C3C3C' }}
          androidStatusBarColor="black"
          iosBarStyle="light-content"
        >
          <Body>
            <Title>Reviews</Title>
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
            dataArray={reviewsArray}
            renderRow={(item) =>
              <ListItem avatar>
                <Left>
                  <Thumbnail style={{ margin: 5 }} source={{ uri: baseUrl + item.avatar }} />
                </Left>
                <Body>
                  <Text>{item.username}</Text>
                  <Text note>{item.review}</Text>
                </Body>
              </ListItem>
            }
          />
        </Content>
        <Footer>
          <FooterTab>
            <Input
              underline={false}
              style={{ color: '#000', margin: 5 }}
              value={this.state.review}
              onChangeText={review => this.setState({ review })}
            />
            <Right>
            <Button
              transparent
              style={{ marginRight: 20 }}
              onPress={this.addcomment.bind(this)}
            >
              <Icon name='add' style={{ marginRight: 20 }} />
            </Button>
            </Right>
          </FooterTab>
        </Footer>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Reviews;
