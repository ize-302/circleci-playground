const sumArrayNumbers = require('./sum');

describe('Summation test', () => {
  it('should sum all numbers in a given array', () => {
    const result = sumArrayNumbers([1, 2, 3])
    expect(result).toBe(6)
  });
})