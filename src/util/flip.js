import curry from '../../src/util/curry.js';

// a -> a
const flip = (f) => curry((a, b, ...c) => f.apply(f, [b, a].concat(c)));

export default flip;
