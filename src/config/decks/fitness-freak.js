import generalDeck from './general-deck'
import { getRandomPlayer, getRandomSip } from './utils'

export default {
  icon: 'fitness-center',
  description: 'A game for athletic social drinkers',
  cards: [
    ...generalDeck,
    () => `The group picks the person with the skinniest legs. He/She will now be known as chicken legs for the rest of the game and must take ${getRandomSip()} sips.`,
    (players) => {
      const player = getRandomPlayer(players)
      return `${player} do 20 push-ups or drink ${getRandomSip()} sips.`
    },
    (players) => {
      const player = getRandomPlayer(players)
      return `${player} do 30 squats or drink ${getRandomSip()} sips.`
    },
    (players) => {
      const player = getRandomPlayer(players)
      return `${player} who do you think is the most unfit player? He/She must take ${getRandomSip()} sips.`
    },
    (players) => {
      const player = getRandomPlayer(players)
      return `${player} who do you think is the strongest player? He/She must take ${getRandomSip()} sips.`
    },

    () => `If any player has gone to the gym today, he/she must take ${getRandomSip()} sips.`,
    (players) => {
      const player = getRandomPlayer(players)
      return `${player} keep walking until the next 6 cards are completed.`
    },
    (players) => {
      const player = getRandomPlayer(players)
      return `Starting with ${player}. Name free weight exercises. Loser must drink ${getRandomSip()} sips.`
    }
  ]
}
