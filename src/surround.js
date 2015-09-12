import R from 'ramda';

// a -> a -> a
const surround = R.curry((a, b) => {
  return R.compose(
    R.join(''),
    R.append(a),
    R.prepend(a)
  )(b);
});

export default surround;
