import React, { Component, View, StyleSheet, Text } from 'react-native'

export default class BoxShadow extends Component {
  render () {
    return (
      <View style={styles.box} />
    )
  }
}

const styles = StyleSheet.create({
  box: {
    margin: 40,
    height: 30,
    width: 70,
    backgroundColor: '#ffffff',
    shadowColor: 'rgba(0,0,0,0.4)',
    shadowOpacity: 0.6,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 0
    }
  }
})
