import R from 'ramda';
import curry from './util/curry.js';
import compose from './util/compose.js';
import head from './util/head.js';
import join from './util/join.js';
import append from './util/append.js';

// a -> b -> b
const truncate = curry(function(a, b) {
  return compose(
    append('...'),
    head,
    R.splitEvery(a)
  )(b);
});

export default truncate;
