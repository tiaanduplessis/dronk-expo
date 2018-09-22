import { getRandomPlayer, getRandomSip } from './utils'

const generalCards = [
  () => `Buffalo! Anyone drinking with their right hand must take ${getRandomSip()} sips from now on.`,
  (players) => {
    const player = getRandomPlayer(players)
    return `${player} pick a mate. Everytime you drink, so does the other person.`
  },
  (players) => {
    const player1 = getRandomPlayer(players)
    const player2 = getRandomPlayer(players.filter(current => current !== player1))
    return `${player1} your new name is ${player2} and visa versa. Anyone incorrectly using your old name take ${getRandomSip()} sips.`
  },
  () => `All the boys in the group, take ${getRandomSip()} sips.`,
  () => `All the girls in the group, take ${getRandomSip()} sips.`
]

export default generalCards
