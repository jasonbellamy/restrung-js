import R from 'ramda';
import trim from './trim.js';

// a -> a
const clean = R.compose(
  trim,
  R.replace(/\s{2}/, '')
);

export default clean
