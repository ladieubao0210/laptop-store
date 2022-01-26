import { useState, useEffect } from "react";
import { useSelector } from 'react-redux'
import "../styles/ProductListPage.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SaleOff3 from "../components/SaleOff3";
import ProductPageItem from "../components/ProductPageItem";
import { brandCheck, laptopItem } from "../data";

const ProductListPage = () => {
  const product = useSelector(state => state.product.laptopItems)
  const [productList, setProductList] = useState("all-brand");
  const [filterProduct, setFilterProduct] = useState([]);
  
  const handleCheck = (itemName) => {
    const isChecked = productList === itemName ? true : false
    if(isChecked === true) {
      setProductList("")
    }else {
      setProductList(itemName)
    }
  }

  useEffect(() => {
    if (productList === "") {
      setFilterProduct(laptopItem);
      setProductList("all-brand");
    } else {
      setFilterProduct(
        product.filter((item) => item.name.includes(productList))
      );
    }
  }, [productList, product]);

  return (
    <div className="product__page">
      <Navbar />
      <SaleOff3 />
      <div className="product__list-filter">
        <div className="product__list-menu">
          <div className="product__list-option">
            <h3 className="product__list-title">Hãng sản xuất</h3>
            <div className="product__list-content">
              {brandCheck.map((item, index) => (
                <div className="product__list-item" key={index}>
                  <input
                    type="checkbox"
                    checked={productList === item.name}
                    onChange={() => handleCheck(item.name)}
                  />
                  <label className="product__list-name">{item.title}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="product__list-items">
          <div className="product__list-header">
            <h2>Sản phẩm</h2>
          </div>
          <div className="product__list-product">
            {filterProduct.map((item, index) => (
              <ProductPageItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductListPage;
