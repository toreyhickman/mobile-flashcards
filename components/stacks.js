import React from "react"
import { StackNavigator } from "react-navigation"
import { teal, white } from "../utils/colors"
import Tabs from "./tabs"
import DeckShow from "./deck-show"
import DeckAddCard from "./deck-add-card"

const Stacks = StackNavigator({
  Home: {
    screen: Tabs
  },
  DeckShow: {
    screen: DeckShow,
    path: "decks/:title",
    navigationOptions: {
      headerTitle: "Deck",
      headerTintColor: white,
      headerStyle: {
        backgroundColor: teal
      }
    }
  },
  DeckAddCard: {
    screen: DeckAddCard,
    path: "decks/:title/cards/new",
    navigationOptions: {
      headerTitle: "Add a Card",
      headerTintColor: white,
      headerStyle: {
        backgroundColor: teal
      }
    }
  }
})

export default Stacks
