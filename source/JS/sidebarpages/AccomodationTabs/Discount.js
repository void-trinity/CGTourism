import React, { Component } from 'react';
import { Linking } from 'react-native';
import {
  Content,
  Card,
  Button,
  Text,
  CardItem,
  Body
} from 'native-base';
import baseUrl from '../../../global';

class Discount extends Component {
  openURL() {
    Linking.openURL(`${baseUrl}/media/DiscountPolicy/Discount.pdf`);
  }
  render() {
    return (
      <Content>
        <Card>
          <CardItem>
            <Body>
              <Text>Here is an exciting list of discounts that you can get via our Chhattisgarh Tourism Board. Click the button below to view the pdf</Text>
            </Body>
          </CardItem>
          <Button
            full
            success style={{ marginBottom: 30, marginTop: 20, marginHorizontal: 10 }}
            onPress={() => this.openURL()}
          >
              <Text>Download Pdf</Text>
            </Button>
        </Card>
      </Content>
    );
  }
}

export default Discount;
