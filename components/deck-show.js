import React, { Component } from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { connect } from "react-redux"
import { mediumgray, teal, white } from "../utils/colors"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 40,
    paddingBottom: 120
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
  },

  buttonWrapper: {
    height: 140,
    justifyContent: "space-between"
  },

  button: {
    width: 300,
    backgroundColor: teal,
    padding: 20,
    alignItems: "center",
    borderRadius: 4
  },

  buttonText: {
    color: white
  }
})

class DeckShow extends Component {
  hasCards = () => this.props.cards.length > 0

  goToDeckAddCard = () => {
    const { title } = this.props
    this.props.navigation.navigate("DeckAddCard", { title: title })
  }

  goToPlayDeck = () => {
    const { title } = this.props
    this.props.navigation.navigate("PlayDeck", { title: title })
  }

  render() {
    const { title, cards } = this.props

    console.log("Rendering ...")

    return (
      <View style={styles.container}>
        <View style={styles.deckDetails}>
          <Text style={styles.deckHeading}>{title}</Text>
          <Text style={styles.deckCardCount}>{cards.length} cards</Text>
        </View>

        <View style={styles.buttonWrapper}>
          { this.hasCards() &&
            <TouchableOpacity style={styles.button} onPress={this.goToPlayDeck}>
              <Text style={styles.buttonText}>Play Deck</Text>
            </TouchableOpacity>
          }

          <TouchableOpacity style={styles.button} onPress={this.goToDeckAddCard}>
            <Text style={styles.buttonText}>Add a Card</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapStateToProps = ({decks}, ownProps) => {
  const deck = decks.find(deck => deck.title === ownProps.navigation.state.params.title)

  return {...deck}
}

export default connect(mapStateToProps)(DeckShow)
