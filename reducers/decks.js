import { GET_DECKS, ADD_DECK, REMOVE_DECK, UPDATE_DECKS } from '../actions/decks'

export default function decks(state = {}, action){
  switch(action.type){
    case GET_DECKS:
      return {
        ...state,
        ...action.decks
      }
    case ADD_DECK:
      return {
        ...state,
        [action.deck.id]: action.deck
      }
    case REMOVE_DECK:
      let newState = Object.assign({}, state) //don't mutate state
      newState[action.id] = undefined
      delete newState[action.id]
      
      return newState
    case UPDATE_DECKS:
      return action.newState
    default:
      return state

  }
}