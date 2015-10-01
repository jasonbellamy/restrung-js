import compose from './util/compose.js';
import replace from './util/replace.js';
import trim from './trim.js';

// a -> a
const clean = compose(
  trim,
  replace(/\s{2}/, '')
);

export default clean
