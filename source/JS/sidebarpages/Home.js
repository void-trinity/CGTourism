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
  Card,
  CardItem,
  Text,
  List,
  ListItem
} from 'native-base';
import { StatusBar, Platform, TouchableOpacity, Dimensions, Linking, Image } from 'react-native';
import Slideshow from 'react-native-slideshow';
import MajorAttractions from './MajorAttractions';

const gujarattourismarray = [
  { url: 'https://seeklogo.com/images/G/gujarat-tourism-logo-FAAFFB32AE-seeklogo.com.png' },
  { url: 'http://3.bp.blogspot.com/-QPDHWud6Tvk/UxHMN4Kpo7I/AAAAAAAAGv0/-IHaLPjG9T8/s1600/Mahabat-ka-Maqbara.jpg' },
  { url: 'http://www.hltt.in/images/page-images/gujarat-tourism-bahauddin-makbara.jpg' },
  { url: 'http://d1ah1il5j7hxtz.cloudfront.net/wp-content/uploads/2018/01/K1.jpg' }
];

const AchievementsArray = [
  'Rashtriya Paryatan Puraskar',
  'CNBC Travel Award',
  'Best Emerging Destination Award',
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { interval: null, position: 1 };
  }

  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === gujarattourismarray.length ? 0 : this.state.position + 1
        });
      }, 2000)
    });
  }
  componentDidMount() {
    if (Platform.OS === 'android') {
      StatusBar.setHidden(false);
      StatusBar.setTranslucent(false);
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  openPlace() {
    Linking.openURL('http://www.gujarattourism.com/');
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
            <Title style={{ color: 'white' }}>Home</Title>
          </Body>
          <Right>
            <Button
              transparent
            >
              <Icon style={{ color: 'white' }} name='search' />
            </Button>
          </Right>
        </Header>
        <Content
          style={{ padding: 10 }}
        >
          <MajorAttractions navigation={this.props.navigation} />
          <TouchableOpacity
            style={{ flex: 1, marginVertical: 30 }}
            onPress={() => this.openPlace()}
          >
            <Card
              style={{ flex: 1, width: Dimensions.get('window').width - 20 }}
            >
              <CardItem header>
                <Title style={{ fontSize: 18, color: '#8a8f96', fontWeight: '100' }}>Gujarat Tourism</Title>
              </CardItem>
              <CardItem>
                <Text>#BharatShreshtBharat</Text>
              </CardItem>
              <CardItem>
                <Slideshow
                  dataSource={gujarattourismarray}
                  position={this.state.position}
                  onPositionChanged={position => this.setState({ position })}
                />
              </CardItem>
              <CardItem>
                <Body>
                  <Text style={{ fontSize: 14, color: '#8a8f96', fontWeight: '100' }}>
                    Formed in 1978, the Tourism Corporation of Gujarat Ltd (TCGL) provides comprehensive travel assistance and services to the tourists coming to visit Gujarat. Some of the services of TCGL include accommodation, conducted tours and ground transport with a wide range of choice to meet diverse needs. The Corporation has a network of 18 accommodation units and 5 Cafeterias under the brand name Toran.
                  </Text>
                </Body>
              </CardItem>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.mygovernmentschemes.com/complete-detail-raman-jan-paryatan-yojana-tourism-scheme-chhattisgarh/')}
          >
            <Card>
              <CardItem header>
                <Title style={{ fontSize: 18, color: '#8a8f96', fontWeight: '100' }}>Raman Jan Paryatan Yojna</Title>
              </CardItem>
              <CardItem>
                <Image
                  source={{ uri: 'http://newsyojana.com/wp-content/uploads/2017/09/raman-jan-paraytan-yojana.jpg' }}
                  style={{ height: 200, width: null, flex: 1 }}
                />
              </CardItem>
              <CardItem body>
                <Text style={{ fontSize: 14, color: '#8a8f96' }}>
                The state government of Chhattisgarh has launched a new tourism scheme on 15th October for the various spots. Named as “Raman Jan Paryatan Yojana”, the scheme will be managed by Chhattisgarh Tourism Board (CTB). Under the scheme, people can now visit various tourist spots in Chhattisgarh conveniently. Under the Raman Jan Paryatan Yojana, the CBT will arrange tours for people to Naya Raipur besides Sirpur, Giraudpuri, Barnavapara, Chitrakote, Teerathgarh, and other tourist places including Tala, Malhar, Shivrinarayan and Ratanpur on prescribed dates. Click for more info
                </Text>
              </CardItem>
            </Card>
          </TouchableOpacity>
          <Card
            style={{ marginBottom: 30, marginTop: 20 }}
          >
            <CardItem header>
              <Title style={{ fontSize: 18, color: '#8a8f96', fontWeight: '100' }}>Achievements</Title>
            </CardItem>
            <CardItem>
              <List
                dataArray={AchievementsArray}
                renderRow={(place) =>
                  <ListItem
                    noBorder
                    style={{ margin: 0 }}
                  >
                    <Left>
                      <Icon name="trophy" style={{ fontSize: 22 }} />
                      <Text style={{ marginLeft: 30, marginBottom: 4 }}>{place}</Text>
                    </Left>
                  </ListItem>
                }
              />
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default Home;
