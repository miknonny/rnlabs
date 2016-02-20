import React, { Component, StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import t from 'tcomb-form-native'
import stylesheet from './stylesheet'

t.form.Form.stylesheet = stylesheet
const Form = t.form.Form

const Person = t.struct({
  name: t.String
})

const options = {
  auto: 'none',
  fields: {
    name: {
      placeholder: 'Search...',
    }
  }
}

export default class Forms extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Form
          ref="form"
          type={Person}
          options={options}
          autoFocus={true}
          editable={false}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
})
