class Car {
  #name;
  #state;

  constructor(name) {
    this.#name = name;
    this.#state = 0;
  }

  move(number) {
    if (number > 4) {
      this.#state += 1;
      return [this.#name, this.#state];
    }
    return [this.#name, this.#state];
  }

  isWinner(state) {
    if (state === this.#state) return true;
    return false;
  }
}

module.exports = Car;
