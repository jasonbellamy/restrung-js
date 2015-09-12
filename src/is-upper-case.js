import R from 'ramda';

// a -> Boolean
const isUpperCase = (s) => R.equals(s, R.toUpper(s));

export default isUpperCase;
