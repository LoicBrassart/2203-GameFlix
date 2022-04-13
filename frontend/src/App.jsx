import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { Reset } from "styled-reset";
import Footer from "@components/Footer";
import Header from "@components/Header";
import HomePage from "@pages/HomePage";
import GlobalStyle from "./globalStyles";
import SApp from "./style";

function App() {
  const theme = useSelector((store) => store.theme);

  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <SApp>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
        <Header />
        <Footer />
      </SApp>
    </ThemeProvider>
  );
}

export default App;
