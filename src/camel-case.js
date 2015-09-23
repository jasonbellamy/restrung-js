import compose from './util/compose.js';
import uncapitalize from './uncapitalize.js';
import pascalCase from './pascal-case.js';

// a -> a
const camelCase = compose(uncapitalize, pascalCase);

export default camelCase;
