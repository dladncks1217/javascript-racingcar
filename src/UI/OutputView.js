const { Console } = require('@woowacourse/mission-utils');
const { ERROR, MESSAGE } = require('../constants/constants');

const OutputView = {
  carMove(name, state) {
    let str = `${name} : `;
    let carState = '';
    for (let index = 0; index < state; index++) carState += MESSAGE.CAR_MOVE;
    Console.print(str + carState);
  },

  printWinner(winners) {
    Console.print(`${MESSAGE.WINNER} : ${winners.join(', ')}`);
  },

  endGame() {
    Console.close();
  },

  ErrorPrintCarName() {
    Console.print(ERROR.INPUT_CAR);
  },
  ErrorPrintNumberCheck() {
    Console.print(ERROR.NOT_NNUMBER);
  },
};

module.exports = OutputView;
