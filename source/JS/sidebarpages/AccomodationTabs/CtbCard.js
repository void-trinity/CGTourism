import React, { Component } from 'react';
import { Card, CardItem, Text, Body } from 'native-base';
import { TouchableOpacity } from 'react-native';
import Slideshow from 'react-native-slideshow';
import baseUrl from '../../../global';

class CtbCard extends Component {
  constructor(props) {
    super(props);
    this.state = { interval: null, position: 1 };
  }

  componentWillMount() {
    const { images } = this.props.item;
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === images.length ? 0 : this.state.position + 1
        });
      }, 2000)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }


  render() {
    const { images, title, short_location } = this.props.item;
    const imagelist = images.map((item) => {
      return { url: baseUrl + item };
    });
    return (
      <TouchableOpacity
        style={{ flex: 1 }}
      >
        <Card>
          <CardItem cardBody>
            <Slideshow
              dataSource={imagelist}
              position={this.state.position}
              onPositionChanged={position => this.setState({ position })}
            />
          </CardItem>
          <CardItem>
              <Text
                style={{ fontWeight: '500', fontSize: 18 }}
              >
                {title}
              </Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text
                style={{ fontSize: 14 }}
              >
                {short_location}
              </Text>
            </Body>
          </CardItem>
        </Card>
      </TouchableOpacity>
    );
  }
}

export default CtbCard;
