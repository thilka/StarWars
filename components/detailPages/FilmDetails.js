import React, {Component} from 'react'

import {
    StyleSheet,
    Text,
    TouchableHighlight
} from 'react-native'

import Container from '../../Container'

export default class FilmDetails extends Component {

  static navigationOptions = NavigationDefaults

  render() {
        const { item } = this.props.navigation.state.params
        return (
            <Container>
               <Text style={styles.text}>Title: {item.title}</Text>
            </Container>
        )
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