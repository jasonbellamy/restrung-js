import {assert} from 'chai';
import not from '../../src/util/not.js';

describe('#not', () => {
  it('should reverse an arguments value', () => {
    assert.equal(not(true), false);
    assert.equal(not(1), false);
    assert.equal(not(''), true);
  });
});
