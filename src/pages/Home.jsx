import "../styles/Home.scss";
import Navbar from "../components/Navbar";
import SliderFeature from "../components/Slider";
import ProductList from "../components/ProductList";
import SaleOff1 from "../components/SaleOff1";
import SaleOff2 from "../components/SaleOff2";
import SaleOff3 from "../components/SaleOff3";
import Featured from "../components/Featured";
import Footer from "../components/Footer";



const Home = ({product, addItem, countCart}) => {
 
  return (
    <div className="home">
      <Navbar countCart={countCart}/>
      <SaleOff1 />
      <SliderFeature />
      <ProductList product={product} addItem={addItem}/>
      <SaleOff2 />
      <Featured />
      <SaleOff3 />
      <Footer />
    </div>
  );
};

export default Home;
