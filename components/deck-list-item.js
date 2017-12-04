import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"
import { gray, mediumgray } from "../utils/colors"

export default class DeckListItem extends Component {
  render() {


    return (
      <View style={styles.deckListItem}>
        <Text style={styles.deckListHeading}>{this.props.title}</Text>
        <Text style={styles.deckListCardCount}>{this.props.questions.length} cards</Text>
      </View>
    )
  }
}

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
