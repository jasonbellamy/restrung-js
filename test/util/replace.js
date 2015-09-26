import {assert} from 'chai';
import replace from '../../src/util/replace.js';

describe('#replace', () => {
  it('should replace substrings of the input string', function() {
    assert.strictEqual(replace('1', 'one', '1 two three'), 'one two three');
  });

  it('should replace regex matches of the input string', function() {
    assert.strictEqual(replace(/\d+/g, 'num', '1 2 three'), 'num num three');
  });
});
