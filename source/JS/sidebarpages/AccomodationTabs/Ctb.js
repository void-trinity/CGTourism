import React, { Component } from 'react';
import {
  Container,
  Content,
  List,
  ListItem
} from 'native-base';
import { connect } from 'react-redux';
import CtbCard from './CtbCard';
import { ctbFetch } from '../../../actions';

let ctbList;

class Ctb extends Component {
  componentWillMount() {
    this.props.ctbFetch();
    this.createCtbList(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createCtbList(nextProps);
  }

  createCtbList({ ctb }) {
    ctbList = ctb;
  }

  render() {
    return (
      <Container>
        <Content>
          <List
            dataArray={ctbList}
            renderRow={(ctbItem) =>
              <ListItem noBorder>
                <CtbCard item={ctbItem} navigation={this.props.navigation} />
              </ListItem>
            }
          />
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = ({ ctb }) => {
  return ctb;
};

export default connect(mapStateToProps, { ctbFetch })(Ctb);
