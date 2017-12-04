import * as Storage from "../utils/storage"


export const ASSIGN_DECKS = "ASSIGN_DECKS"
export const ADD_DECK = "ADD_DECK"

const assignDecks = (decks) => {
  return {
    type: ASSIGN_DECKS,
    decks
  }
}

const addDeck = (deck) => ({
  type: ADD_DECK,
  deck
})

export const getDecks = () => (
  (dispatch) => {
    Storage.fetchDecks()
    .then(results => {
      if (!results) {
        return dispatch(assignDecks([]))
      }

      const parsedResults = JSON.parse(results)
      const decks = Object.keys(parsedResults).map(key => parsedResults[key])
      dispatch(assignDecks(decks))
    })
  }
)

export const saveDeck = (deck) => (
  (dispatch) => {
    Storage.addDeck(deck.title, deck)
    .then(() => dispatch(addDeck(deck)))
  }
)
