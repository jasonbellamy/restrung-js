import R from 'ramda';
import capitalize from './capitalize.js';
import uncapitalize from './uncapitalize.js';
import spaceCase from './space-case.js';

// a -> a
const camelCase = R.compose(
  uncapitalize,
  R.join(''),
  R.map(R.compose(capitalize, R.toLower)),
  R.split(' '),
  spaceCase
);

export default camelCase;
