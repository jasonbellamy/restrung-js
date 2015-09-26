import compose from './util/compose.js';
import trim from './trim.js';
import replace from './util/replace.js';

// a -> a
const spaceCase = compose(
  trim,
  replace(/([a-z])([A-Z])/g, '$1 $2'),
  replace(/(\.|-|_)/g, ' ')
);

export default spaceCase;
