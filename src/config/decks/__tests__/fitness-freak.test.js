import deck from '../fitness-freak'

test('should be valid deck', () => {
  expect(deck).toBeDefined()
  expect(deck.cards).toBeDefined()
  expect(deck.description).toBeDefined()
})
