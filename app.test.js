const request = require('supertest');
const app = require('./app');

describe('Test Express app root endpoint', () => {
  it('should respond with status code 200 and message "this is respond from server"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('this is respond from server');
  });
});