const verify = {
  carNameLength(input) {
    const result = input.split(',');
    result.forEach((value) => {
      if (value.length > 5) throw new Error();
    });
  },

  isNumber(input) {
    if (Number.isNaN(Number(input))) throw new Error();
  },
};

module.exports = verify;
