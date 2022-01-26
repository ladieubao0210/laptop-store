import { useState } from "react";
import { useSelector } from 'react-redux';
import "../styles/ProductList.scss";
import ProductItem from "./ProductItem";
import { mobileItem, OtherItem } from "../data";
import Laptop from '@material-ui/icons/LaptopMac';
import Phone from "@material-ui/icons/PhoneIphone";
import LCD from '@material-ui/icons/Tv';

const ProductList = ({addItem}) => {
  const product = useSelector(state => state.product.laptopItems)
  const [tabs, setTabs] = useState(1);
  const [show, setShow] = useState(true);
  const handleTabs = (index) => {
    setTabs(index);
    setShow(true);
  };
  return (
    <div className="product">
      <h1 className="product__title">Sản phẩm bán chạy</h1>
      <div className="product__tabs">
        <div
          onClick={() => handleTabs(1)}
          className={
            tabs === 1 ? "product__tab product__active" : "product__tab"
          }
        >
          <Laptop className="tab__icon"/>
        </div>
        <div
          onClick={() => handleTabs(2)}
          className={
            tabs === 2 ? "product__tab product__active" : "product__tab"
          }
        >
         <Phone className="tab__icon"/>
        </div>
        <div
          onClick={() => handleTabs(3)}
          className={
            tabs === 3 ? "product__tab product__active" : "product__tab"
          }
        >
          <LCD className="tab__icon"/>
        </div>
      </div>
      <div className="product__list">
        {show && tabs === 1 && (
          <div className="product__item-list">
            {product.map((item, index) => (
              <ProductItem addItem={addItem} key={index} item={item} />
            ))}
          </div>
        )}
        {show && tabs === 2 && (
          <div className="product__item-list">
           {mobileItem.map((item, index) => (
              <ProductItem key={index} item={item} />
            ))}
          </div>
        )}
        {show && tabs === 3 && (
          <div className="product__item-list">
           {OtherItem.map((item, index) => (
              <ProductItem key={index} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
