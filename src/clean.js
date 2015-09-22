import R from 'ramda';
import compose from './util/compose.js';
import trim from './trim.js';

// a -> a
const clean = compose(
  trim,
  R.replace(/\s{2}/, '')
);

export default clean
