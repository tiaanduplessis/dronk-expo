import React from 'react'
import { UIManager } from 'react-native'
import { Provider } from 'unstated'
import { Provider as PaperProvider } from 'react-native-paper'
import { Font, AppLoading } from 'expo'

import Navigation from './src/Navigation'

import theme from './src/config/theme'

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true)

export default class App extends React.Component {
  state = {
    fontLoaded: false
  }

  async componentDidMount () {
    await Font.loadAsync({
      'GloriaHallelujah': require('./src/fonts/GloriaHallelujah.ttf')
    })

    this.setState({ fontLoaded: true })
  }

  render () {
    const { fontLoaded } = this.state

    if (!fontLoaded) {
      return <AppLoading />
    }

    return (
      <PaperProvider theme={theme}>
        <Provider>
          <Navigation />
        </Provider>
      </PaperProvider>

    )
  }
}
