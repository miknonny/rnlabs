import React, {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  Component
} from 'react-native';
import DragBox from './components/DragBox/DragBox'



class Example extends Component {
  render () {
    return <DragBox />
  }
}

AppRegistry.registerComponent('rnlabs', () => Example);
