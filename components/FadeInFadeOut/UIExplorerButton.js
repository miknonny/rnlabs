import React, {
  StyleSheet,
  Text,
  TouchableHighlight,
  Component
} from 'react-native'

export default class UIExplorerButton extends Component {
  static propTypes = {
    onPress: React.PropTypes.func
  };

  render () {
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        style={styles.button}
        underlayColor="grey"
      >
        <Text>
          {this.props.children}
        </Text>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    borderColor: '#696969',
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d3d3d3',
  },
});
