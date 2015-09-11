import {assert} from 'chai';
import isSnakeCase from '../src/is-snake-case.js';

describe('#isSnakeCase', () => {
  it('should be true if the string is snake_cased', () => {
    assert.equal(isSnakeCase('snake_case'), true);
  });
  it('should be false if the string is not snake_cased', () => {
    assert.equal(isSnakeCase('camelCase'), false);
  });
});
