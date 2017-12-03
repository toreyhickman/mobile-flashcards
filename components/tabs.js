import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { TabNavigator } from "react-navigation"
import { FontAwesome, Foundation } from "@expo/vector-icons"
import { white, teal, lightgray } from "../utils/colors"
import DeckList from "./deck-list"
import CreateDeck from "./create-deck"

const tabs = {
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: "Decks",
      tabBarIcon: ({ tintColor }) => <Foundation name="list" size={30} color={tintColor} d/>
    }
  },
  CreateDeck: {
    screen: CreateDeck,
    navigationOptions: {
      tabBarLabel: "Create a Deck",
      tabBarIcon: ({ tintColor }) => <FontAwesome name="plus" size={30} color={tintColor} />,
    }
  }
}

const options = {
  navigationOptions: {
    header: null
  },

  tabBarOptions: {
    activeTintColor: teal,
    style: {
      height: 56,
      backgroundColor: lightgray
    }
  }
}


export default TabNavigator(tabs, options)
