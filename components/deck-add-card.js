import React, { Component } from "react"
import { View, Text, StyleSheet, KeyboardAvoidingView, TextInput, Keyboard } from "react-native"
import { lightgray, teal, white, mediumgray } from "../utils/colors"
import Button from "./button"
import { connect } from "react-redux"
import { saveCard } from "../actions/decks"

const initialState = {
  question: "",
  answer: ""
}

class DeckAddCard extends Component {
  state = initialState

  updateQuestion = (value) => this.setState({question: value})

  updateAnswer = (value) => this.setState({answer: value})

  reset = () => this.setState(initialState)

  submitCard = () => {
    const cardData = this.newCardData()

    if (cardData.question && cardData.answer) {
      this.props.saveCard(this.props.deck.title, cardData)
      this.reset()
      Keyboard.dismiss()
    }
  }

  newCardData = () => ({
    question: this.state.question,
    answer: this.state.answer
  })

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.deckDetails}>
          <Text style={styles.deckHeading}>{this.props.deck.title}</Text>
          <Text style={styles.deckCardCount}>{this.props.deck.cards.length} cards</Text>
        </View>

        <Text>What is the question?</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            value={this.state.question}
            onChangeText={this.updateQuestion}
            returnKeyType="done"
            selectionColor={teal}
          />
        </View>

        <Text>What is the answer?</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            value={this.state.answer}
            onChangeText={this.updateAnswer}
            returnKeyType="done"
            selectionColor={teal}
          />
        </View>

        <Button onPress={this.submitCard}>Add Card</Button>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: white,
    paddingTop: 40,
  },

  inputWrapper: {
    marginTop: 0,
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
    backgroundColor: lightgray,
    marginBottom: 20
  },

  deckDetails: {
    alignItems: "center",
    marginBottom: 80
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

const mapStateToProps = ({decks}, ownProps) => ({
  deck: decks.find(deck => deck.title === ownProps.navigation.state.params.title)
})

const mapDispatchToProps = (dispatch) => ({
  saveCard: (deckTitle, cardData) => dispatch(saveCard(deckTitle, cardData))
})

export default connect(mapStateToProps, mapDispatchToProps)(DeckAddCard)
