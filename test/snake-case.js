import {assert} from 'chai';
import snakeCase from '../src/snake-case.js';

describe('#snakeCase', () => {
  it('should snakeCase a string', () => {
    assert.equal(snakeCase('hello there'), 'hello_there');
    assert.equal(snakeCase('hello-there'), 'hello_there');
    assert.equal(snakeCase('hello_there'), 'hello_there');
    assert.equal(snakeCase('hello.there'), 'hello_there');
  });
});
