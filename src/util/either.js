import curry from './curry.js';

// a -> b -> c -> c
const either = curry((a, b) => (...args) => a.apply(a, args) || b.apply(b, args));

export default either;
