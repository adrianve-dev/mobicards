import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function QuizQuestion(props) {
  const {question, questionsLeft, handleShowAnswer} = props
  return (
    <View style={styles.container}>
      <View style={styles.txtContainer}>
        <Text style={styles.title}>{question}</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleShowAnswer}
          >
          <Text style={styles.btnText}>Show Answer</Text>
        </TouchableOpacity>
        <Text style={styles.text}>{questionsLeft} Questions Left</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'stretch',
    margin: 10
  },
  title: {
    fontSize: 30,
    textAlign: 'center'
  },
  txtContainer: {
    flex: 3,
    justifyContent: 'center',
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
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
  },
  text: {
    fontSize: 20,
    color: '#000000',
    textAlign: 'center'
  }
})