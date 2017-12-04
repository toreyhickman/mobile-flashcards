import React, { Component } from "react"
import { View, Text, StyleSheet, KeyboardAvoidingView, TextInput, Keyboard } from "react-native"
import { lightgray, teal } from "../utils/colors"
import Button from "./button"
import * as Storage from "../utils/storage"
import { connect } from "react-redux"
import { saveDeck } from "../actions/decks"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  inputWrapper: {
    marginTop: 10,
    width: "100%",
    flexDirection: "row",
    paddingTop: 20,
    paddingRight: 40,
    paddingLeft: 40
  },

  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 4,
    flex: 1,
    padding: 5,
    backgroundColor: lightgray
  }
})

const initialState = {title: ""}

class CreateDeck extends Component {
  state = initialState

  updateTitle = (value) => {
    this.setState({title: value})
  }

  submitDeck = () => {
    this.props.saveDeck(this.newDeckData())
    this.resetTitle()
    Keyboard.dismiss()
    this.props.navigation.navigate("DeckList", {params: ""})
  }

  newDeckData = () => ({
    title: this.state.title,
    cards: []
  })

  resetTitle = () => this.setState(initialState)

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text>What is the title of your new deck?</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            value={this.state.title}
            onChangeText={this.updateTitle}
            returnKeyType="done"
            selectionColor={teal}
          />
        </View>
        <Button onPress={this.submitDeck}>Create Deck</Button>
      </KeyboardAvoidingView>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveDeck: (deck) => dispatch(saveDeck(deck))
})

export default connect(null, mapDispatchToProps)(CreateDeck)
