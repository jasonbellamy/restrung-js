import R from 'ramda';
import transformHead from './util/transform-head.js';

/**
 * Uppercase the first letter of a string.
 *
 * @sig a -> a
 * @param {String} s
 * @return {String}
 */
const capitalize = transformHead(R.toUpper);

export default capitalize;
