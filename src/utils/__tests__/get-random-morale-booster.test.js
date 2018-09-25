import getRandomMoraleBooster from '../get-random-morale-booster'

test('should get random morale booster', () => {
  for (let i = 0; i < 100; i++) {
    const result = getRandomMoraleBooster()
    expect(result).toBeDefined()
    expect(typeof result).toBe('string')
  }
})
