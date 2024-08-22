const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  let spy;

  // Hook to run before each test
  beforeEach(function () {
    // Create a spy for console.log
    spy = sinon.spy(console, 'log');
  });

  // Hook to run after each test
  afterEach(function () {
    // Restore the original console.log
    spy.restore();
  });

  it('should log the correct message with total 120 when called with 100 and 20', function () {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnce).to.be.true;
    expect(spy.firstCall.args[0]).to.equal('The total is: 120');
  });

  it('should log the correct message with total 20 when called with 10 and 10', function () {
    sendPaymentRequestToApi(10, 10);
    expect(spy.calledOnce).to.be.true;
    expect(spy.firstCall.args[0]).to.equal('The total is: 20');
  });
});
