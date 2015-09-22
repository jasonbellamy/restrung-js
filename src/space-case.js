import R from 'ramda';
import compose from './util/compose.js';

// a -> a
const spaceCase = compose(
  R.trim,
  R.replace(/([a-z])([A-Z])/g, '$1 $2'),
  R.replace(/(\.|-|_)/g, ' ')
);

export default spaceCase;
