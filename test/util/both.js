import {assert} from 'chai';
import both from '../../src/util/both.js';

describe('#both', () => {
  it('should not evaluate the second expression if the first one is false', function() {
    var a = function() { return false; };
    var b = function() { called = true; };
    var called = false;
    both(a, b)(1);
    assert.strictEqual(called, false);
  });
});
