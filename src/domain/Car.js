class Car {
  #name;
  #state;

  constructor(name) {
    this.#name = name;
    this.#state = 0;
  }

  move() {}
}

module.exports = Car;
