import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function QuizAnswer(props) {
  const {answer, handleQuestionResult} = props
  return (
    <View style={styles.container}>
      <View style={styles.txtContainer}>
        <Text style={styles.title}>{answer}</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={[styles.button, styles.greenButton]}
          onPress={() => handleQuestionResult(true)}
          >
          <Text style={styles.btnText}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.redButton]}
          onPress={() => handleQuestionResult(false)}
          >
          <Text style={styles.btnText}>Incorrect</Text>
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
    borderRadius: 5,
    borderWidth: 2,
  },
  greenButton: {
    backgroundColor: '#0fff50',
    borderColor: '#0fff50',
  },
  redButton: {
    backgroundColor: '#ff0f30',
    borderColor: '#ff0f30',
  },
  btnText: {
    fontSize: 20,
    color: '#ffffff',
  }
})