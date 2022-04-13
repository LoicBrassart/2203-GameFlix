import { Routes, Route } from "react-router-dom";
import Footer from "@components/Footer";
import Header from "@components/Header";
import TotoPage from "@pages/TotoPage";
import HomePage from "@pages/HomePage";
import SApp from "./style";

function App() {
  return (
    <SApp>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/toto" element={<TotoPage />} />
        </Routes>
      </main>
      <Header />
      <Footer />
    </SApp>
  );
}

export default App;
