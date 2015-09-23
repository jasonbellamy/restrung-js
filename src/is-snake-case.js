import equals from './util/equals.js';
import snakeCase from './snake-case.js';

// a -> Boolean
const isSnakeCase = (s) => equals(s, snakeCase(s));

export default isSnakeCase;
