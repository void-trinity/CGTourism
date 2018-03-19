import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  KeyboardAvoidingView,
  View,
  Image,
  Dimensions,
  StatusBar,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  BackHandler
} from 'react-native';
import { Item, Input, Label, Form } from 'native-base';
import { Font } from 'expo';
import styles from '../Styles';
import { loginUpdate, signInAttempt } from '../actions';


export let navigationRef;

const window = Dimensions.get('window');

class Login extends Component {
  async componentWillMount() {
   await Font.loadAsync({
     Roboto: require('native-base/Fonts/Roboto.ttf'),
     Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
   });

   StatusBar.setHidden(true);
  }
  componentDidMount() {
      navigationRef = this.navigator;
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton() {

  }
  attemptLogin() {
    const { username, password } = this.props;
    this.props.signInAttempt({ username, password });
  }

  renderButton() {
    if (this.props.loading) {
      return (
        <View style={styles.button}>
          <ActivityIndicator size={'large'} />
        </View>
      );
    }

    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this.attemptLogin.bind(this)}
      >
        <Text style={styles.buttonText}>
          Login
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    const { container, bg, logo } = styles;
    return (
        <KeyboardAvoidingView
          behavior='padding'
          style={container}
        >
          <View style={bg}>
            <Image source={require('../BG/cgtlogo.png')} style={logo} />
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('signup')}
            >
              <Text
                style={{ marginBottom: 10, color: '#3C3C3C', fontSize: 18 }}
              >Signup</Text>
            </TouchableOpacity>
          </View>
          <Form
            style={{ width: window.width - 70, marginBottom: 20 }}
          >
            <Item
              floatingLabel
              style={{ marginVertical: 20 }}
            >
                <Label style={{ color: '#FFF' }}>Username</Label>
                <Input
                  style={{ color: '#FFF' }}
                  underlineColorAndroid='transparent'
                  value={this.props.username}
                  onChangeText={value => this.props.loginUpdate({ prop: 'username', value })}
                />
              </Item>
              <Item floatingLabel>
                <Label style={{ color: '#FFF' }}>Password</Label>
                <Input
                  secureTextEntry
                  underline={false}
                  style={{ color: '#FFF' }}
                  value={this.props.password}
                  onChangeText={value => this.props.loginUpdate({ prop: 'password', value })}
                />
            </Item>
          </Form>
          {this.renderButton()}
        </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = ({ login }) => {
  const { username, password, loading } = login;
  return { username, password, loading };
};

export default connect(mapStateToProps, { loginUpdate, signInAttempt })(Login);
