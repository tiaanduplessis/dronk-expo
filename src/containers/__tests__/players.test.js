import players from '../players'

test('should add player', async () => {
  await players.set(['Tiaan', 'Sonja'])
  expect(players.state.players.length).toBe(2)
})
