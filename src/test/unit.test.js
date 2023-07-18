const sumArrayNumbers = require('../sum');
const { expect } = require('expect');
const request = require('supertest');

const app = require('../app');

describe('Summation test', () => {
  it('should sum all numbers in a given array', () => {
    const result = sumArrayNumbers([1, 2, 3])
    expect(result).toBe(6)
  });
})

describe('Get response from router', () => {
  it('should return status code 200 and success message in json', async () => {
    const response = await request(app)
      .get('/api/hello-world')
    expect(response.status).toBe(200);
    expect(response.body.success).toBe("It works")
  });
});