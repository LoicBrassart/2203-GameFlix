import Carousel from "@components/Carousel";
import Footer from "@components/Footer";
import Header from "@components/Header";
import SApp from "./style";

function App() {
  return (
    <SApp>
      <Header />
      <main>
        <Carousel />
        <section>Wall of tiles</section>
      </main>
      <Footer />
    </SApp>
  );
}

export default App;
