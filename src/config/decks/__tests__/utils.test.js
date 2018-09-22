import { getRandomPlayer, getRandomSip } from '../utils'

test('should get random player from array', () => {
  const name = 'Tiaan'
  expect(getRandomPlayer).toBeDefined()
  expect(getRandomPlayer([name])).toBe(name)
})

test('should get integer of sips', () => {
  expect(getRandomSip).toBeDefined()
  expect(typeof getRandomSip()).toBe('number')
  expect(Number.isInteger(getRandomSip())).toBeTruthy()
})
