import {assert} from 'chai';
import curry from '../../src/util/curry.js';

describe('#curry', () => {
  it('should accept all arguments initially', () => {
    const f = curry((x, y, z) => x + y + z);
    assert.equal(f(1, 2, 3), 6);
  });

  it('should curry a single argument', () => {
    const f = curry((x, y) => x + y);
    const a = f(10);
    assert.equal(a(1), 11);
  });

  it('should curry multiple arguments individually', () => {
    const f = curry((x, y, z) => x + y + z);
    const a = f(10);
    const b = a(10);
    assert.equal(b(1), 21);
  });

  it('should curry a multiple arguments consecutively', () => {
    const f = curry((x, y, z) => x + y + z);
    assert.equal(f(1)(10)(10), 21);
  });
});
