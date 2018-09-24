import React, { Component } from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'
import { Button } from 'react-native-paper'

import activeDeck from '../../containers/active-deck'
import players from '../../containers/players'

class GameDeck extends Component {
    state = {
      text: '',
      isGameDone: false,
      bgColor: '#ffb677',
      color: new Animated.Value(0),
      btnColor: new Animated.Value(0)
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
        }, () => this.doTransition())
      } catch (error) {
        console.log(error)
        this.handleBack()
      }
    }

    doTransition = () => {
      Animated.timing(this.state.color, {
        toValue: Math.floor(Math.random() * 256),
        duration: 400
      }).start();
      Animated.timing(this.state.btnColor, {
        toValue: Math.floor(Math.random() * 256),
        duration: 400
      }).start();
    }

    handleBack = () => this.props.navigation.goBack()

    render () {
      const { text, isGameDone, bgColor } = this.state

      const currentText = isGameDone ? 'Done! Thanks for playing' : text
      const btnText = isGameDone ? 'New game' : 'Next'
      const btnHandler = isGameDone ? this.handleBack : this.handleNextCard

      let color = this.state.color.interpolate({
        inputRange: [0, 255],
        outputRange: ['rgba(20, 100, 211, 1)', 'rgba(200, 29, 10, 1)']
      });

      let btnColor = this.state.btnColor.interpolate({
        inputRange: [0, 255],
        outputRange: ['rgba(20, 100, 211, 1)', 'rgba(200, 29, 10, 1)']
      });

      return (
        <Animated.View style={{ flex: 1 , backgroundColor: color}}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{currentText}</Text>
          </View>
          <Button
            mode='outlined'
            color='#fff'
            onPress={btnHandler} style={[styles.btn, { backgroundColor: btnColor}]} type='contained' dark>{btnText}</Button>
        </Animated.View>
      )
    }
}

const styles = StyleSheet.create({
  textContainer: { flex: 1, alignItems: 'center', justifyContent: 'center', margin: 10 },
  text: { color: '#fff', textAlign: 'center', fontSize: 30 },
  btn: { margin: 10 }
})

export default GameDeck
