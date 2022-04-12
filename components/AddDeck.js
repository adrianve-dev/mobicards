import React, { Component } from 'react'
import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, Platform, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { handleAddDeck } from '../actions/decks'
import { createDeck } from '../utils/helpers'

class AddDeck extends Component {
  state = {
    name: '',
    activeOpacity: 1
  }

  handleInputChange = (value) => {
    this.setState((prevState) => ({
      name: prevState.name !== value ? value : prevState.name,
      activeOpacity: value ? 0.2 : 1
    }))
  }

  handleSubmitDeck = () => {
    const { name } = this.state
    if(name) {
      const deck = createDeck(name)
      this.props.dispatch(handleAddDeck(deck))
      this.handleInputChange('')
      this.props.navigation.navigate('DeckView', deck)
    }
  }

  render() {
    const { name } = this.state
    return(
      <KeyboardAvoidingView 
        keyboardVerticalOffset={20}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        >
          <View style={styles.inner}>
        <Text style={styles.title}>Add New Deck</Text>
        <TextInput
          style={styles.input}
          placeholder={'Deck Name'}
          onChangeText={this.handleInputChange}
          value={name}
        />
        <TouchableOpacity 
          style={styles.button}
          activeOpacity={this.state.activeOpacity}
          onPress={this.handleSubmitDeck}> 
          <Text style={styles.btnText}>Add Deck</Text>
        </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'stretch',
    margin: 10,
  },
  title: {
    fontSize: 30,
    textAlign: 'center'
  },
  input: {
    height: 50,
    fontSize: 20,
    borderColor: '#000000',
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#000000',
    borderColor: '#000000',
    borderRadius: 5,
    borderWidth: 2,
  },
  btnText: {
    fontSize: 20,
    color: '#ffffff',
  }
})

const mapStateToProps = (state) => {
  return state
}

//tab nav :: Decks/New Deck
export default connect(mapStateToProps)(AddDeck)