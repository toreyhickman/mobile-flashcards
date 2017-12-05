import React, { Component } from "react"
import { View, Text, StyleSheet, KeyboardAvoidingView, TextInput, Keyboard } from "react-native"
import { lightgray, teal, white } from "../utils/colors"
import Button from "./button"
import { connect } from "react-redux"
import { saveDeck } from "../actions/decks"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: white
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.decks.map(deck => deck.title).includes(this.state.title)) {
      this.postDeckCreationActions()
    }
  }

  updateTitle = (value) => {
    this.setState({title: value})
  }

  submitDeck = () => {
    this.props.saveDeck(this.newDeckData())
  }

  newDeckData = () => ({
    title: this.state.title,
    cards: []
  })

  postDeckCreationActions = () => {
    Keyboard.dismiss()
    this.props.navigation.navigate("DeckShow", {title: this.state.title})
    this.setState(initialState)
  }

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

const mapStateToProps = ({decks}, ownProps) => ({
  ...ownProps,
  decks
})

const mapDispatchToProps = (dispatch) => ({
  saveDeck: (deck) => dispatch(saveDeck(deck))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateDeck)
