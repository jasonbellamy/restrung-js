import R from 'ramda';
import curry from './curry.js';
import compose from './compose.js';
import head from './head.js';
import tail from './tail.js';

// (a -> a) -> a
const transformHead = curry((f, s) => {
  return R.concat(
    compose(f, head)(s),
    tail(s)
  );
});

export default transformHead;
