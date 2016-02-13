import React, {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  Component
} from 'react-native';

export default class ImageBounce extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0)
    }
  }

  componentDidMount () {
    this.state.bounceValue.setValue(1.5)
    Animated.spring(
      this.state.bounceValue,
      {toValue: 0.8, friction: 1}
    ).start()
  }

  render () {
    return (
      <Animated.Image
        source={{uri: 'http://i.imgur.com/XMKOH81.jpg'}}
        style={{
          flex: 1,
          transform: [
            {scale: this.state.bounceValue}
          ]
        }}
      />
    )
  }
}
