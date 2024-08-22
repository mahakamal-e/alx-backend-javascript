const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

// Import the modules
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

// Describe block for sendPaymentRequestToApi tests
describe('sendPaymentRequestToApi', function () {
  let spy;
  let stub;

  // Stub Utils.calculateNumber before each test
  beforeEach(function () {
    stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    spy = sinon.spy(console, 'log');
  });

  // Restore the original function after each test
  afterEach(function () {
    stub.restore();
    spy.restore();
  });

  // Test to ensure calculateNumber is called with correct arguments
  it('should call Utils.calculateNumber with the correct arguments', function () {
    sendPaymentRequestToApi(100, 20);

    expect(stub.calledOnce).to.be.true;
    expect(stub.firstCall.args).to.deep.equal(['SUM', 100, 20]);
  });

  // Test to ensure the correct message is logged
  it('should log the correct message to the console', function () {
    sendPaymentRequestToApi(100, 20);

    expect(spy.calledOnce).to.be.true;
    expect(spy.firstCall.args[0]).to.equal('The total is: 10');
  });
});
