import {assert} from 'chai';
import concat from '../../src/util/concat.js';

describe('#concat', () => {
  it('should combine the elements of the two lists', () => {
    assert.deepEqual(concat(['a', 'b'], ['c', 'd']), ['a', 'b', 'c', 'd']);
    assert.deepEqual(concat([], ['c', 'd']), ['c', 'd']);
  });
});
