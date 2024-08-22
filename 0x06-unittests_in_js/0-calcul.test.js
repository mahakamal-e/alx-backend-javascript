const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return 4 when a = 1 and b = 3', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 when a = 1 and b = 3.7', function() {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 when a = 1.2 and b = 3.7', function() {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 when a = 1.5 and b = 3.7', function() {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should return 0 when a = 0 and b = 0', function() {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should return -2 when a = -1.3 and b = -0.7', function() {
    assert.strictEqual(calculateNumber(-1.3, -0.7), -2);
  });

  it('should return 2 when a = 1.4 and b = 0.5', function() {
    assert.strictEqual(calculateNumber(1.4, 0.5), 2);
  });
});
