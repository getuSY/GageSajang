import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mainColor: string;
    subColor: string;
    blurColor: string;
    gradColor: string;
    lightColor: string;
    darkColor: string;
  }
}
