import React, { Component } from 'react'
import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, Platform, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { handleAddCard } from '../actions/cards'

class AddCard extends Component {
  state = {
    question: '',
    answer: '',
    activeOpacity: 1,
  }
  
  handleQuestionChange = (value) => {
    this.setState((prevState) => ({
      question: prevState.question !== value ? value : prevState.question,
      activeOpacity: value && prevState.answer !== '' ? 0.2 : 1,
    }))
  }

  handleAnswerChange = (value) => {
    this.setState((prevState) => ({
      answer: prevState.answer !== value ? value : prevState.answer,
      activeOpacity: value && prevState.question !== '' ? 0.2 : 1,
    }))
  }

  handleSubmitCard = () => {
    const { question, answer } = this.state
    if(question !== '' && answer !== '') {
      console.log('add card: route: ', this.props)
      this.props.dispatch(handleAddCard({
        id: '',
        question,
        answer,
        deckRef: this.props.route.params.cardsId
      }))
      this.props.navigation.navigate('DeckView', { name: this.props.route.params.name, cardsId: this.props.route.params.cardsId })
    }
  }

  render() {
    const { question, answer, activeOpacity } = this.state

    return(
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        enabled={true}
        >
        <Text style={styles.title}>Add New Card</Text>
        <TextInput
          style={styles.input}
          placeholder={'Question'}
          onChangeText={this.handleQuestionChange}
          value={question}
        />
        <TextInput
          style={styles.input}
          placeholder={'Answer'}
          onChangeText={this.handleAnswerChange}
          value={answer}
        />
        <TouchableOpacity 
          style={styles.button}
          activeOpacity={activeOpacity}
          onPress={this.handleSubmitCard}> 
          <Text style={styles.btnText}>Add Card</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
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

export default connect()(AddCard)