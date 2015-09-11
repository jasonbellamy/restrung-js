import R from 'ramda';
import pascalCase from './pascal-case.js';

// a -> Boolean
const isPascalCase = (s) => R.equals(s, pascalCase(s));

export default isPascalCase;
