import React, { Component } from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"
import * as Storage from "../utils/storage"
import { connect } from "react-redux"
import { getDecks } from "../actions/decks"
import DeckListItem from "./deck-list-item"
import { white } from "../utils/colors"
import { NavigationActions } from "react-navigation"


class DeckList extends Component {
  componentDidMount() {
    this.props.getDecks()
  }

  goToDeck = (deckTitle) => {
    this.props.navigation.navigate("CardShow", { title: deckTitle })
  }

  renderItem = ({item}) => (
    <DeckListItem {...item} goToDeck={this.goToDeck} />
  )

  render() {
    const decks = this.props.decks

    if (decks.length === 0) {
      return (
        <View style={[styles.container, styles.centered]}>
          <Text>There are no decks.</Text>
          <Text>Create a deck to play.</Text>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <FlatList data={decks} renderItem={this.renderItem} keyExtractor={(deck) => deck.title} />
      </View>
    )
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white
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
