import React, { lazy } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { greenTheme, blueTheme, purpleTheme } from './styles/theme';
import Layout from './layout/Layout';
import LoadingPage from './components/pages/LoadingPage';
import { DefaultTheme } from 'styled-components';

import LoginPage from './components/pages/user/LoginPage';
import RegisterPage from './components/pages/user/RegisterPage';
import MyPage from '../src/components/pages/user/MyPage';
import ProfessionalStorePage from './components/pages/professional/ProfessionalStorePage';
// import SimulationPage from './components/pages/simulation/SimulationPage';
import ProfessionalResultPage from './components/pages/professional/ProfessionalResultPage';

const Home = lazy(() => import('./components/pages/IndexPage'));
const StatusPage = lazy(() => import('./components/pages/status/StatusPage'));
const ProfessionalPage = lazy(
  () => import('./components/pages/professional/ProfessionalPage')
);
const AmatuerPage = lazy(
  () => import('./components/pages/amatuer/AmatuerPage')
);
const AmatuerAnalysisPage = lazy(
  () => import('./components/pages/amatuer/AmatuerAnalysisPage')
);
const AmatuerResultPage = lazy(
  () => import('./components/pages/amatuer/AmatuerResultPage')
);
// const LoginPage = lazy(() => import('./components/pages/user/LoginPage'));
// const RegisterPage = lazy(() => import('./components/pages/user/RegisterPage'));

function App() {
  return (
    <Wrapper>
      <Router>
        <Routes>
          {/* 기본 테마 */}
          <Route path="" element={<CustomThemeProvider theme={greenTheme} />}>
            <Route path="" element={<Home />} />
            <Route path="loading" element={<LoadingPage />} />
            <Route path="user">
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="mypage" element={<MyPage page="mypage" />} />
              <Route path="mystore" element={<MyPage page="mystore" />} />
              <Route path="myarea" element={<MyPage page="myarea" />} />
              {/* <Route path="mypage/:tab" element={<MyPage />} /> */}
            </Route>
          </Route>
          {/* 상권 현황 */}
          <Route
            path="status"
            element={<CustomThemeProvider theme={blueTheme} />}
          >
            <Route path="" element={<StatusPage />} />
          </Route>
          {/* 상권 분석 */}
          {/* <Route
            path="analysis"
            element={<CustomThemeProvider theme={blueTheme} />}
          >
            <Route path="" element={<AnalysisPage />} />
            <Route path="result" element={<AnalysisResultPage />} />
          </Route> */}
          {/* 이미 사장 */}
          <Route
            path="professional"
            element={<CustomThemeProvider theme={greenTheme} />}
          >
            <Route path="" element={<ProfessionalPage />} />
            <Route path="store" element={<ProfessionalStorePage />} />
            <Route path="result" element={<ProfessionalResultPage />} />
          </Route>
          {/* 아마 사장 */}
          <Route
            path="amatuer"
            element={<CustomThemeProvider theme={purpleTheme} />}
          >
            <Route path="" element={<AmatuerPage />} />
            <Route path="analysis" element={<AmatuerAnalysisPage />} />
            <Route path="result" element={<AmatuerResultPage />} />
          </Route>
        </Routes>
      </Router>
    </Wrapper>
  );
}

interface CustomThemeProviderProps {
  theme: DefaultTheme;
}

export const CustomThemeProvider = ({ theme }: CustomThemeProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
};

const Wrapper = styled.div`
  background-image: url('/assets/img/bg-hero-tiles.png');
  background-size: 100%;
  background-position-y: -30%;
  background-position-x: center;
  background-size: 2560px 1836px;
`;

export default App;