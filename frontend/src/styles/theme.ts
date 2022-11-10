import { DefaultTheme } from 'styled-components';

// 테마 컬러 파일

const commonTheme = {
  lightColor: '#0066ff', // 덜 진한 색
  darkColor: '#001aa4',
};

export const greenTheme: DefaultTheme = {
  mainColor: '#53C882',
  subColor: 'rgba(93, 217, 143, 0.56)',
  blurColor: 'linear-gradient(92.86deg, #01AD7C 0%, #FFF95B 100%)',
  gradColor:
    'linear-gradient(-90deg, #F9F254 0%, #9CED80 43.75%, #49D0A8 100%)',
  // gradColor: 'linear-gradient(90deg, #01AD7C 0%, #37E19D 43.89%, #FFF80B 100%)',
  lightColor: '#53C882',
  darkColor: '#1CA37C',
};

export const purpleTheme: DefaultTheme = {
  mainColor: '#A155B9',
  subColor: '#DFB2ED',
  blurColor:
    // 'linear-gradient(92.86deg, #0C0AA8 0%, #B10DAB 40.62%, #FF0099 100%)',
    'linear-gradient(90deg, #545BF9 0%, #B85DE9 100%)',
  gradColor:
    // 'linear-gradient(90deg, #29187C -10.69%, #D00CF0 40.09%, #E12C61 119.31%)',
    'linear-gradient(90deg, #545BF9 0%, #B85DE9 100%)',

  darkColor: '#5B0E98',
  lightColor: '#8B3BCA',
};

export const blueTheme: DefaultTheme = {
  mainColor: '#6560D2',
  // mainColor: '#54BEF9',
  subColor: '#B7B4F6',
  blurColor:
    'linear-gradient(92.86deg, #30EFEF 0%, #01A9F3 47.92%, #001AFF 100%)',
  // gradColor: 'linear-gradient(270deg, #00D1FF 0%, #0855F9 56.2%, #1406B4 100%)',
  // gradColor: 'linear-gradient(90deg, #23CFFA 0%, #A9B6F6 36.98%, #FC6DD1 100%)',
  gradColor: 'linear-gradient(90deg, #54BEF9 0%, #715DE9 100%)',
  ...commonTheme,
};

// export const orangeTheme: DefaultTheme = {
//   mainColor: '#FF7714',
//   subColor: '#FFA05B',
//   blurColor:
//     'linear-gradient(90deg, #FF300C 0%, #FF8648 49.48%, #FFEC3F 96.35%)',
//   gradColor:
//     'linear-gradient(90deg, #F1510C 0%, #FF8648 49.48%, #FFEC3F 96.35%)',
//   darkColor: '#FB8F41',
//   lightColor: '#FFA05B',
// };
