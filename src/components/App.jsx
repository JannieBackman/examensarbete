import Hero from './Hero';
import Text from './Text';
import { ProductBottom, ProductHeader, ProductTop } from './Products';
import Review from './Review';
import About from './About';
import Footer from './Footer';
import B2b from './b2b';
import Header from './Header';
import ImageGallery from './gallery';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Text />
      <ProductHeader />
      <ProductTop />
      <ProductBottom />
      <Review />
      <B2b />
      <About />
      <ImageGallery />
      <Footer />
    </div>
  );
}

export default App;
