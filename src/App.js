const { Random } = require('@woowacourse/mission-utils');
const Car = require('./domain/Car');
const InputView = require('./UI/InputView');
const OutputView = require('./UI/OutputView');
const makeCarList = require('./utils/makeCarList');
const verify = require('./utils/verify');

class App {
  #cars;
  #winnerState;
  #attemptCount;

  play() {
    return this.inputCarNames();
  }

  inputCarNames() {
    InputView.inputCars((userInput) => {
      try {
        verify.carNameLength(userInput);
        const cars = makeCarList(userInput);
        return this.makeCars(cars, cars.length);
      } catch (error) {
        OutputView.ErrorPrintCarName();
        return this.inputCarNames();
      }
    });
  }

  makeCars(cars, carCount) {
    this.#cars = Array.from({ length: carCount }, () => 0); // hidden class 재생성 방지
    cars.forEach((name, index) => {
      this.#cars[index] = new Car(name);
    });
    return this.inputTryAttempts();
  }

  inputTryAttempts() {
    InputView.inputMove((input) => {
      try {
        verify.isNumber(input);
        this.#attemptCount = Number(input);
        return this.moveRecursive();
      } catch (error) {
        OutputView.ErrorPrintNumberCheck();
        return this.inputTryAttempts();
      }
    });
  }

  moveRecursive() {
    this.move(0);
    // return this.quitGame();
  }

  move(attempt) {
    if (attempt > this.#attemptCount) return;
    this.#cars.forEach((car) => {
      const moveOrNot = Random.pickNumberInRange(0, 9);
      const carState = car.move(moveOrNot);
      this.#winnerState = Math.max(this.#winnerState, carState[1]);

      OutputView.carMove(carState[0], carState[1]);
    });
    this.move(attempt + 1);
  }

  quitGame() {}
}

const app = new App();
app.play();

module.exports = App;
