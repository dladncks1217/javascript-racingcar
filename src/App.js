const Car = require('./domain/Car');
const InputView = require('./UI/InputView');
const OutputView = require('./UI/OutputView');
const makeCarList = require('./utils/makeCarList');
const verify = require('./utils/verify');

class App {
  #cars;
  #winnerState;

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
    console.log(this.#cars);
  }
}

const app = new App();
app.play();

module.exports = App;
