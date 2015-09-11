import {assert} from 'chai';
import isSpaceCase from '../src/is-space-case.js';

describe('#isSpaceCase', () => {
  it('should be true if the string is space cased', () => {
    assert.equal(isSpaceCase('space case'), true);
  });
  it('should be false if the string is not space cased', () => {
    assert.equal(isSpaceCase('camelCase'), false);
  });
});
