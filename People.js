import React, {Component} from 'react'

import {
    StyleSheet,
    View,
    Text
} from 'react-native'

import Container from './Container'

export default class People extends Component {

  static navigationOptions = {
    headerTitle: 'People',
    headerStyle: {
      borderBottomWidth: 1,
      borderBottomColor: '#ffe81f',
      backgroundColor: 'black'
    },
    headerTitleStyle: {
      color: '#ffe81f',
    },
    pressColorAndroid: 'white'
  }

    render() {
        return (
            <Container>
                <View>
                    <Text style={styles.text}>People!!!</Text>
                </View>
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