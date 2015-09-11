import {assert} from 'chai';
import spaceCase from '../src/space-case.js';

describe('#spaceCase', () => {
  it('should spaceCase a string', () => {
    assert.equal(spaceCase('camelCased'), 'camel Cased');
    assert.equal(spaceCase('spinal-cased'), 'spinal cased');
    assert.equal(spaceCase('snake_cased'), 'snake cased');
    assert.equal(spaceCase('dot.notation'), 'dot notation');
    assert.equal(spaceCase('space cased'), 'space cased');
    assert.equal(spaceCase('camelSpinal-snake_dot.cased'), 'camel Spinal snake dot cased');
  });
});
