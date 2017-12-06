import React, { Component } from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { connect } from "react-redux"
import { mediumgray, teal, white } from "../utils/colors"

class PlayDeck extends Component {
  state = {
    correctlyAnsweredCards: [],
    incorrectlyAnsweredCards: [],
    show: "question",
    complete: false
  }

  componentDidMount = () => this.getActiveCard()

  getActiveCard = () => this.setState({activeCard: this.unansweredCard()})

  allCardsAnswered = () => this.answeredCards().length === this.props.cards.length

  answeredCards = () => {
    const correct = this.state.correctlyAnsweredCards
    const incorrect = this.state.incorrectlyAnsweredCards

    return correct.concat(incorrect)
  }

  answeredCardsCount = () => this.answeredCards().length

  unansweredCards = () => (
    this.props.cards.filter(card => !this.answeredCards().includes(card))
  )

  unansweredCard = () => (
    this.unansweredCards()[Math.floor(Math.random() * this.unansweredCards().length)]
  )

  flipCard = () => this.setState((previousState) => ({
    show: previousState.show === "question" ? "answer" : "question"
  }))

  markComplete = () => this.setState({complete: true})

  markCorrect = () => {
    this.setState((previousState) => ({
      correctlyAnsweredCards: previousState.correctlyAnsweredCards.concat([previousState.activeCard]),
      show: "question"
    }), this.getNextActiveCard)
  }

  markIncorrect = () => {
    this.setState((previousState) => ({
      incorrectlyAnsweredCards: previousState.incorrectlyAnsweredCards.concat([previousState.activeCard]),
      show: "question"
    }), this.getNextActiveCard)
  }
  getNextActiveCard = () => {
    if (this.allCardsAnswered()) {
      this.markComplete()
    } else {
      this.getActiveCard()
    }
  }

  render() {
    const { title, cards } = this.props
    const { activeCard, show, complete, correctlyAnsweredCards } = this.state

    if (complete) {
      return (
        <View style={styles.container}>
          <View style={styles.deckDetails}>
            <Text style={styles.deckHeading}>{title}</Text>
            <Text style={styles.deckCardCount}>{correctlyAnsweredCards.length} of {cards.length} cards answered correctly</Text>
          </View>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <View style={styles.deckDetails}>
          <Text style={styles.deckHeading}>{title}</Text>
          <Text style={styles.deckCardCount}>Card {this.answeredCardsCount() + 1} of {cards.length}</Text>
        </View>

        <View>
          {
            activeCard && <View style={styles.questionWrapper}>
              <Text style={styles.questionText}>{show === "question" ? activeCard.question : activeCard.answer}</Text>
              <Text style={styles.flipText} onPress={this.flipCard}>{show === "question" ? "show answer" : "show question"}</Text>
            </View>
          }
        </View>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button} onPress={this.markCorrect}>
            <Text style={styles.buttonText}>Correct</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.markIncorrect}>
            <Text style={styles.buttonText}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

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
  },

  questionText: {
    paddingBottom: 20
  },

  flipText: {
    color: mediumgray
  },

  questionWrapper: {
    alignItems: "center"
  }
})


const mapStateToProps = ({decks}, ownProps) => {
  const deck = decks.find(deck => deck.title === ownProps.navigation.state.params.title)

  return {
    ...ownProps,
    title: deck.title,
    cards: deck.cards
  }
}

export default connect(mapStateToProps)(PlayDeck)
