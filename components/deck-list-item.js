import React, { Component } from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"
import { gray, mediumgray } from "../utils/colors"


export default ({title, cards, goToDeck}) => (
  <TouchableOpacity style={styles.deckListItem} onPress={() => goToDeck (title)}>
    <Text style={styles.deckListHeading}>{title}</Text>
    <Text style={styles.deckListCardCount}>{cards.length} cards</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  deckListItem: {
    paddingTop: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    borderBottomWidth: 1,
    borderColor: gray,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  deckListHeading: {
    fontSize: 30,
    fontWeight: "bold"
  },

  deckListCardCount: {
    color: mediumgray
  }
})
