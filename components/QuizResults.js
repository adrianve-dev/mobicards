import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { getPercent, clearLocalNotification, setLocalNotification } from '../utils/helpers'

export default function QuizResults(props) {
  const {numCorrect, numQuestions, handleRestartQuiz, handleBackToDeck} = props
  
  clearLocalNotification()
    .then(() => setLocalNotification());

  return (
    <View style={styles.container}>
      <View style={styles.txtContainer}>
        <Text style={styles.title}>Quiz Results</Text>
        <Text style={styles.results}>{`${getPercent(numCorrect,numQuestions)}%`}</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={[styles.buttons, styles.whiteButton]}
          onPress={handleRestartQuiz}
          >
          <Text style={[styles.text, styles.blackText]}>Restart Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttons, styles.blackButton]}
          onPress={handleBackToDeck}
          >
          <Text style={[styles.text, styles.whiteText]}>Back to Deck</Text>
        </TouchableOpacity>
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
  txtContainer: {
    flex: 3,
    justifyContent: 'space-evenly',
    alignItems: 'stretch',
  },
  title: {
    flex: 1,
    fontSize: 30,
    textAlign: 'center'
  },
  results: {
    flex: 2,
    fontSize: 50,
    textAlign: 'center'
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  buttons: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 2,
  },
  whiteButton:{
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',

  },
  blackButton: {
    backgroundColor: '#000000',
    borderColor: '#000000',
  },
  text: {
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center'
  },
  whiteText: {
    color: '#ffffff',
  },
  blackText: {
    color: '#000000',
  },
})