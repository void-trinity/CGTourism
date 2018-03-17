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
import { ctbnewsFetch } from '../../../actions';

let ctbNewsArray;

class RegForm extends Component {
  componentWillMount() {
    this.props.ctbnewsFetch();
    this.createctbList(this.props);
  }

  componentDidMount() {
    StatusBar.setHidden(false);
    StatusBar.setTranslucent(false);
  }

  componentWillReceiveProps(nextProps) {
    this.createctbList(nextProps);
  }

  createctbList({ ctbnewsList }) {
    ctbNewsArray = ctbnewsList;
  }

  render() {
    return (
      <Container>
        <Content>
          <List
            dataArray={ctbNewsArray}
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
const mapStateToProps = ({ ctbnewsList }) => {
  return ctbnewsList;
};

export default connect(mapStateToProps, { ctbnewsFetch })(RegForm);
