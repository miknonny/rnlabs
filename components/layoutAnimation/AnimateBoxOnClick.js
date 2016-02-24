import React, {Component, StyleSheet, View, Text, LayoutAnimation, TouchableWithoutFeedback} from 'react-native'

export default class AnimateBoxOnClick extends Component {
  constructor (props) {
    super(props)

    this.state = {
      txt: 'Small',
      viewStyle:{
        height: 250
      }
    }
  }

  animateView () {

    // @function What todo when style/state changes.
    // @params LayoutAnimation.Presets.linear, ease, spring
    // callback to run after animation
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring, () => {
      this.setState({txt: this.state.viewStyle.height > 250 ? 'BIG' : 'Small'})
    })
    this.setState({
      viewStyle: {
        height: this.state.viewStyle.height > 250  ? 250 : 450
      }
    })
  }

  onViewLayout () {

  }

  render () {
    let viewStyle = [styles.view, this.state.viewStyle]
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => {this.animateView()}}>
          <View style={viewStyle}>
            <Text style={styles.viewText}>{this.state.txt}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    backgroundColor: 'black',
    margin: 20
  },
  viewText: {
    color: 'white'
  }
})
