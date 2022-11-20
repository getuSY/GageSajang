import { createGlobalStyle } from 'styled-components';

// 글로벌 스타일은 여기에 작성

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'NanumBarunGothic';
  font-style: normal;
  font-weight: 400;
  src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot');
  src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot?#iefix') format('embedded-opentype'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.woff') format('woff'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.ttf') format('truetype');
  }
@font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}


@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
  body {
    margin: 0;
    /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif; */
      font-family: 'Pretendard-Regular', 'Noto Sans KR', sans-serif;
      font-weight: 400;
      /* font-size: 1.3rem; */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
  }
  *::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  *::-webkit-scrollbar-thumb {
    background-color: #6f7582;
    border-radius: 6px;
    background-clip: padding-box;
    border: 0px solid transparent;
  }
  *::-webkit-scrollbar-track {
    border-radius: 6px;
    box-shadow: inset 0px 0px 5px white;
  }

  button {
    border: none;
    font-family: inherit;
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
