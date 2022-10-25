import React, { lazy } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  greenTheme,
  blueTheme,
  purpleTheme,
  orangeTheme,
} from './styles/theme';
import Layout from './layout/Layout';
import LoadingPage from './components/pages/LoadingPage';
import { DefaultTheme } from 'styled-components';
import LoginPage from '../src/components/pages/login/LoginPage';

const Home = lazy(() => import('./components/pages/IndexPage'));
const StatusPage = lazy(() => import('./components/pages/status/StatusPage'));
const AnalysisPage = lazy(
  () => import('./components/pages/analysis/AnalysisPage')
);
const ProfessionalPage = lazy(
  () => import('./components/pages/professional/ProfessionalPage')
);
const AmatuerPage = lazy(
  () => import('./components/pages/amatuer/AmatuerPage')
);

function App() {
  return (
    <Wrapper>
      <Router>
        <Routes>
          <Route path="" element={<CustomThemeProvider theme={greenTheme} />}>
            <Route path="" element={<Home />} />
            <Route path="loading" element={<LoadingPage />} />
          </Route>
          <Route
            path="status"
            element={<CustomThemeProvider theme={orangeTheme} />}
          >
            <Route path="" element={<StatusPage />} />
          </Route>
          <Route
            path="analysis"
            element={<CustomThemeProvider theme={blueTheme} />}
          >
            <Route path="" element={<AnalysisPage />} />
          </Route>
          <Route
            path="professional"
            element={<CustomThemeProvider theme={greenTheme} />}
          >
            <Route path="" element={<ProfessionalPage />} />
          </Route>
          <Route
            path="amatuer"
            element={<CustomThemeProvider theme={purpleTheme} />}
          >
            <Route path="" element={<AmatuerPage />} />
          </Route>
          <Route
            path="login"
            element={<CustomThemeProvider theme={greenTheme} />}
          >
            <Route path="" element={<LoginPage />} />
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

const Wrapper = styled.div``;

export default App;
