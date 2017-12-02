import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { white } from "./utils/colors"
import FlashcardsStatusBar from "./components/flashcards-status-bar"

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlashcardsStatusBar />
        <View style={styles.centered}>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>
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
