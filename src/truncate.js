import R from 'ramda';
import curry from './util/curry.js';
import compose from './util/compose.js';
import join from './util/join.js';

// a -> b -> b
const truncate = curry(function(a, b) {
  return compose(
    join(''),
    R.append('...'),
    R.head,
    R.splitEvery(a)
  )(b);
});

export default truncate;
