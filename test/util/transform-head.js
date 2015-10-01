import {assert} from 'chai';
import upperCase from '../../src/util/upper-case.js';
import lowerCase from '../../src/util/lower-case.js';
import transformHead from '../../src/util/transform-head.js';

describe('#transformHead', () => {
  it('should transform the head of a string', () => {
    assert.equal(transformHead(upperCase, 'hello'), 'Hello');
    assert.equal(transformHead(lowerCase, 'Hello'), 'hello');
  });
});
