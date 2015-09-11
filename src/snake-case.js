import R from 'ramda';
import spaceCase from './space-case.js';
import uncapitalize from './uncapitalize.js';

// a -> a
const snakeCase = R.compose(
  uncapitalize,
  R.join('_'),
  R.split(' '),
  spaceCase
);

export default snakeCase;
