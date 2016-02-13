'use strict';

import React, {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  Component
} from 'react-native'
import UIExplorerButton from './UIExplorerButton'

class FadeInView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0), // opacity 0
    };
  }
  componentDidMount() {
    Animated.timing(       // Uses easing functions
      this.state.fadeAnim, // The value to drive
      {
        toValue: 1,        // Target
        duration: 2000,    // Configuration
      }
    ).start();             // Don't forget start!
  }
  render() {
    return (
      <Animated.View   // Special animatable View
        style={{
          opacity: this.state.fadeAnim,  // Binds
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

export default class FadeInExample extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true
    }
  }
  _onPress  () {
    this.setState({
      show: !this.state.show
    })
  }
  render () {
    return (
      <View>
        <UIExplorerButton
          onPress={() => this._onPress()}
        >
          Press to {this.state.show ? 'Hide' : 'Show'}
        </UIExplorerButton>
        {
          this.state.show &&
            <FadeInView>
              <View style={styles.content}>
                <Text>FadeInView</Text>
              </View>
            </FadeInView>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'deepskyblue',
    borderWidth: 1,
    borderColor: 'dodgerblue',
    padding: 20,
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
});
