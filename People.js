import React, {Component} from 'react'

import {
    StyleSheet,
    View,
    Text,
    FlatList,
    ActivityIndicator,
    TouchableHighlight
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

    loadDetails = (item) => {
        const { navigate } = this.props.navigation
        navigate('Details', {item: item})
    }


    renderItem = ({item}) => {
        return (
            <TouchableHighlight
              onPress={() => this.loadDetails(item)}
              style={styles.item}
            >
                <Text style={styles.text}>{item.name}</Text>
            </TouchableHighlight>
        )
    }

    render() {
        let {data} = this.state
        return (
          <Container>
            { this.state.loading ? 
              <ActivityIndicator color='#ffe81f' size='large' /> :
              (
                <FlatList
                  data={data}
                  keyExtractor={(item) => item.name}
                  renderItem={this.renderItem}/>
              )
            }
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