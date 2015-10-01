import curry from './curry.js';

// a -> b -> b
const splitEvery = curry((start, array) => {
  var count = start - start;
  var results = [];

  while (count < array.length) {
    count = count + start;
    results.push(array.slice(count - start, count));
  }

  return results;
});

export default splitEvery;
