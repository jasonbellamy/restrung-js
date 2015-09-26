import curry from './curry.js';

// a -> a -> a
const both = curry((a, b) => (...args) => a.apply(a, args) && b.apply(b, args));

export default both;
