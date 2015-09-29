import {assert} from 'chai';
import splitEvery from '../../src/util/split-every.js';

describe('#splitEvery', () => {
  it('should split a collection into slices of the specified length', () => {
    assert.deepEqual(R.splitEvery(1, [1, 2, 3, 4]), [[1], [2], [3], [4]]);
    assert.deepEqual(R.splitEvery(2, [1, 2, 3, 4]), [[1, 2], [3, 4]]);
    assert.deepEqual(R.splitEvery(3, [1, 2, 3, 4]), [[1, 2, 3], [4]]);
    assert.deepEqual(R.splitEvery(4, [1, 2, 3, 4]), [[1, 2, 3, 4]]);
    assert.deepEqual(R.splitEvery(5, [1, 2, 3, 4]), [[1, 2, 3, 4]]);
    assert.deepEqual(R.splitEvery(3, []), []);
    assert.deepEqual(R.splitEvery(1, 'abcd'), ['a', 'b', 'c', 'd']);
    assert.deepEqual(R.splitEvery(2, 'abcd'), ['ab', 'cd']);
    assert.deepEqual(R.splitEvery(3, 'abcd'), ['abc', 'd']);
    assert.deepEqual(R.splitEvery(4, 'abcd'), ['abcd']);
    assert.deepEqual(R.splitEvery(5, 'abcd'), ['abcd']);
    assert.deepEqual(R.splitEvery(3, ''), []);
  });
});
