import React, { Component } from 'react';
import {
  AppRegistry,
  FlatList,
  Image
} from 'react-native';

import {StackNavigator} from 'react-navigation'

import Container from './Container'
import DetailsList from './DetailsList'
import Details from './Details'
import ListItem from './components/ListItem'

const links = [
    {name: 'People',    url: 'https://swapi.co/api/people/' },
    {name: 'Films',     url: 'https://swapi.co/api/films/' },
    {name: 'StarShips', url: 'https://swapi.co/api/starships/' },
    {name: 'Vehicles',  url: 'https://swapi.co/api/vehicles/' },
    {name: 'Species',   url: 'https://swapi.co/api/species/' },
    {name: 'Planets',   url: 'https://swapi.co/api/planets/'},
]

export default class BasicApp extends Component {

  static navigationOptions = {
    headerTitle: <Image style={{ width: 110, height: 64, alignSelf: 'center' }} source={{uri:'https://raw.githubusercontent.com/dabit3/react-native-in-action/chapter6/sw.jpg'}}/>,
    headerStyle: { backgroundColor: 'black', height: 110},
    headerAlignment: 'center'
  }

  loadItem = (item) => {
    const { navigate } = this.props.navigation
    navigate(item.name, {url: item.url})
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
  Home: { screen: BasicApp, },
  People: { screen: DetailsList, },
  Films: { screen: DetailsList, },
  StarShips: { screen: DetailsList, },
  Vehicles: { screen: DetailsList, },
  Species: { screen: DetailsList, },
  Planets: { screen: DetailsList, },
  Details: { screen: Details,}
})

AppRegistry.registerComponent('StarWars', () => Navigation);