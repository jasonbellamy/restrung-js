import R from 'ramda';

// a -> a
const spaceCase = R.compose(
  R.trim,
  R.replace(/([a-z])([A-Z])/, '$1 $2'),
  R.replace(/(\.|-|_)/g, ' ')
);

export default spaceCase;
