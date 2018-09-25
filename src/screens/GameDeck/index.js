import React, { Component } from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'
import { Button } from 'react-native-paper'

import activeDeck from '../../containers/active-deck'
import players from '../../containers/players'
import getRandomMoraleBooster from '../../utils/get-random-morale-booster'

class GameDeck extends Component {
    state = {
      text: '',
      isGameDone: false,
      bgColor: '#ffb677',
      currentIndex: 0,
      color: new Animated.Value(0),
      btnColor: new Animated.Value(0),
      overlay: {
        height: new Animated.Value(0),
        width: new Animated.Value(0),
        rad: new Animated.Value(0)
      },
      mask: {
        height: new Animated.Value(0),
        width: new Animated.Value(0),
        rad: new Animated.Value(0)
      },
      animating: false
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
          isGameDone: !card,
          bgColor: this.getRandomColor()
        }, () => {
          this.changeLabel(card ? card(players.state.players) : '')
          this.interimLabel()
          this.doTransition()
        })
      } catch (error) {
        console.log(error)
        this.handleBack()
      }
    }

    doTransition = () => {
      Animated.sequence([
        this.openMask(),
        Animated.delay(570),
        this.hideOverlay(),
        this.hideMask(),
        this.openOverlay(),
      ]).start()
    }

    openOverlay = () =>{
      const {width, height, rad} = this.state.overlay
      const duration = 300
      return Animated.parallel([
        Animated.timing(this.state.color, {
          toValue: Math.floor(Math.random() * 256),
          duration
        }),
        Animated.timing(this.state.btnColor, {
          toValue: Math.floor(Math.random() * 256),
          duration
        }),
        Animated.timing(height, {
          toValue: 1000,
          duration
        }),
        Animated.timing(width, {
          toValue: 1000,
          duration
        }),
        Animated.timing(rad, {
          toValue: 500,
          duration
        })
      ])
    }

    hideOverlay = () =>{
      const {width, height, rad} = this.state.overlay
      return Animated.parallel([
        Animated.timing(height, {
          toValue: 0,
          duration: 1
        }),
        Animated.timing(width, {
          toValue: 0,
          duration: 1
        }),
        Animated.timing(rad, {
          toValue: 0,
          duration: 1
        })
      ])
    }

    openMask = () =>{
      const {width, height, rad} = this.state.mask
      const duration = 300
      return Animated.parallel([
              Animated.timing(height, {
                toValue: 1000,
                duration
              }),
              Animated.timing(width, {
                toValue: 1000,
                duration
              }),
              Animated.timing(rad, {
                toValue: 500,
                duration
              })
            ])
    }

    hideMask = () =>{
      const {width, height, rad} = this.state.mask
      return Animated.parallel([
        Animated.timing(height, {
          toValue: 0,
          duration: 1
        }),
        Animated.timing(width, {
          toValue: 0,
          duration: 1
        }),
        Animated.timing(rad, {
          toValue: 0,
          duration: 1
        })
      ])
    }

    interimLabel = () =>{
      setTimeout(() => {
        this.setState({
          text: getRandomMoraleBooster(),
          animating : true
        })
      }, 200);
    }

    changeLabel = (text) =>{
      setTimeout(() => {
        this.setState({text, animating : false, currentIndex: this.state.currentIndex + 1})
      }, 1000);
    }

    handleBack = () => this.props.navigation.goBack()

    render () {
      const { text, isGameDone, animating, currentIndex, overlay, mask } = this.state
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

      let overlayStyles = {
        height: overlay.height,
        width: overlay.width,
        borderRadius: overlay.rad,
        backgroundColor: color
      }

      let maskStyles = {
        height: mask.height,
        width:mask.width,
        borderRadius: mask.rad,
        backgroundColor: "#fff"
      }

      return (
        <Animated.View style={styles.container}>
          <Animated.View style={[styles.overlay, overlayStyles]}></Animated.View>
          <Animated.View style={[styles.overlay, maskStyles]}></Animated.View>
          <View style={styles.textContainer}>
            {
              currentIndex === 0 ? null :
              <Animated.Text style={[styles.text, {color: animating ? color : "#fff" }]}>{text}</Animated.Text>
            }
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
  container: { flex: 1 , backgroundColor: '#fff', overflow: 'hidden'},
  textContainer: { flex: 1, alignItems: 'center', justifyContent: 'center', margin: 10 },
  text: { color: '#fff', textAlign: 'center', fontSize: 30 },
  btn: { margin: 10 },
  overlay:{ backgroundColor: 'black', position: 'absolute', bottom: -250, left: -290}
})

export default GameDeck
