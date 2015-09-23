import lowerCase from './util/lower-case.js';
import transformHead from './util/transform-head.js';

// a -> a
const uncapitalize = transformHead(lowerCase);

export default uncapitalize;
