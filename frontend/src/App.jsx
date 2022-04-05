import Carousel from "@components/Carousel";
import Footer from "@components/Footer";
import Header from "@components/Header";
import SApp from "./style";

function App() {
  return (
    <SApp>
      <Header />
      <Carousel />
      <main>Wall</main>
      <Footer />
    </SApp>
  );
}

export default App;
