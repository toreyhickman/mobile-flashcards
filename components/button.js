import React from "react"
import { StyleSheet, TouchableOpacity, Text } from "react-native"
import { white, teal } from "../utils/colors"

export default ({children, onPress}) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>
      {children}
    </Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  button: {
    margin: 20,
    padding: 20,
    backgroundColor: teal,
    borderRadius: 4
  },

  buttonText: {
    color: white
  }
})
