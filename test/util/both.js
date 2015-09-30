import {assert} from 'chai';
import both from '../../src/util/both.js';

describe('#both', () => {
  it('should not evaluate the second expression if the first one is false', () => {
    const a = () => false;
    const b = () => called = true;
    let called = false;
    both(a, b)(1);
    assert.strictEqual(called, false);
  });
});
