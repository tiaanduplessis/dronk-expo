import React, { Component } from 'react'
import { View, StatusBar, FlatList } from 'react-native'
import { Appbar, List } from 'react-native-paper'

import decks from '../../config/decks/index'

import activeDeck from '../../containers/active-deck'

const data = Object.entries(decks).map(([title, detail]) => {
  return {
    icon: detail.icon,
    title,
    description: detail.description
  }
})

class ChooseGame extends Component {
    handleDeckSelected = (deckTitle) => async () => {
      await activeDeck.set(decks[deckTitle])
      this.props.navigation.navigate('GameDeck')
    }

    handleBack = () => this.props.navigation.goBack()

    render () {
      return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
          <StatusBar barStyle='light-content' />
          <Appbar.Header dark>
            <Appbar.BackAction
              onPress={this.handleBack}
            />
            <Appbar.Content title='Choose a deck' />
          </Appbar.Header>
          <FlatList
            data={data}
            keyExtractor={(item, index) => item.title}
            renderItem={({ item }) => <List.Item
              left={props => <List.Icon {...props} icon={item.icon} />}
              onPress={this.handleDeckSelected(item.title)}
              title={item.title}
              description={item.description}
            />}
          />
        </View>
      )
    }
}

export default ChooseGame
