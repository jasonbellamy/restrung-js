import equals from './util/equals.js';
import capitalize from './capitalize.js';

// a -> Boolean
const isCapitalized = (s) => equals(s, capitalize(s));

export default isCapitalized;
