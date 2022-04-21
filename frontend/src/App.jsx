import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { Reset } from "styled-reset";
import Footer from "@components/Footer";
import Header from "@components/Header";
import Modal from "@components/Modal";
import HomePage from "@pages/HomePage";
import BaSPage from "@pages/BaSPage";
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
            <Route path="/labo" element={<BaSPage />} />
          </Routes>
        </main>
        <Header />
        <Footer />
        <Modal title="Well...">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          doloremque non fugiat autem expedita quam!
        </Modal>
      </SApp>
    </ThemeProvider>
  );
}

export default App;
