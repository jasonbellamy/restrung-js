import {assert} from 'chai';
import upperCase from '../../src/util/upper-case.js';

describe('#upperCase', () => {
  it('should uppercase a string', () => {
    assert.equal(upperCase('hello'), 'HELLO');
  });
});
