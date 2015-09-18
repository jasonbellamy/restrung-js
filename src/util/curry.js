// (* -> a) -> (* -> a)
const curry = (fn, ...largs) => {
  const arity = fn.length;

  const accumulator = (...rargs) => {
    if (largs.length) {
      rargs = largs.concat(rargs);
    }

    if (rargs.length >= arity) {
      return fn.apply(fn, rargs);
    }

    return curry.apply(fn, [fn].concat(rargs));
  };

  return (largs.length >= arity) ? accumulator() : accumulator;
};

export default curry;
