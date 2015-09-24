import curry from './curry.js';

// a -> a
const flip = (f) => (a, b, ...c) => f.apply(f, [b, a].concat(c));

export default flip;
