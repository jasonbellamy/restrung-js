import {assert} from 'chai';
import prepend from '../../src/util/prepend.js';

describe('#prepend', () => {
  it('should prepend an item to the head of a string', function() {
    assert.deepEqual(prepend('h', 'ello'), 'hello');
  });
});
