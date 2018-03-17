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
import { brochureFetch } from '../../../actions';

let brochureArray;

class Brochure extends Component {
  componentWillMount() {
    this.props.brochureFetch();
    this.createBrochureList(this.props);
  }

  componentDidMount() {
    StatusBar.setHidden(false);
    StatusBar.setTranslucent(false);
  }

  componentWillReceiveProps(nextProps) {
    this.createBrochureList(nextProps);
  }

  createBrochureList({ brochureList }) {
    brochureArray = brochureList;
  }

  render() {
    return (
      <Container>
        <Content>
          <List
            dataArray={brochureArray}
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
const mapStateToProps = ({ brochureList }) => {
  return brochureList;
};

export default connect(mapStateToProps, { brochureFetch })(Brochure);
