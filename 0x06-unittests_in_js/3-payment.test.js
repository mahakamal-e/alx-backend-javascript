const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

// Import the modules
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

// Describe block for sendPaymentRequestToApi tests
describe('sendPaymentRequestToApi', function () {
  let spy;

  // Set up a spy before each test
  beforeEach(function () {
    spy = sinon.spy(Utils, 'calculateNumber');
  });

  // Restore the original function after each test
  afterEach(function () {
    spy.restore();
  });

  // Test to ensure calculateNumber is called with correct arguments
  it('should call Utils.calculateNumber with the correct arguments', function () {
    // Call the function under test
    sendPaymentRequestToApi(100, 20);

    // Check if calculateNumber was called once
    expect(spy.calledOnce).to.be.true;

    // Check if calculateNumber was called with the correct arguments
    expect(spy.firstCall.args).to.deep.equal(['SUM', 100, 20]);
  });
});
