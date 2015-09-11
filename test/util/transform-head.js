import {assert} from 'chai';
import R from 'ramda';
import transformHead from '../../src/util/transform-head.js';

describe('#transformHead', () => {
  it('should transform the head of a string', () => {
    assert.equal(transformHead(R.toUpper, 'hello'), 'Hello');
    assert.equal(transformHead(R.toLower, 'Hello'), 'hello');
  });
});
