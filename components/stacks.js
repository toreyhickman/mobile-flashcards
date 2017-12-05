import React from "react"
import { StackNavigator } from "react-navigation"
import { teal, white } from "../utils/colors"
import Tabs from "./tabs"
import CardShow from "./card-show"

const Stacks = StackNavigator({
  Home: {
    screen: Tabs
  },
  CardShow: {
    screen: CardShow,
    path: "card/:title",
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
