import R from 'ramda';
import equals from './util/equals.js';
import upperCase from './util/upper-case.js';

// a -> Boolean
const isUpperCase = (s) => equals(s, upperCase(s));

export default isUpperCase;
