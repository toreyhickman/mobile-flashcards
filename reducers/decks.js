import { ASSIGN_DECKS, ADD_DECK } from "../actions/decks"

export function decks(state = [], action) {
  switch(action.type) {
    case ASSIGN_DECKS:
      return action.decks;
    case ADD_DECK:
      return state.concat([action.deck])
    default:
      return state;
  }
}
