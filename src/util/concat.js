import curry from './curry.js';

// a -> b -> a
const concat = curry((a, b) => a.concat(b));

export default concat;
