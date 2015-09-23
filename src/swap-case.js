import R from 'ramda';
import compose from './util/compose.js';
import lowerCase from './util/lower-case.js';
import isUpperCase from '../src/is-upper-case.js';

// a -> a
const swapCase = compose(
  R.join(''),
  R.map(
    R.either(
      R.both(isUpperCase, lowerCase),
      R.both(compose(R.not, isUpperCase), R.toUpper)
    )
  )
);

export default swapCase;
