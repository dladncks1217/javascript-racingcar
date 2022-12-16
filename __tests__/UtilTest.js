const verify = require('../src/utils/verify');

describe('유틸함수 테스트 목록', () => {
  test('차 이름 입력값 검증을 위한 테스트코드', () => {
    expect(() => {
      verify.carNameLength('oscar, 이름이정말긴차, woochan');
    }).toThrow();
  });

  test('입력값 숫자 검증을 위한 테스트코드', () => {
    expect(() => {
      verify.isNumber('e');
    }).toThrow();
  });
});
