import { GET_CARDS, ADD_CARD, UPDATE_CARDS } from '../actions/cards'

export default function cards(state = {}, action) {
  switch(action.type){
    case GET_CARDS:
      return {
        ...state,
        ...action.cards
      }
    case ADD_CARD:
      const {id, question, answer, deckRef} = action.card
      return {
        ...state,
        [deckRef]: {
          ...state[deckRef],
          [id]: {
            id,
            question,
            answer
          }
        }
      }
    case UPDATE_CARDS:
      return action.newState
    default:
      return state

  }
}