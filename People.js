import React, {Component} from 'react'

import {
    FlatList,
    ActivityIndicator,
} from 'react-native'

import Container from './Container'
import ListItem from './components/ListItem'

export default class People extends Component {

    static navigationOptions = {
        headerTitle: 'People',
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
    }

    state = {
        data: [],
        loading: true,
        modalVisible: false,
        gender: 'all',
        pickerVisible: false
    }

    componentDidMount() {
        const {url} = this.props.navigation.state.params
        fetch(url)
        .then(res => res.json())
        .then(json => this.setState({ data:json.results, loading:false }))
        .catch((err) => console.log('Error:', err))
    }

    loadItem = (item) => {
        const { navigate } = this.props.navigation
        navigate('Details', {item: item})
    }


    renderItem = ({item}) => {
        console.log(item)
        return (
            <ListItem item={item} onPress={() => this.loadItem(item)}/>
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
