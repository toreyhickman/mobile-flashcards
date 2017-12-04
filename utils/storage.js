import { AsyncStorage } from "react-native"

const DECK_STORAGE_KEY = "Flashcards"

export const fetchDecks = () => AsyncStorage.getItem(DECK_STORAGE_KEY)

export const addDeck = (key, deckData) => AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({[key]: deckData}))
