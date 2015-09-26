import {assert} from 'chai';
import either from '../../src/util/either.js';

describe('#either', () => {
  it('should not evaluate the second expression if the first one is true', function() {
    var a = function() { return true; };
    var b = function() { called = true; };
    var called = false;
    either(a, b)(1);
    assert.equal(called, false);
  });
});
