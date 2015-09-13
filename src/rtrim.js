import R from 'ramda';

// a -> a
const rtrim = R.replace(/\s+$/, '');

export default rtrim;
