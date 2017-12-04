import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { white } from "./utils/colors"
import FlashcardsStatusBar from "./components/flashcards-status-bar"
import Tabs from "./components/tabs"
import reducer from "./reducers"
import { createStore, applyMiddleware, compose } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk)
  )
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <FlashcardsStatusBar />
          <Tabs />
        </View>
      </Provider>
    )
  }
}

