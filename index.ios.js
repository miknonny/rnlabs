import React, {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  Component
} from 'react-native';
import BoxMove from './components/BoxMove/BoxMove'




class Example extends Component {
  render () {
    return <BoxMove />
  }
}

AppRegistry.registerComponent('rnlabs', () => Example);
