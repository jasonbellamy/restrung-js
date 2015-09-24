import {assert} from 'chai';
import flip from '../../src/util/flip.js';
import curry from '../../src/util/curry.js';

describe('#flip', () => {
  it('should reverse the first 2 arguments of a function', () => {
    const f = (a, b, c) =>  a + ' ' + b + ' ' + c;
    const g = flip(f);
    assert.equal(f('a', 'b', 'c'), 'a b c');
    assert.equal(g('a', 'b', 'c'), 'b a c');
  });
});
