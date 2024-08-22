// 2-calcul_chai.test.js
const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when a = 1.4 and b = 4.5', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return 5 when a = 1.4 and b = 3.6', () => {
      expect(calculateNumber('SUM', 1.4, 3.6)).to.equal(5);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when a = 1.4 and b = 4.5', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return -3 when a = 2.4 and b = 4.5', () => {
      expect(calculateNumber('SUBTRACT', 2.4, 4.5)).to.equal(-3);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when a = 1.4 and b = 4.5', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.be.closeTo(0.2, 0.01);
    });

    it('should return "Error" when a = 1.4 and b = 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should return "Error" when a = 1.4 and b = 0.2', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0.2)).to.equal('Error');
    });
  });
});
