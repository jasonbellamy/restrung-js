import curry from './util/curry.js';
import compose from './util/compose.js';
import join from './util/join.js';
import prepend from './util/prepend.js';
import append from './util/append.js';

// a -> a -> a
const surround = curry((a, b) => {
  return compose(
    append(a),
    prepend(a)
  )(b);
});

export default surround;
