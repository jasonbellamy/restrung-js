import {assert} from 'chai';
import tail from '../../src/util/tail.js';

describe('#tail', () => {
  it('returns the tail of a list', function() {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
    assert.deepEqual(tail([2, 3]), [3]);
    assert.deepEqual(tail([3]), []);
    assert.deepEqual(tail([]), []);

    assert.strictEqual(tail('abc'), 'bc');
    assert.strictEqual(tail('bc'), 'c');
    assert.strictEqual(tail('c'), '');
  });
});
