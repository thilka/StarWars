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


const defaultTitleHandler = (item) => {
  return item.title
}

const nameBasedTitleHandler = (item) => {
  return item.name
}

const links = [
    {name: 'People',    url: 'https://swapi.co/api/people/',    titleHandler: nameBasedTitleHandler },
    {name: 'Films',     url: 'https://swapi.co/api/films/',     titleHandler: defaultTitleHandler },
    {name: 'StarShips', url: 'https://swapi.co/api/starships/', titleHandler: nameBasedTitleHandler },
    {name: 'Vehicles',  url: 'https://swapi.co/api/vehicles/',  titleHandler: nameBasedTitleHandler },
    {name: 'Species',   url: 'https://swapi.co/api/species/',   titleHandler: nameBasedTitleHandler },
    {name: 'Planets',   url: 'https://swapi.co/api/planets/',   titleHandler: nameBasedTitleHandler },
]


export default class BasicApp extends Component {

  static navigationOptions = {
    headerTitle: <Image style={{ width: 110, height: 64, alignSelf: 'center' }} source={{uri:'https://raw.githubusercontent.com/dabit3/react-native-in-action/chapter6/sw.jpg'}}/>,
    headerStyle: { backgroundColor: 'black', height: 110},
    headerAlignment: 'center'
  }

  loadItem = (item) => {
    const { navigate } = this.props.navigation
    navigate(item.name, {url: item.url, titleHandler: item.titleHandler})
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
  People: { screen: DetailsList, titleHandler: defaultTitleHandler },
  Films: { screen: DetailsList, },
  StarShips: { screen: DetailsList, },
  Vehicles: { screen: DetailsList, },
  Species: { screen: DetailsList, },
  Planets: { screen: DetailsList, },
  Details: { screen: Details,}
})

AppRegistry.registerComponent('StarWars', () => Navigation);