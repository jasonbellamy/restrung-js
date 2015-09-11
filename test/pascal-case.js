import {assert} from 'chai';
import pascalCase from '../src/pascal-case.js';

describe('#pascalCase', () => {
  it('should PascalCase a string', () => {
    assert.equal(pascalCase('hello-There'), 'HelloThere');
    assert.equal(pascalCase('hello_There'), 'HelloThere');
    assert.equal(pascalCase('hello_there'), 'HelloThere');
    assert.equal(pascalCase('hello.there'), 'HelloThere');
    assert.equal(pascalCase('helloThere'), 'HelloThere');
  });
});
