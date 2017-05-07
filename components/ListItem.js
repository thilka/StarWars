import React, {Component} from 'react'

import {
    StyleSheet,
    Text,
    TouchableHighlight
} from 'react-native'

export default class ListItem extends Component {
  render() {
    const {onPress, item, index} = this.props;
    return (
        <TouchableHighlight style={[ styles.item, { borderTopWidth: index === 0 ? 1 : null} ]} onPress={onPress}>
          <Text style={styles.text}>{item.name}</Text>
        </TouchableHighlight>
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