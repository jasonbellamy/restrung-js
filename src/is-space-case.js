import R from 'ramda';
import spaceCase from './space-case.js';

// a -> Boolean
const isSpaceCase = (s) => R.equals(s, spaceCase(s));

export default isSpaceCase;
