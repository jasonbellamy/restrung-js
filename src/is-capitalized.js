import R from 'ramda';
import capitalize from './capitalize.js';

// a -> Boolean
const isCapitalized = (s) => R.equals(s, capitalize(s));

export default isCapitalized;
