import React, { Component } from 'react'
import { useIsFocused } from '@react-navigation/native'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Card } from 'react-native-paper'
import { connect } from 'react-redux'
import { handleRemoveDeck } from '../actions/decks'
import { handleGetCards, handleRemoveCards } from '../actions/cards'

class DeckView extends Component {

  handleDeleteDeck = () => {
    const {decks, cards, navigation, route, dispatch} = this.props
    const {id} = route.params
    const cardsId = decks[id].cardsId
    
    dispatch(handleRemoveDeck(id, decks))

    //remove cards only if they exist
    if(cards[cardsId]) {
      dispatch(handleRemoveCards(cardsId, cards))
    }

    navigation.navigate('Home')
  }

  render(){
  const { cards, navigation, route } = this.props
  const { name, cardsId } = route.params

    return(
      <View style={styles.container}>
        <View style={styles.txtContainer}>
          <Text style={[styles.subtitle, styles.titleText]}>{`${cards && cards[cardsId] ? Object.keys(cards[cardsId]).length : 0}`} cards</Text>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity 
            style={[styles.whiteButton, styles.buttons]}
            onPress={() => navigation.navigate('AddCard', { name, cardsId: cardsId })}> 
            <Text style={[styles.text, styles.blackText]}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.blackButton, styles.buttons]}
            onPress={() => navigation.navigate('Quiz', {deckRef: cardsId})}> 
            <Text style={[styles.text, styles.whiteText]}>Start Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.deleteButton, styles.buttons]}
            onPress={this.handleDeleteDeck}> 
            <Text style={[styles.text, styles.redText]}>Delete Deck</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    alignItems: 'stretch',
  },
  subtitle: {
    fontSize: 25,
  },
  txtContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  titleText: {
    textAlign: 'center',
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  buttons: {
    height: 50,
    borderRadius: 5,
    borderWidth: 2,
    justifyContent: 'center',
  },
  whiteButton:{
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
  },
  blackButton: {
    backgroundColor: '#000000',
    borderColor: '#000000',
  },
  deleteButton: {
    borderColor: '#ff0000',
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
  redText: {
    color: '#ff0000',
  }
})

const mapStateToProps = ({decks, cards}) => {
  return {
    decks,
    cards
  }
}

export default connect(mapStateToProps)(DeckView)