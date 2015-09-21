const compose = (...functions) => {
  return (...initial) => {
    let count = functions.length;

    return (function accum(arg) {
      return count ? (count--, accum(functions[count].call(functions[count], arg))) : arg;
    }).apply(functions[count - 1], initial);
  };
};

export default compose;
