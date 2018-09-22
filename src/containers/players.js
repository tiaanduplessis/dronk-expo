import { Container } from 'unstated'

class Players extends Container {
    state = {
      players: []
    }

    set (newPlayers = []) {
      return this.setState({
        players: newPlayers
      })
    }
}

export default new Players()
