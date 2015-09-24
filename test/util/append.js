import {assert} from 'chai';
import append from '../../src/util/append.js';

describe('#append', () => {
  it('should append an item to the end of a string', () => {
    assert.equal(append('o', 'hell'), 'hello');
  });
});
