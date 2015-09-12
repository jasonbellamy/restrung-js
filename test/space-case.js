import {assert} from 'chai';
import spaceCase from '../src/space-case.js';

describe('#spaceCase', () => {
  it('should spaceCase a string', () => {
    assert.equal(spaceCase('camelCasedString'), 'camel Cased String');
    assert.equal(spaceCase('spinal-cased-string'), 'spinal cased string');
    assert.equal(spaceCase('snake_cased_string'), 'snake cased string');
    assert.equal(spaceCase('dot.notation.string'), 'dot notation string');
    assert.equal(spaceCase('space cased string'), 'space cased string');
    assert.equal(spaceCase('camelSpinal-snake_dot.cased'), 'camel Spinal snake dot cased');
  });
});
