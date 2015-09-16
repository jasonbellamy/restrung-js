// a -> a
const curry = (fn) => {
  const arity = fn.length;

  return function(...args) {
    if (arity === args.length) {
      return fn.apply(this, args);
    }

    return function (...more) {
      return fn.apply(this, args.concat(more));
    }
  };
};

export default curry;
