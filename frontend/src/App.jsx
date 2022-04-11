import Carousel from "@components/Carousel";
import ThumbWall from "@components/ThumbWall";
import Footer from "@components/Footer";
import Header from "@components/Header";
import SApp from "./style";

function App() {
  return (
    <SApp>
      <Header />
      <main>
        <Carousel />
        <ThumbWall />
      </main>
      <Footer />
    </SApp>
  );
}

export default App;
