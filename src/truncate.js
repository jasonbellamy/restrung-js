import R from 'ramda';

// a -> b -> b
const truncate = R.compose(
  R.join(''),
  R.append('...'),
  R.head,
  R.splitEvery
);

export default truncate;
