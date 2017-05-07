import React, { Component } from 'react';
import {
  AppRegistry,
  FlatList,
  Image
} from 'react-native';

import {StackNavigator} from 'react-navigation'

import Container from './Container'
import People from './People'
import Details from './Details'
import ListItem from './components/ListItem'

const links = [
    {name: 'People'},
    {name: 'Films'},
    {name: 'StarShips'},
    {name: 'Vehicles'},
    {name: 'Species'},
    {name: 'Planets'},
]

export default class BasicApp extends Component {

  static navigationOptions = {
    headerTitle: <Image style={{ width: 110, height: 64, alignSelf: 'center' }} source={{uri:'https://raw.githubusercontent.com/dabit3/react-native-in-action/chapter6/sw.jpg'}}/>,
    headerStyle: { backgroundColor: 'black', height: 110},
    headerAlignment: 'center'
  }

  loadItem = (item) => {
    const { navigate } = this.props.navigation
    navigate(item.name)
  }

  renderItem = ({item, index}) => {
    return (
      <ListItem item={item} index={index} onPress={() => this.loadItem(item)}/>
    )
  }

  render() {
    return (
      <Container>
        <FlatList
          data={links}
          keyExtractor={(item) => item.name}
          renderItem={this.renderItem}/>
      </Container>

    );
  }
}

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