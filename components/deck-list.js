import React, { Component } from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"
import * as Storage from "../utils/storage"
import { connect } from "react-redux"
import { getDecks } from "../actions/decks"

const renderItem = (item) => (
  <View>
    <Text>{JSON.stringify(item)}</Text>
  </View>
)

class DeckList extends Component {
  componentDidMount() {
    this.props.getDecks()
  }

  render() {
    const decks = this.props.decks

    console.log("Decks:", decks)

    if (decks.length === 0) {
      return (
        <View style={[styles.container, styles.centered]}>
          <Text>There are no decks.</Text>
          <Text>Create a deck to play.</Text>
        </View>
      )
    }

    console.log("Did not return, decks length: ", decks.length)

    return (
      <View style={styles.container}>
        <FlatList data={decks} renderItem={renderItem} keyExtractor={(deck) => deck.title} />
      </View>
    )
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1
  },

  centered: {
    justifyContent: "center",
    alignItems: "center"
  }
})

const mapStateToProps = ({decks}, ownProps) => ({
  ...ownProps,
  decks
})

const mapDispatchToProps = (dispatch) => ({
  getDecks: () => dispatch(getDecks())
})

export default connect(mapStateToProps, mapDispatchToProps)(DeckList)
