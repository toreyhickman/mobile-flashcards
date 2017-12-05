import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"
import { connect } from "react-redux"
import { mediumgray } from "../utils/colors"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 40,
    paddingBottom: 80
  },

  deckDetails: {
    alignItems: "center"
  },

  deckHeading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10
  },

  deckCardCount: {
    color: mediumgray
  }
})

class DeckShow extends Component {
  render() {
    const { title, cards } = this.props.deck

    return (
      <View style={styles.container}>
        <View style={styles.deckDetails}>
          <Text style={styles.deckHeading}>{title}</Text>
          <Text style={styles.deckCardCount}>{cards.length} cards</Text>
        </View>
      </View>
    )
  }
}

const mapStateToProps = ({decks}, ownProps) => ({
  deck: decks.find(deck => deck.title === ownProps.navigation.state.params.title)
})

export default connect(mapStateToProps)(DeckShow)
