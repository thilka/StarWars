import React, {Component} from 'react'

import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator,
    TouchableHighlight
} from 'react-native'

import Container from './Container'
import NavigationDefaults from './NavigationDefaults'

export default class Details extends Component {
    
    static navigationOptions = NavigationDefaults

    render() {
        const { item, detailsPage } = this.props.navigation.state.params
        return (
            <Container>
               <Text style={styles.text}>Name: {item.name}</Text>
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