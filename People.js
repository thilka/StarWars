import React, {Component} from 'react'

import {
    StyleSheet,
    View,
    Text,
    FlatList
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
    state = {
        data: [],
        loading: true,
        modalVisible: false,
        gender: 'all',
        pickerVisible: false
    }

    componentDidMount() {
        fetch('https://swapi.co/api/people/')
        .then(res => res.json())
        .then(json => this.setState({ data:json.results, loading:false }))
        .catch((err) => console.log('Error:', err))
    }

    renderItem = ({item}) => {
        return (
            <View>
                <Text style={styles.text}>{item.name}</Text>
            </View>
        )
    }


    render() {
        let {data} = this.state
        return (
            <Container>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.name}
                    renderItem={this.renderItem}/>
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