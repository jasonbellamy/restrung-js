import R from 'ramda';
import curry from './util/curry.js';
import compose from './util/compose.js';
import join from './util/join.js';

// a -> a -> a
const surround = curry((a, b) => {
  return compose(
    join(''),
    R.append(a),
    R.prepend(a)
  )(b);
});

export default surround;
