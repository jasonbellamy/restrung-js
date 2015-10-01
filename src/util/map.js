import curry from './curry.js';

// a -> b -> b
const map = curry((a, b) => {
  return b.map(a)
});

export default map
