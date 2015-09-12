import {assert} from 'chai';
import surround from '../src/surround.js';

describe('#surround', () => {
  it('should surround a string with a another string', () => {
    assert.equal(surround('Hello', 'There'), 'HelloThereHello');
  });
});
