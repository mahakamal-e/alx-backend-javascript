const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

const sendPaymentRequestToApi = require('./3-payment');
const Utils = require("./utils");

describe('sendPaymentRequestToApi', function () {
  let spy;

  beforeEach(function () {
    spy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(function () {
    spy.restore();
  });
  it('should call Utils.calculateNumber with the correct arguments', function () {
    sendPaymentRequestToApi(100, 20);

    expect(spy.calledOnce).to.be.true;
    expect(spy.firstCall.args).to.deep.equal(['SUM', 100, 20]);
  });
});
