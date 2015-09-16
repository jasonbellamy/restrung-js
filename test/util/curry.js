import {assert} from 'chai';
import curry from '../../src/util/curry.js';

describe('#curry', () => {
  it('should curry a single argument', () => {
    const f = curry((x, y) => x + y);
    const a = f(10);
    assert.equal(a(1), 11);
  });
});
