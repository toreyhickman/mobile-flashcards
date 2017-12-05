import React from "react"
import { StackNavigator } from "react-navigation"
import { teal, white } from "../utils/colors"
import Tabs from "./tabs"
import DeckShow from "./deck-show"

const Stacks = StackNavigator({
  Home: {
    screen: Tabs
  },
  DeckShow: {
    screen: DeckShow,
    path: "deck/:title",
    navigationOptions: {
      headerTitle: "Deck",
      headerTintColor: white,
      headerStyle: {
        backgroundColor: teal
      }
    }
  }
})

export default Stacks
