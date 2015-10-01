import {assert} from 'chai';
import map from '../../src/util/map.js';

describe('#map', () => {
  it('should map functions over arrays', () => {
    const addOne = (a) => a + 1;
    assert.deepEqual(map(addOne, [1,2,3]), [2,3,4]);
  });
});
