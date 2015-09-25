import prepend from './prepend.js';
import flip from './flip.js';

// a -> a -> a
const append = flip(prepend);

export default append;
