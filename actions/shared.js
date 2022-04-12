import { getStoredDecks, getStoredCards, asyncUpdateDecks } from '../utils/api'
import { getDecks, updateDecks } from './decks'
import { getCards, updateCards } from './cards'

export function handleGetAllData () {
  return (dispatch) => {
    getStoredDecks()
    .then((results) => {
      let decks = JSON.parse(results)
      dispatch(getDecks(decks))        
    })
    getStoredCards()          
    .then((results) => {
      let cards = JSON.parse(results)
      dispatch(getCards(cards))
    })
  }
}