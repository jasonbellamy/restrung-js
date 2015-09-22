import R from 'ramda';
import equals from './util/equals.js';

// a -> Boolean
const isUpperCase = (s) => equals(s, R.toUpper(s));

export default isUpperCase;
