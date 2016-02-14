import React, {
  StyleSheet,
  Text,
  View,
  Animated,
  Component
} from 'react-native'

export default class BoxMove extends Component {

  componentWillMount () {
    this.animatedValue = new Animated.Value(0)
  }

  componentDidMount () {
    Animated.timing(this.animatedValue, {
      toValue: 300,
      duration: 500,
      delay: 500
    }).start()
  }

  render () {
    return (
      <View style={styles.container}>
        <Animated.View
          style={[styles.box, {transform: [{translateY: this.animatedValue}]}]}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  box: {
    backgroundColor: 'red',
    position: 'absolute',
    top: 100,
    left: 100,
    width: 100,
    height: 100
  }
})
