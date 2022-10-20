import React, { Suspense, lazy } from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Header from "./layout/Header";
import { greenTheme, blueTheme, purpleTheme, orangeTheme } from "./styles/theme";
import Green from "./pages/theme/Green";
import Blue from "./pages/theme/Blue";
import Purple from "./pages/theme/Purple";
import Orange from "./pages/theme/Orange";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

function App() {
  return (
    <Wrapper>
      <Router>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='green' element={<CustomThemeProvider theme={greenTheme} />}>
              <Route path='' element={<Green />} />
            </Route>
            <Route path='blue' element={<CustomThemeProvider theme={blueTheme} />}>
              <Route path='' element={<Blue />} />
            </Route>
            <Route path='purple' element={<CustomThemeProvider theme={purpleTheme} />}>
              <Route path='' element={<Purple />} />
            </Route>
            <Route path='orange' element={<CustomThemeProvider theme={orangeTheme} />}>
              <Route path='' element={<Orange />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </Wrapper>
  );
}

const CustomThemeProvider = ({ theme }: any) => {
  return (
    <ThemeProvider theme={theme}>
      <Outlet />
    </ThemeProvider>
  );
};

const Wrapper = styled.div``;

export default App;
