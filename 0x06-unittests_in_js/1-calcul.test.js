const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return 6 when a = 1.4 and b = 4.5', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
    
    it('should return 5 when a = 1.4 and b = 3.6', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, 3.6), 5);
    });
  });

  describe('SUBTRACT', function() {
    it('should return -4 when a = 1.4 and b = 4.5', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
    
    it('should return -2 when a = 2.4 and b = 4.5', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.4, 4.5), -3);
    });
  });

  describe('DIVIDE', function() {
    it('should return 0.2 when a = 1.4 and b = 4.5', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
    
    it('should return Error when a = 1.4 and b = 0', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
    
    it('should return Error when a = 1.4 and b = 0.2', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.2), 'Error');
    });
  });
});
