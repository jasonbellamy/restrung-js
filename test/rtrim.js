import {assert} from 'chai';
import rtrim from '../src/rtrim.js';

describe('#rtrim', () => {
  it('should trim all whitespace from only the right side of a string', () => {
    assert.equal(rtrim('Hello there  '), 'Hello there');
    assert.equal(rtrim('  Hello there'), '  Hello there');
    assert.equal(rtrim('Hello  there'), 'Hello  there');
  });
});
