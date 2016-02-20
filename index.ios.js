import React, {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  Component
} from 'react-native';
import Forms from './components/Forms/Forms'




class Example extends Component {
  render () {
    return <Forms />
  }
}

AppRegistry.registerComponent('rnlabs', () => Example);
