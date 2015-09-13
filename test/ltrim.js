import {assert} from 'chai';
import ltrim from '../src/ltrim.js';

describe('#ltrim', () => {
  it('should trim all whitespace from only the left side of a string', () => {
    assert.equal(ltrim('  Hello there'), 'Hello there');
    assert.equal(ltrim('Hello there  '), 'Hello there  ');
    assert.equal(ltrim('Hello  there'), 'Hello  there');
  });
});
