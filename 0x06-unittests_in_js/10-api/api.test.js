const request = require('request');
const chai = require('chai');
const expect = chai.expect;

const API_URL = 'http://localhost:7865'; // Define the base URL for your API

describe('API Tests', function () {

  // Test for the index page
  describe('GET /', function () {
    it('should get the index page', function (done) {
      request.get(`${API_URL}/`, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });

  // Test for the /cart/:id endpoint with a valid number ID
  describe('GET /cart/:id', function () {
    it('should return 200 and payment methods for a valid cart ID', function (done) {
      request.get(`${API_URL}/cart/12`, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    });

    // Test for the /cart/:id endpoint with an invalid (non-number) ID
    it('should return 404 for an invalid cart ID', function (done) {
      request.get(`${API_URL}/cart/hello`, (error, response, body) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  // Test for the /login endpoint
  describe('POST /login', function () {
    it('should return 200 and welcome message with username', function (done) {
      request.post({
        url: `${API_URL}/login`,
        json: { userName: 'Pinkbrook' }
      }, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Pinkbrook');
        done();
      });
    });

    // Test for missing username in /login
    it('should return 400 for missing username', function (done) {
      request.post({
        url: `${API_URL}/login`,
        json: {}
      }, (error, response, body) => {
        expect(response.statusCode).to.equal(400);
        expect(body).to.equal('Username is required');
        done();
      });
    });
  });

  // Test for the /available_payments endpoint
  describe('GET /available_payments', function () {
    it('should return 200 and the available payment methods', function (done) {
      request.get(`${API_URL}/available_payments`, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(JSON.parse(body)).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        });
        done();
      });
    });
  });
});
