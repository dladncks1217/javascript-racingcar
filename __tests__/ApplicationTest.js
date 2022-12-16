const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');

// MissionUtils.Console.readLine = jest.fn();
// MissionUtils.Console.readLine.mockImplementationOnce('');

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('ApplicationTest', () => {
  //   test('차 이름이 5글자를 넘어갈 경우 오류 발생.', () => {
  //     MissionUtils.Console.readLine = jest.fn();
  //     MissionUtils.Console.readLine.mockImplementationOnce('');
  //     const app = new App();
  //     expect(() => {
  //       app.play();
  //     }).toThrow();
  //   });
  // throw 대신 spyon으로 Console.print 추적해야됨
});
