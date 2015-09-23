import R from 'ramda';
import compose from './util/compose.js';
import join from './util/join.js';
import upperCase from './util/upper-case.js';
import lowerCase from './util/lower-case.js';
import isUpperCase from '../src/is-upper-case.js';

// a -> a
const swapCase = compose(
  join(''),
  R.map(
    R.either(
      R.both(isUpperCase, lowerCase),
      R.both(compose(R.not, isUpperCase), upperCase)
    )
  )
);

export default swapCase;
