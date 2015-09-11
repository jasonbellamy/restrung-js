import {assert} from 'chai';
import isPascalCase from '../src/is-pascal-case.js';

describe('#isPascalCase', () => {
  it('should be true if the string is PascalCased', () => {
    assert.equal(isPascalCase('PascalCase'), true);
  });
  it('should be false if the string is not PascalCased', () => {
    assert.equal(isPascalCase('space case'), false);
  });
});
