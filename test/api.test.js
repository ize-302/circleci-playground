const request = require('supertest');
const { expect } = require('expect');

const app = require('../app');

describe('Get response from router', () => {
  it('should return status code 200 and success message in json', async () => {
    const response = await request(app)
      .get('/api/hello-world')
    expect(response.status).toBe(200);
    expect(response.body.success).toBe("It works")
  });
});