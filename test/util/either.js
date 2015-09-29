import {assert} from 'chai';
import either from '../../src/util/either.js';

describe('#either', () => {
  it('should not evaluate the second expression if the first one is true', () => {
    const a = () => true;
    const b = () => called = true;
    let called = false;
    either(a, b)(1);
    assert.equal(called, false);
  });
});
