const request = require('request');

const chai = require('chai');
const expect = chai.expect;

describe('API Tests', function () {
  
  // Test for the index page
  describe('GET /', function () {
    it('should get the index page', function (done) {
      request.get('http://localhost:7865', (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });

  // Test for the /cart/:id endpoint with a valid number ID
  describe('GET /cart/:id', function () {
    it('should return 200 and payment methods for a valid cart ID', function (done) {
      request.get('http://localhost:7865/cart/12', (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    });

    // Test for the /cart/:id endpoint with an invalid (non-number) ID
    it('should return 404 for an invalid cart ID', function (done) {
      request.get('http://localhost:7865/cart/hello', (error, response, body) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });
  describe('POST /login', function () {
    it('should return 200 and welcome message with username', (done) => {
      request.post(`${API_URL}/login`, {json: {userName: 'Pinkbrook'}}, (_err, res, body) => {
        expect(res.statusCode).to.be.equal(200);
        expect(body).to.be.equal('Welcome Pinkbrook');
        done();
      });
    });

  });

  // Test for the /available_payments endpoint
  describe('GET /available_payments', function () {
    it('should return 200 and the available payment methods', (done) => {
      request.get(`${API_URL}/available_payments`, (_err, res, body) => {
        expect(res.statusCode).to.be.equal(200);
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
