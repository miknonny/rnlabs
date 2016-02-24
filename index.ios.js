import React, {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  Component
} from 'react-native';
import Forms from './components/Forms/Forms'
import AnimateBoxOnClick from './components/layoutAnimation/AnimateBoxOnClick'



class Example extends Component {
  render () {
    return <AnimateBoxOnClick />
  }
}

AppRegistry.registerComponent('rnlabs', () => Example);
