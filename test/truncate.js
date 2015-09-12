import {assert} from 'chai';
import truncate from '../src/truncate.js';

describe('#truncate', () => {
  it('should truncate a string at the specified character number', () => {
    assert.equal(truncate(5, 'Hello there'), 'Hello...');
  });
});
