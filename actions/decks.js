export const GET_DECKS = 'GET_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const REMOVE_DECK = 'REMOVE_DECK'
export const UPDATE_DECKS = 'UPDATE_DECK'
import { asyncAddDeck, asyncUpdateDecks } from '../utils/api'
import { generateUID } from '../utils/helpers'

export function getDecks(decks) {
  return {
    type: GET_DECKS,
    decks
  }
}

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck
  }
}

export function removeDeck(id) {
  return {
    type: REMOVE_DECK,
    id
  }
}

export function updateDecks(newState) {
  return {
    type: UPDATE_DECKS,
    newState
  }
}

export function handleAddDeck(deck) {
  return (dispatch) => {

    asyncAddDeck(deck)
      .then((results) => {
        dispatch(addDeck(deck))
      })
      .catch((e) => console.log(e))
  }
}

export function handleRemoveDeck(id, decks) {
  return (dispatch) => {
    delete decks[id]
    asyncUpdateDecks(decks)
      .then(dispatch(updateDecks(decks)))      
      .catch((e) => console.log(e))
  }
}