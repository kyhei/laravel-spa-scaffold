import { add } from './sample'

describe('Test your module', () => {
  test('add function', () => {
    expect(add(1, 1)).toBe(2)
  })
})