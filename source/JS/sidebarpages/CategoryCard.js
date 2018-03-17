import React, { Component } from 'react';
import { Card, CardItem, Text, Body } from 'native-base';
import { Image, ActivityIndicator, TouchableOpacity } from 'react-native';

class CategoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = { imgloaded: false };
  }

  onImageLoad() {
      this.setState(() => ({ imgloaded: true }));
  }

  openCategory() {
    const { title, key } = this.props.item;
    console.log(title);
    this.props.navigation.navigate('categoryelements', {
      category: title,
      key
    });
  }

  render() {
    const { image, title, description } = this.props.item;
    return (
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={this.openCategory.bind(this)}
      >
        <Card>
          <CardItem cardBody>
            <Image
              source={{ uri: image }} style={{ height: 200, width: null, flex: 1 }}
              onLoad={this.onImageLoad.bind(this)}
            />
          </CardItem>
          {
            !this.state.imgloaded &&
            <ActivityIndicator
              size={'large'}
              style={{ alignSelf: 'center' }}
            />
          }
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
                {description}
              </Text>
            </Body>
          </CardItem>
        </Card>
      </TouchableOpacity>
    );
  }
}

export default CategoryCard;
