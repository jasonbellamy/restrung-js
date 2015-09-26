import curry from './curry.js';

// a -> b -> c -> c
const replace = curry((a, b, c) => c.replace(a, b));

export default replace;
