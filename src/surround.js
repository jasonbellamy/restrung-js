import R from 'ramda';
import curry from './util/curry.js';
import compose from './util/compose.js';

// a -> a -> a
const surround = curry((a, b) => {
  return compose(
    R.join(''),
    R.append(a),
    R.prepend(a)
  )(b);
});

export default surround;
