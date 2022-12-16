const Car = require('../src/domain/Car');

describe('Car 도메인 테스트', () => {
  test('자동차 이동 메서드', () => {
    const car = new Car('oscar');
    expect(car.move(4)).toEqual(['oscar', 0]);
    expect(car.move(5)).toEqual(['oscar', 1]);
  });

  test('우승 여부 확인 메서드', () => {
    const car = new Car('woochan');
    car.move(6);
    car.move(7);
    car.move(8);
    expect(car.isWinner(3)).toBe(true);
  });

  test('자동차 이름 확인 메서드', () => {
    const car = new Car('oscar');
    expect(car.getCarName()).toBe('oscar');
  });
});
