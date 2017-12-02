import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { white } from "./utils/colors"
import FlashcardsStatusBar from "./components/flashcards-status-bar"
import Tabs from "./components/tabs"

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlashcardsStatusBar />
        <Tabs />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white
  },

  centered: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})
