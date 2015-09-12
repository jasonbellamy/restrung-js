import {assert} from 'chai';
import isUpperCase from '../src/is-upper-case.js';

describe('#isUpperCase', () => {
  it('should be true if the string is all UPPERCASE.', () => {
    assert.equal(isUpperCase('H'), true);
    assert.equal(isUpperCase('HELLO'), true);
  });
  it('should be false if the string is not all UPPERCASE.', () => {
    assert.equal(isUpperCase('h'), false);
    assert.equal(isUpperCase('hELLO'), false);
  });
});
