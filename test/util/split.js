import {assert} from 'chai';
import split from '../../src/util/split.js';

describe('#split', () => {
  it('should split a string into an array', () => {
    assert.deepEqual(split('.', 'a.b.c.xyz.d'), ['a', 'b', 'c', 'xyz', 'd']);
  });
});
