import { Container } from 'unstated'

import randomize from '../utils/randomize'

class ActiveDeck extends Container {
    state = {
      description: '',
      cards: [],
      index: 0
    }

    async set (newDeck = {}) {
      const { description, cards } = newDeck

      await this.setState({
        description,
        cards: randomize(cards),
        index: 0
      })
    }

    async getCard () {
      const { cards, index } = this.state
      const card = cards[index]
      await this.setState({ index: index + 1 })
      return card
    }
}

export default new ActiveDeck()
