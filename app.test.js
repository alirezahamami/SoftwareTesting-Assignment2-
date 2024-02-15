const request = require('supertest');
const app = require('./app'); // Assuming your app file is named app.js

describe('Test Express app root endpoint', () => {
  it('should respond with status code 200 and message "this is respond from server"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('this is respond from server');
  });
});