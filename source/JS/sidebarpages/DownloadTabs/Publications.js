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
import { publicationsFetch } from '../../../actions';

let publicationsArray;

class Publications extends Component {
  componentWillMount() {
    this.props.publicationsFetch();
    this.createpublicationList(this.props);
  }

  componentDidMount() {
    StatusBar.setHidden(false);
    StatusBar.setTranslucent(false);
  }

  componentWillReceiveProps(nextProps) {
    this.createpublicationList(nextProps);
  }

  createpublicationList({ publicationsList }) {
    publicationsArray = publicationsList;
  }

  render() {
    return (
      <Container>
        <Content>
          <List
            dataArray={publicationsArray}
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
const mapStateToProps = ({ publicationsList }) => {
  return publicationsList;
};

export default connect(mapStateToProps, { publicationsFetch })(Publications);
