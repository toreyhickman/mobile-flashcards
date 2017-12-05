import { ASSIGN_DECKS, ADD_DECK, ADD_CARD } from "../actions/decks"

export function decks(state = [], action) {
  switch(action.type) {
    case ASSIGN_DECKS:
      return action.decks;
    case ADD_DECK:
      return state.concat([action.deck])
    case ADD_CARD:
      return state.map(deck => (
        deck.title !== action.deckTitle
        ? deck
        : {
          ...deck,
          cards: deck.cards.concat([action.cardData])
        }
      ))
    default:
      return state;
  }
}
