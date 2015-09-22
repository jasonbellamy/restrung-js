import {assert} from 'chai';
import head from '../../src/util/head.js';

describe('#head', () => {
  it('returns the first element of a list', function() {
    assert.equal(head([1, 2, 3]), 1);
    assert.equal(head([2, 3]), 2);
    assert.equal(head([3]), 3);
    assert.equal(head('abc'), 'a');
    assert.equal(head('bc'), 'b');
    assert.equal(head('c'), 'c');
  });
});
