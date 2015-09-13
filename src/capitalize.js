import R from 'ramda';
import transformHead from './util/transform-head.js';

// a -> a
const capitalize = transformHead(R.toUpper);

export default capitalize;
