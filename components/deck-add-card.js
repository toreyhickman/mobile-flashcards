import React, { Component } from "react"
import { View, Text } from "react-native"

class DeckAddCard extends Component {
  render() {
    return (
      <View>
        <Text>{JSON.stringify(this.props)}</Text>
      </View>
    )
  }
}

export default DeckAddCard
