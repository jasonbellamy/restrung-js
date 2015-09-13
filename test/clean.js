import {assert} from 'chai';
import ltrim from '../src/clean.js';

describe('#clean', () => {
  it('should clean all excess whitespace from a string', () => {
    assert.equal(ltrim(' Hello   there '), 'Hello there');
  });
});
