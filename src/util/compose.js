const compose = (...functions) => {
  return (...initial) => {
    let count = functions.length;

    return (function accumulator(arg) {
      return count ? (count--, accumulator(functions[count].call(functions[count], arg))) : arg;
    }).apply(functions[count - 1], initial);
  };
};

export default compose;
