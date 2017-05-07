import React, {Component} from 'react'

import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator,
    TouchableHighlight
} from 'react-native'

import Container from './Container'

export default class Details extends Component {
    
    static navigationOptions = ({navigation}) => ({
        headerTitle: navigation.state.params.item.name,
        headerStyle: {
            borderBottomWidth: 1,
            borderBottomColor: '#ffe81f',
            backgroundColor: 'black'
        },
        headerTintColor: '#ffe81f',
        headerTitleStyle: {
            color: '#ffe81f',
        },
        pressColorAndroid: 'white'
    });

    render() {
        const { item } = this.props.navigation.state.params
        return (
            <Container>
               <Text style={styles.text}>Name: {item.name}</Text>
               <Text style={styles.text}>Height: {item.height}</Text>
               <Text style={styles.text}>Gender: {item.gender}</Text>
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