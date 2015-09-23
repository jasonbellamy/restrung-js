import curry from './curry.js';

// a -> b -> a
const split = curry((a, b) => b.split(a));

export default split;
