import React, { Component, View, StyleSheet, PanResponder } from 'react-native'

export default class DragBox extends Component {

  componentWillMount () {

    this.prevLeft = 0
    this.prevTop = 0

    this.boxStyle = {
      left: this.prevleft,
      top: this.prevTop
    }
    this.panResponder = PanResponder.create({
      // Mapping handlers available on panResponder to local handers.
      // Kindly respond to a pan gesture
      onStartShouldSetPanResponder: () => true,
      // @onPanResponderGrant After we have been granted permission to handle Panning.
      // @setNative props allow us to deal with frequent rerendering much better
      // than set state.
      onPanResponderGrant: () => {
        // You are setting backgroundColor as props, you should next it as a style object
        this.refs.box.setNativeProps({
          style: {
            backgroundColor: 'green'
          }
        })
      },
      // e: Element.  gestureState: calculates the movement accross the x and y
      onPanResponderMove: (e, gestureState) => {
        console.log(this.boxStyle.left)
        this.boxStyle.left = this.prevLeft + gestureState.dx
        this.boxStyle.top = this.prevTop + gestureState.dy
        this.updatePosition()
      },
      onPanResponderRelease: (e, gestureState) => {
        this.refs.box.setNativeProps({
          style: {
            backgroundColor: 'blue'
          }
        })
        this.prevLeft += gestureState.dx
        this.prevTop += gestureState.dy
      }

    })
  }

  componentDidMount () {
    this.updatePosition()
  }


  updatePosition () {
    console.log(this.boxStyle.left, this.boxStyle.top)
    this.refs.box.setNativeProps({style: this.boxStyle})
  }

  render () {
    return (
      <View ref="box" style={styles.box} {...this.panResponder.panHandlers} />
    )
  }
}

const styles = StyleSheet.create({
  box: {
    width: 80,
    height: 80,
    backgroundColor: 'blue',
    position: 'absolute',
    opacity: 0.5
  }
})
