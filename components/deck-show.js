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
  goToDeckAddCard = () => {
    const { title } = this.props.deck
    this.props.navigation.navigate("DeckAddCard", { title: title })
  }

  render() {
    const { title, cards } = this.props.deck

    return (
      <View style={styles.container}>
        <View style={styles.deckDetails}>
          <Text style={styles.deckHeading}>{title}</Text>
          <Text style={styles.deckCardCount}>{cards.length} cards</Text>
        </View>

        <View>
          <TouchableOpacity style={styles.button} onPress={this.goToDeckAddCard}>
            <Text style={styles.buttonText}>Add a Card</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapStateToProps = ({decks}, ownProps) => ({
  deck: decks.find(deck => deck.title === ownProps.navigation.state.params.title)
})

export default connect(mapStateToProps)(DeckShow)
