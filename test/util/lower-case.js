import {assert} from 'chai';
import lowerCase from '../../src/util/lower-case.js';

describe('#lowerCase', () => {
  it('should lowercase a string', () => {
    assert.equal(lowerCase('HELLO'), 'hello');
  });
});
