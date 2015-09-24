import curry from './curry.js';

// a -> a -> a
const prepend = curry((a, b) => a + b)

export default prepend;
