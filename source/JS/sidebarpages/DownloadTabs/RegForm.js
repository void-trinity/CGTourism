import React, { Component } from 'react';
import {
  Container,
  Content,
  List,
  ListItem,
  Text
} from 'native-base';
import { StatusBar, TouchableOpacity, Linking } from 'react-native';
import { connect } from 'react-redux';
import { regformFetch } from '../../../actions';

let regformArray;

class RegForm extends Component {
  componentWillMount() {
    this.props.regformFetch();
    this.createregformList(this.props);
  }

  componentDidMount() {
    StatusBar.setHidden(false);
    StatusBar.setTranslucent(false);
  }

  componentWillReceiveProps(nextProps) {
    this.createregformList(nextProps);
  }

  createregformList({ regformList }) {
    regformArray = regformList;
  }

  render() {
    return (
      <Container>
        <Content>
          <List
            dataArray={regformArray}
            renderRow={(item) =>
              <ListItem>
                <TouchableOpacity
                  style={{ flex: 1 }}
                  onPress={() => Linking.openURL(item.pdf)}
                >
                  <Text style={{ flex: 1, marginRight: 'auto' }}>{item.name}</Text>
                </TouchableOpacity>
              </ListItem>
            }
          />
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = ({ regformList }) => {
  return regformList;
};

export default connect(mapStateToProps, { regformFetch })(RegForm);
