const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, INPUT } = require('../constants/constants');

const InputView = {
  inputCars(callback) {
    Console.readLine(INPUT.CAR_NAMES + '\n', callback);
  },

  inputMove(callback) {
    Console.readLine(INPUT.TRY_COUNT + '\n', callback);
  },
};

module.exports = InputView;
