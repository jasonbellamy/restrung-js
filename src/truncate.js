import R from 'ramda';
import curry from './util/curry.js';
import compose from './util/compose.js';
import join from './util/join.js';
import append from './util/append.js';

// a -> b -> b
const truncate = curry(function(a, b) {
  return compose(
    append('...'),
    R.head,
    R.splitEvery(a)
  )(b);
});

export default truncate;
