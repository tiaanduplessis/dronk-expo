import deck from '../hackers-delight'

test('should be valid deck', () => {
  expect(deck).toBeDefined()
  expect(deck.cards).toBeDefined()
  expect(deck.description).toBeDefined()
})
