import generalDeck from './general-deck'
import { getRandomPlayer, getRandomSip } from './utils'

export default {
  icon: 'code',
  description: 'For coders with too many deadlines',
  cards: [
    ...generalDeck,
    (players) => {
      const player = getRandomPlayer(players)
      return `${player}, if you have ever coded in Scala, take ${getRandomSip()} sips.`
    },
    (players) => {
      const player = getRandomPlayer(players)
      return `${player}, if you have ever coded in Javascript, take ${getRandomSip()} sips.`
    },
    () => `If you are a frontend developer, take ${getRandomSip()} sips.`,
    (players) => {
      const player = getRandomPlayer(players)
      return `${player}, give out a sip for every open tab in your browser.`
    },
    () => `If you only got to the office after 10am today, take a sip.`,
    () => `If you are a backend developer, take ${getRandomSip()} sips.`,
    (players) => {
      const player = getRandomPlayer(players)
      return `${player}, who do you think is the best coder in the group? He/She can give out ${getRandomSip()} sips.`
    },
    () => `If you haven't coded today, take ${getRandomSip()} sips.`,
    () => `Take ${getRandomSip()} sips if you have ever been so sun burnt you couldn’t wear a shirt.`,
    () => `Take a sip for every day you worked remotely this week.`,
    (players) => {
      const player = getRandomPlayer(players)
      return `Starting with ${player}. Name programming languages. Loser must drink ${getRandomSip()} sips.`
    },
    (players) => {
      const player = getRandomPlayer(players)
      return `${player} you are the git master. Everytime you shout "git commit!" everyone in the group must drink.`
    },
    (players) => {
      const player = getRandomPlayer(players)
      return `Starting with ${player}. Name IDEs or text editors. Loser must drink ${getRandomSip()} sips.`
    }
  ]
}
