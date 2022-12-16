const MESSAGE = Object.freeze({
  CAR_MOVE: '-',
  EXECUTE_RESULT: '실행 결과',
  WINNER: '최종 우승자',
});

const ERROR = Object.freeze({
  INPUT_CAR: '[ERROR] 각 차의 이름은 쉼표로 구분되며, 5글자 이하로 작성해주세요.',
  NOT_NNUMBER: '[ERROR] 숫자만 입력할 수 있습니다.',
});

const INPUT = Object.freeze({
  CAR_NAMES: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
  TRY_COUNT: '시도할 회수는 몇회인가요?',
});

module.exports = { MESSAGE, ERROR, INPUT };
