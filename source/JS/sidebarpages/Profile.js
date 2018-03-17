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
  Text
} from 'native-base';
import axios from 'axios';
import { StatusBar, Platform, View, Image, StyleSheet, AsyncStorage } from 'react-native';
import baseUrl from '../../global';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', user: {} };
  }

  componentWillMount() {
    AsyncStorage.getItem('username')
    .then((response) => this.setuser(response))
    .catch((error) => console.log(error));
    console.log(this.state.username);
  }

  componentDidMount() {
    if (Platform.OS === 'android') {
      StatusBar.setHidden(false);
      StatusBar.setTranslucent(false);
    }
  }

  setuser(response) {
    axios(`${baseUrl}/user/api/retrieve/${response}/`)
    .then(datas => this.setState({ user: datas.data }));
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
            <Title>Profile</Title>
          </Body>
          <Right>
            <Button
              transparent
            >
              <Icon style={{ color: 'white' }} name='search' />
            </Button>
          </Right>
        </Header>
          <View style={styles.headerBackground}>
                <View style={styles.header}>
                    <View style={styles.profileWrap}>
                        <Image style={styles.profilepic} source={{ uri: this.state.user.avatar }} />
                    </View>
                    <Text style={styles.sname}>
                        {this.state.user.username}
                    </Text>
                    <Text style={styles.name}>
                        {this.state.user.email}
                    </Text>
                    <Text style={styles.name}>
                        Mobile no.: {this.state.user.mobileNumber}
                    </Text>
                    <Text style={styles.country}>
                        Country: INDIA
                    </Text>
                    <Text style={styles.name}>
                        `{this.state.user.first_name} {this.state.user.last_name}`
                    </Text>
                </View>
            </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    headerBackground: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        height: 100
    },
    header: {
        flex: 1,
        height: 500,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
        backgroundColor: '#fff'
    },
    profileWrap: {
        width: 150,
        height: 150,
        borderRadius: 100,
        borderColor: 'rgba(0,0,0,0.4)',
        borderWidth: 10,
    },
    profilepic: {
        flex: 1,
        width: null,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        alignSelf: 'stretch',
        borderColor: '#fff',
        borderWidth: 4,
    },
    name: {
      marginTop: 15,
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold'
    },
    sname: {
        marginTop: 20,
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
    },
    s1name: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
});

export default Profile;
