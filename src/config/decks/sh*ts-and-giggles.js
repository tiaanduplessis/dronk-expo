
import generalDeck from './general-deck'
import { getRandomPlayer, getRandomSip } from './utils'

export default {
  icon: 'face',
  description: 'A game for the hell of it',
  cards: [
    ...generalDeck,
    () => `If you are playing with an ex, take ${getRandomSip()} sips.`,
    (players) => {
      const player = getRandomPlayer(players)
      return `${player} keep walking until the next 6 cards are completed.`
    },
    (players) => {
      const player = getRandomPlayer(players)
      return `Starting with ${player}. Name car manufacturers. Loser must drink ${getRandomSip()} sips.`
    },
    (players) => {
      const player = getRandomPlayer(players)
      return `${player} keep standing on one leg for the next 7 cards.`
    },
    () => `If you have ever made a child cry, take ${getRandomSip()} sips.`,
    () => `If you are a ginger, take ${getRandomSip()} sips.`,
    () => `If you have ever send someone to the hospital, take ${getRandomSip()} sips.`,
    (players) => {
      const player = getRandomPlayer(players)
      return `Starting with ${player}. Start rhyming words. Loser must drink ${getRandomSip()} sips.`
    },
    (players) => {
      const player = getRandomPlayer(players)
      return `${player} take a sip for every country you've been to.`
    },
    () => `If you have ever been on TV or the radio, take ${getRandomSip()} sips.`,
    () => `If you have ever cheated on a test, take ${getRandomSip()} sips.`,
    () => `If you have ever gotten stitches, take ${getRandomSip()} sips.`,
    () => `Take ${getRandomSip()} sips if you have ever accidentally said “I love you” to someone.`,
    () => `Take ${getRandomSip()} sips if you have ever sung karaoke in front of people.`
  ]
}
