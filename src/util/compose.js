const compose = (...functions) => {

  return (...initial) => {
    let count  = functions.length - 1;
    let result = functions[count].apply(functions[count], initial)

    while (count--) {
      result = functions[count].call(functions[count], result);
    }

    return result;
  };
};

export default compose;
