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

});
