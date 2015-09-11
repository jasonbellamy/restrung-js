import R from 'ramda';
import capitalize from './capitalize.js';
import spaceCase from './space-case.js';

// a -> a
const pascalCase = R.compose(
  R.join(''),
  R.map(R.compose(capitalize, R.toLower)),
  R.split(' '),
  spaceCase
);

export default pascalCase;
