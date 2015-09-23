import equals from './util/equals.js';
import spaceCase from './space-case.js';

// a -> Boolean
const isSpaceCase = (s) => equals(s, spaceCase(s));

export default isSpaceCase;
