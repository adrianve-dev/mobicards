import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function NoCards(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>There are no cards in this deck available for a quiz.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  title: {
    fontSize: 30,
    textAlign: 'center'
  },
})