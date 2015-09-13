import R from 'ramda';
import transformHead from './util/transform-head.js';

// a -> a
const uncapitalize = transformHead(R.toLower);

export default uncapitalize;
