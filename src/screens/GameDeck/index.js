import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'

import activeDeck from '../../containers/active-deck'
import players from '../../containers/players'

class GameDeck extends Component {
    state = {
      text: '',
      isGameDone: false,
      bgColor: '#ffb677'
    }

    async componentDidMount () {
      await this.handleNextCard()
    }

    getRandomColor = () => {
      const colors = ['#ffb677', '#ffd98e', '#6bd5e1']
      const index = Math.floor(Math.random() * colors.length)
      return colors[index]
    }

    handleNextCard = async () => {
      try {
        const card = await activeDeck.getCard()

        this.setState({
          text: card ? card(players.state.players) : '',
          isGameDone: !card,
          bgColor: this.getRandomColor()
        })
      } catch (error) {
        console.log(error)
        this.handleBack()
      }
    }

    handleBack = () => this.props.navigation.goBack()

    render () {
      const { text, isGameDone, bgColor } = this.state

      const currentText = isGameDone ? 'Done! Thanks for playing' : text
      const btnText = isGameDone ? 'New game' : 'Next'
      const btnHandler = isGameDone ? this.handleBack : this.handleNextCard

      return (
        <View style={{ flex: 1, backgroundColor: bgColor }}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{currentText}</Text>
          </View>
          <Button
            mode='outlined'
            color='#fff'
            onPress={btnHandler} style={styles.btn} type='contained' dark>{btnText}</Button>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  textContainer: { flex: 1, alignItems: 'center', justifyContent: 'center', margin: 10 },
  text: { color: '#fff', textAlign: 'center', fontSize: 30 },
  btn: { margin: 10 }
})

export default GameDeck
