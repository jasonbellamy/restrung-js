import R from 'ramda';
import uncapitalize from './uncapitalize.js';
import pascalCase from './pascal-case.js';

// a -> a
const camelCase = R.compose(uncapitalize, pascalCase);

export default camelCase;
