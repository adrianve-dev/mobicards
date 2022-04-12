import AsyncStorage from '@react-native-async-storage/async-storage'

export const DECKS_STORAGE_KEY = 'adrianve-mobicards:decks'

export const CARDS_STORAGE_KEY = 'adrianve-mobicards:cards'

export function getStoredDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
}

export function getStoredCards() {
  return AsyncStorage.getItem(CARDS_STORAGE_KEY)
}

export function asyncAddDeck (deck) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, 
    JSON.stringify({
      [deck.id]: deck              
    }))
}

export function asyncUpdateDecks (decks) {
  return AsyncStorage.setItem(DECKS_STORAGE_KEY, 
    JSON.stringify(decks))
}

export function asyncAddCard (card) {
  return AsyncStorage.mergeItem(CARDS_STORAGE_KEY, 
    JSON.stringify({
      [card.deckRef]: {
        [card.id]: card
      }     
    }))
}

export function asyncUpdateCards (cards) {
  return AsyncStorage.setItem(CARDS_STORAGE_KEY, 
    JSON.stringify(cards))
}