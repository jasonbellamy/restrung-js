import R from 'ramda';

/**
 * Applies a function to the head of a string and returns the result back into the head.
 *
 * @sig (a -> a) -> a
 * @param {Function} f
 * @param {String} s
 * @return {String}
 */
const transformHead = R.curry((f, s) => {
  return R.concat(
    R.compose(f, R.head)(s),
    R.tail(s)
  );
});

export default transformHead;
