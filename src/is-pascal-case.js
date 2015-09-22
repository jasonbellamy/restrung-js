import R from 'ramda';
import equals from './util/equals.js';
import pascalCase from './pascal-case.js';

// a -> Boolean
const isPascalCase = (s) => equals(s, pascalCase(s));

export default isPascalCase;
