import React, { AppRegistry, StyleSheet, Text, View, Animated, Component, PanResponder, } from 'react-native';
import clamp from 'clamp';

const People = [
  'red',
  'green',
  'blue',
  'purple',
  'orange'
]

let SWIPE_THRESHOLD = 120

class Flix extends Component {
  constructor (props) {
    super(props)

    this.state = {
      pan: new Animated.ValueXY(),
      enter: new Animated.Value(0.5),
      person: People[0]
    }
  }

  goToNextPerson () {
    let currentPersonIdx = People.indexOf(this.state.person)
    let newIdx = currentPersonIdx + 1

    this.setState({
      person: People[newIdx > People.length - 1 ? 0 : newIdx]
    })
  }

  componentDidMount () {
    this.animatedEntrance()
  }

  animatedEntrance () {
    Animated.spring(
      this.state.enter,
      {toValue: 1, friction: 8}
    ).start()
  }

  componentWillMount () {
    this.panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value})
        this.state.pan.setValue({x: 0, y: 0})
      },

      onPanResponderMove: Animated.event([
        null, {dx: this.state.pan.x, dy: this.state.pan.y},
      ]),

      onPanResponderRelease: (e, {vx, vy}) => {
        this.state.pan.flattenOffset()
        var velocity // NOTE: why var declaration instead of let

        if (vx >= 0) {
          velocity = clamp(vx, 3, 5)
        } else if (vx < 0) {
          velocity = clamp(vx * -1, 3, 5) * -1
        }

        if (Math.abs(this.state.pan.x._value) > SWIPE_THRESHOLD) {
          Animated.decay(this.state.pan, {
            velocity: {x: velocity, y: vy},
            deceleration: 0.98
          }).start(this.reseState)
        } else {
          Animated.spring(this.state.pan, {
            toValue: {x: 0, y: 0},
            friction: 4
          }).start()
        }
      }
    })
  }

  resetState () {
    this.state.pan.setValue({x: 0, y: 0})
    this.state.enter.setValue(0)
    this.goToNextPerson()
    this.animatedEntrance()
  }

  render () {
    let {pan, enter } = this.this.state.

    let [translateX, translateY] = [pan.x, pan.y]

    let rotate = pan.x.interpolate({  })
  }
}
