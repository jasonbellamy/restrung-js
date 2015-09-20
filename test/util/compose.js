import {assert} from 'chai';
import compose from '../../src/util/compose.js';

describe('#compose', () => {
  it('should combine the result of multiple functions', () => {
    const addOne   = (a) => a + 1;
    const addTwo   = (a) => a + 2;
    const addThree = (a) => a + 3;
    assert.equal(compose(addOne, addTwo, addThree)(15), 21);
  });
});
