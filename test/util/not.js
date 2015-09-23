import {assert} from 'chai';
import not from '../../src/util/not.js';

describe('#not', () => {
  it('should reverse an arguments value', function() {
    assert.equal(not(true), false);
    assert.equal(not(1), false);
    assert.equal(not(''), true);
  });
});
