import R from 'ramda';
import compose from './util/compose.js';
import join from './util/join.js';
import split from './util/split.js';
import lowerCase from './util/lower-case.js';
import capitalize from './capitalize.js';
import spaceCase from './space-case.js';

// a -> a
const pascalCase = compose(
  join(''),
  R.map(compose(capitalize, lowerCase)),
  split(' '),
  spaceCase
);

export default pascalCase;
