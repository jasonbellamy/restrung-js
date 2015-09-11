import {assert} from 'chai';
import isCapitalized from '../src/is-capitalized.js';

describe('#isCapitalized', () => {
  it('should be true if the first letter of the string is capitalized', () => {
    assert.equal(isCapitalized('Hello'), true);
  });
  it('should be false if the first letter of the string is not capitalized', () => {
    assert.equal(isCapitalized('hello'), false);
  });
});
