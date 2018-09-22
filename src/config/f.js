function getRandomPlayer (players) {
  const index = Math.floor(Math.random() * players.length)
  return players[index]
}

function getRandomSip () {
  const MIN_SIP = 2
  const MAX_SIP = 6
  return Math.floor(Math.random() * (MAX_SIP - MIN_SIP + 1)) + MIN_SIP
}

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
  }
]

export default {
  'Fitness freak': {
    icon: 'fitness-center',
    description: 'A game for atheltic social drinkers',
    cards: [
      ...generalCards,
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
  },
  'Hackers delight': {
    icon: 'code',
    description: 'For coders with too many deadlines',
    cards: [
      ...generalCards,
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
      }
    ]
  },
  'Sh*ts and giggles': {
    icon: 'face',
    description: 'A game for the hell of it',
    cards: [
      ...generalCards,
      () => `If you are playing with a ex, take ${getRandomSip()} sips.`,
      (players) => {
        const player = getRandomPlayer(players)
        return `${player} keep walking until the next 6 cards are completed`
      },
      (players) => {
        const player = getRandomPlayer(players)
        return `Starting with ${player}. Name car manufacturers. Loser must drink ${getRandomSip()} sips.`
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
}
