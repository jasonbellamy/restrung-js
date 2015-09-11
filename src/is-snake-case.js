import R from 'ramda';
import snakeCase from './snake-case.js';

// a -> Boolean
const isSnakeCase = (s) => R.equals(s, snakeCase(s));

export default isSnakeCase;
