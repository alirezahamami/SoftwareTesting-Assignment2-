const request = require('supertest');
const app = require('./app');

// Define the server instance and port outside the test case
let server;
const PORT = 3001; // Use a different port for testing

beforeAll((done) => {
  // Start the Express server before running tests
  server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    done();
  });
});

describe('Test Express app root endpoint', () => {
  it('should respond with status code 200 and message "this is respond from server"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('this is respond from server');
  });
});

// Close the server instance after all tests are done
afterAll((done) => {
  if (server) {
    server.close(done);
  }
});