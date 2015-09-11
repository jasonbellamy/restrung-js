# Restrung [![Build Status](https://travis-ci.org/restrung/restrung-js.svg)](https://travis-ci.org/restrung/restrung-js)

> Functional JavaScript string helpers built on top of [Ramda](https://github.com/ramda/ramda)


## Overview

This project in its current state exists solely as a learning exercise into functional programming.


## Getting Started

- Install with [NPM](https://www.npmjs.org/) - `npm install --save restrung`

## API

These are the current/planned functions this library will support.

### String

- lowerCase
- upperCase
- [camelCase](src/camel-case.js)
- [capitalize](src/capitalize.js)
- [uncapitalize](src/uncapitalize.js)
- mixedCase
- snakeCase
- [spaceCase](src/space-case.js)

### Type

- isUpper
- [isCamelCase](src/is-camel-case.js)
- [isCapitalized](src/is-capitalized.js)
- isMixedCase
- isSnakeCase
- [isSpaceCase](src/is-space-case.js)

## Developing

[restrung](https://github.com/restrung/restrung-js) is built using **ES6**. Run the following task to compile the `src/` into `dist/`.

```bash
npm run build
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality.


## License
Copyright (c) 2015 [Jason Bellamy ](http://jasonbellamy.com)  
Licensed under the MIT license.
