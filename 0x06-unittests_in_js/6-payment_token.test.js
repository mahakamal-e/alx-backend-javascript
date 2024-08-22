const chai = require('chai');
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('should resolve with the correct data when success is true', function (done) {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done(); // Call done() to signal that the test is complete
      })
      .catch(done); // Pass any error to done() to fail the test
  });

  it('should reject when success is false', function (done) {
    getPaymentTokenFromAPI(false)
      .then(() => {
        done(new Error('Expected promise to be rejected')); // Fail the test if the promise is unexpectedly resolved
      })
      .catch(() => {
        done(); // Call done() to signal that the test is complete
      });
  });
});
