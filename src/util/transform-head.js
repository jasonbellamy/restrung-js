import R from 'ramda';

// (a -> a) -> a
const transformHead = R.curry((f, s) => {
  return R.concat(
    R.compose(f, R.head)(s),
    R.tail(s)
  );
});

export default transformHead;
