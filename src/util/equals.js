import curry from './curry.js';

// * -> * -> b
const equals = curry((a, b) => a === b);

export default equals
