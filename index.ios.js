import React, {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  Component
} from 'react-native';
import FadeInExample from './components/FadeInFadeOut/FadeInExample'



class Example extends Component {
  render () {
    return <FadeInExample />
  }
}

AppRegistry.registerComponent('rnlabs', () => Example);
