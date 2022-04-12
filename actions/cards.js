export const GET_CARDS = 'GET_CARDS'
export const ADD_CARD = 'ADD_CARD'
export const UPDATE_CARDS = 'UPDATE_CARDS'
import { getStoredCards, asyncAddCard, asyncUpdateCards } from '../utils/api'
import { generateUID } from '../utils/helpers'

export function getCards(cards) {
  return {
    type: GET_CARDS,
    cards
  }
}

export function addCard(card) {
  return {
    type: ADD_CARD,
    card
  }
}

export function updateCards(newState) {
  return {
    type: UPDATE_CARDS,
    newState
  }
}

export function handleGetCards() {
  return (dispatch) => {
    getStoredCards()          
    .then((results) => {
      let cards = JSON.parse(results)
      console.log('handleGetCards res: ', cards)
      dispatch(getCards(cards))
    })
  }
}

export function handleAddCard (card) {
  return (dispatch) => {
    card.id = generateUID()
    asyncAddCard(card)
      .then((results) => {
        dispatch(addCard(card))
      })
      .catch((e) => console.log(e))
  }
}

export function handleRemoveCards(id, cards) {
  return (dispatch) => {
    delete cards[id]
    asyncUpdateCards(cards)
      .then(dispatch(updateCards(cards)))      
      .catch((e) => console.log(e))
  }
}