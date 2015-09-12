import R from 'ramda';
import isUpperCase from '../src/is-upper-case.js';

// a -> a
const swapCase = R.compose(
  R.join(''),
  R.map(
    R.either(
      R.both(isUpperCase, R.toLower),
      R.both(R.compose(R.not, isUpperCase), R.toUpper)
    )
  )
);

export default swapCase;
