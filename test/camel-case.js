import {assert} from 'chai';
import camelCase from '../src/camel-case.js';

describe('#camelCase', () => {
  it('should camelCase a string', () => {
    assert.equal(camelCase('hello-There'), 'helloThere');
    assert.equal(camelCase('hello_There'), 'helloThere');
    assert.equal(camelCase('hello_there'), 'helloThere');
    assert.equal(camelCase('hello.there'), 'helloThere');
  });
});
