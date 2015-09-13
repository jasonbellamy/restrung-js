import {assert} from 'chai';
import trim from '../src/trim.js';

describe('#trim', () => {
  it('should trim all whitespace from both sides of a string', () => {
    assert.equal(trim(' Hello there  '), 'Hello there');
  });
});
