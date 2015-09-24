import R from 'ramda';
import curry from './util/curry.js';
import compose from './util/compose.js';
import join from './util/join.js';
import prepend from './util/prepend.js';

// a -> a -> a
const surround = curry((a, b) => {
  return compose(
    join(''),
    R.append(a),
    prepend(a)
  )(b);
});

export default surround;
