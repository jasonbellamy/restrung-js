import {assert} from 'chai';
import join from '../../src/util/join.js';

describe('#join', () => {
  it('should convert a list into a string with/at the specified seperator', function() {
    assert.equal(join('-', [1,2,3,4]), '1-2-3-4')
  });
});
