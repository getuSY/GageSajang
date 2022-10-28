import { createGlobalStyle } from 'styled-components';

// 글로벌 스타일은 여기에 작성

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'Eoe_Zno_B';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_eight@1.0/Eoe_Zno_B.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }
  @font-face {
      font-family: 'Eoe_Zno_M';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_eight@1.0/Eoe_Zno_M.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }
  @import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);
  body {
    margin: 0;
    /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif; */
      font-family: 'Noto Sans KR', sans-serif;
      font-weight: 300;
      font-size: 1.3rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  button {
    border: none;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  a {
    text-decoration: none;
    color: #000;
  }
`;

export default GlobalStyle;
