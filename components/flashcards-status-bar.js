import React from "react"
import { StyleSheet, View, StatusBar } from "react-native"
import { Constants } from "expo"
import { teal } from "../utils/colors"

export default () => (
  <View style={styles.statusBarWrapper}>
    <StatusBar translucent backgroundColor={teal} barStyle="light-content" />
  </View>
)

const styles = StyleSheet.create({
  statusBarWrapper: {
    height: Constants.statusBarHeight,
    backgroundColor: teal
  }
})
