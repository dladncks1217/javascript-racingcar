const { Console } = require('@woowacourse/mission-utils');
const { ERROR } = require('../constants/constants');

const OutputView = {
  ErrorPrintCarName() {
    Console.print(ERROR.INPUT_CAR);
  },
};

module.exports = OutputView;
