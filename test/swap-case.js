import {assert} from 'chai';
import swapCase from '../src/swap-case.js';

describe('#swapCase', () => {
  it('should swap the cases of each character in a string', () => {
    assert.equal(swapCase('Hello'), 'hELLO');
    assert.equal(swapCase('hELLO'), 'Hello');
    assert.equal(swapCase('HeLlO'), 'hElLo');
    assert.equal(swapCase('HeLlO hELLO'), 'hElLo Hello');
  });
});
