import R from 'ramda';
import compose from './util/compose.js';
import spaceCase from './space-case.js';
import uncapitalize from './uncapitalize.js';

// a -> a
const snakeCase = compose(
  uncapitalize,
  R.join('_'),
  R.split(' '),
  spaceCase
);

export default snakeCase;
