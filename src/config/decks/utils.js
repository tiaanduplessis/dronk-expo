const MIN_SIP = 2
const MAX_SIP = 6

export function getRandomPlayer (players) {
  const index = Math.floor(Math.random() * players.length)
  return players[index]
}

export function getRandomSip () {
  return Math.floor(Math.random() * (MAX_SIP - MIN_SIP + 1)) + MIN_SIP
}
