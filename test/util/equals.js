import {assert} from 'chai';
import equals from '../../src/util/equals.js';

describe('#equals', () => {
  it('should strictly compare two arguments', () => {
    assert.equal(equals(1, 1), true);
    assert.equal(equals(1, 2), false);
    assert.equal(equals('Hello', 'Hello'), true);
    assert.equal(equals('Hello', 'olleH'), false);
  });
});
