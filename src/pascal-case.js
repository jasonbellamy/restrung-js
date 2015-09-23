import R from 'ramda';
import compose from './util/compose.js';
import lowerCase from './util/lower-case.js';
import capitalize from './capitalize.js';
import spaceCase from './space-case.js';

// a -> a
const pascalCase = compose(
  R.join(''),
  R.map(compose(capitalize, lowerCase)),
  R.split(' '),
  spaceCase
);

export default pascalCase;
