import R from 'ramda';
import equals from './util/equals.js';
import camelCase from './camel-case.js';

// a -> Boolean
const isCamelCase = (s) => equals(s, camelCase(s));

export default isCamelCase;
