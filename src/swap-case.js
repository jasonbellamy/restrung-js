import R from 'ramda';
import compose from './util/compose.js';
import both from './util/both.js';
import either from './util/either.js';
import join from './util/join.js';
import not from './util/not.js';
import upperCase from './util/upper-case.js';
import lowerCase from './util/lower-case.js';
import isUpperCase from '../src/is-upper-case.js';

// a -> a
const swapCase = compose(
  join(''),
  R.map(
    either(
      both(isUpperCase, lowerCase),
      both(compose(not, isUpperCase), upperCase)
    )
  )
);

export default swapCase;
