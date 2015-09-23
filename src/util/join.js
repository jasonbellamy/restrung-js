import curry from './curry.js';

// a -> b -> a
const join = curry((a, b) => b.join(a));

export default join;
