import transformHead from './util/transform-head.js';
import upperCase from './util/upper-case.js';

// a -> a
const capitalize = transformHead(upperCase);

export default capitalize;
