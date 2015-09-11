import R from 'ramda';
import transformHead from './util/transform-head.js';

/**
 * Lowercase the first letter of a string.
 *
 * @sig a -> a
 * @param {String} s
 * @return {String}
 */
const uncapitalize = transformHead(R.toLower);

export default uncapitalize;
