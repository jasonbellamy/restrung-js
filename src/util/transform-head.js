import curry from './curry.js';
import compose from './compose.js';
import head from './head.js';
import tail from './tail.js';
import concat from './concat.js';

// (a -> a) -> a
const transformHead = curry((f, s) => concat(compose(f, head)(s), tail(s)));

export default transformHead;
