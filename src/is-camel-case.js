import R from 'ramda';
import camelCase from './camel-case.js';

// a -> Boolean
const isCamelCase = (s) => R.equals(s, camelCase(s));

export default isCamelCase;
