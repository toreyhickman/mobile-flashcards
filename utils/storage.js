import { AsyncStorage } from "react-native"

const DECK_STORAGE_KEY = "Flashcards"

export const fetchDecks = () => AsyncStorage.getItem(DECK_STORAGE_KEY)

export const addDeck = (key, deckData) => AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({[key]: deckData}))

export const addCardToDeck = (deckTitle, cardData) => (
  fetchDecks()
  .then(result => {
    const parsedResult = JSON.parse(result)
    const deckData = {
      ...parsedResult[deckTitle],
      cards: parsedResult[deckTitle].cards.concat([cardData])
    }

    addDeck(deckTitle, deckData)
  })
)
