import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, 
  TouchableHighlight,
  FlatList,
  Image
} from 'react-native';

import {StackNavigator} from 'react-navigation'

import Container from './Container'
import People from './People'
import Details from './Details'

const links = [
    {title: 'People'},
    {title: 'Films'},
    {title: 'StarShips'},
    {title: 'Vehicles'},
    {title: 'Species'},
    {title: 'Planets'},
]

export default class BasicApp extends Component {

  static navigationOptions = {
    headerTitle: <Image style={{ width: 110, height: 64, alignSelf: 'center' }} source={{uri:'https://raw.githubusercontent.com/dabit3/react-native-in-action/chapter6/sw.jpg'}}/>,
    headerStyle: { backgroundColor: 'black', height: 110},
    headerAlignment: 'center'
  }

  navigate = (item) => {
    const { navigate } = this.props.navigation
    navigate(item.title)
  }

  renderItem = ({item, index}) => {
    return (
      <TouchableHighlight
        onPress={() => this.navigate(item)}
        style={[ styles.item, { borderTopWidth: index === 0 ? 1 : null} ]}>
        <Text style={styles.text}>{item.title}</Text>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <Container>
        <FlatList
          data={links}
          keyExtractor={(item) => item.title}
          renderItem={this.renderItem}/>
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    justifyContent: 'center',
    borderColor: 'rgba(255,232,31, .2)',
    borderBottomWidth: 1
  },
  text: {
    color: '#ffe81f',
    fontSize: 18
  }
});

/////////////////////////////////////////////////////////
// Navigation

const Navigation = StackNavigator({
  Home: {
    screen: BasicApp,
  },
  People: {
    screen: People,
  },
  Details: {
      screen: Details,
  }
})

AppRegistry.registerComponent('StarWars', () => Navigation);