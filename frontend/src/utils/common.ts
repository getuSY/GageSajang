export const numberComma = (num: number) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const week = [
  '월요일',
  '화요일',
  '수요일',
  '목요일',
  '금요일',
  '토요일',
  '일요일',
];
const gender = ['남성', '여성'];
const age = ['10대', '20대', '30대', '40대', '50대', '60대 이상'];
const year = [2017, 2018, 2019, 2020, 2021];
const quarter = ['1분기', '2분기', '3분기', '4분기'];
const time = ['0~6시', '6~11시', '11~14시', '14~17시', '17~21시', '21~24시'];
const cs = ['외식업', '서비스업', '도소매업'];
const div = ['골목상권', '전통시장', '관광특구', '발달상권'];

const labels: {
  week: Array<string>;
  gender: Array<string>;
  age: Array<string>;
  year: Array<number>;
  quarter: Array<string>;
  time: Array<string>;
  cs: Array<string>;
  div: Array<string>;
} = {
  week,
  gender,
  age,
  year,
  quarter,
  time,
  cs,
  div,
};

export const getMax = (
  data: number[],
  type: 'gender' | 'week' | 'age' | 'year' | 'quarter' | 'time' | 'cs' | 'div'
) => labels[type][data.indexOf(Math.max(...data))];

export const getRate = (data: number[]) => {
  const newData = data.map(() => 0);
  const dataSum = data.reduce((a, b) => a + b);
  for (let i = 0; i < data.length; i++) {
    newData[i] = (data[i] / dataSum) * 100;
  }
  return newData;
};

// 유효성 검사
export const emailTest = (email: string) =>
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(
    email
  );
