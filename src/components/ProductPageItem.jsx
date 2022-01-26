import "../styles/ProductListPageItem.scss";
import Screen from "@material-ui/icons/AspectRatio";
import CPU from "@material-ui/icons/Memory";
import Ram from "@material-ui/icons/VerticalSplit";
import Card from "@material-ui/icons/DeveloperBoard";
import Disk from "@material-ui/icons/Storage";
import { Link } from "react-router-dom";

const ProductPageItem = ({ item }) => {
  function currencyFormat(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  return (
    <div className="product__item">
      <Link to={`/product/${item.id}`}>
        <div className="product__img">
          <img src={item.image} alt="" />
        </div>
      </Link>

      <div className="product__body">
        <span className="product__title">{item.title}</span>
        <div className="product__price">
          <span className="product__oldPrice">
            {currencyFormat(item.oldPrice)}Đ
          </span>
          <span className="product__newPrice">
            {currencyFormat(item.newPrice)}Đ
          </span>
        </div>
        <div className="product__infos">
          <div className="product__info">
            <Screen className="product__icon" />
            <span>{item.screen}'</span>
          </div>
          <div className="product__info">
            <CPU className="product__icon" />
            <span>Core i{item.core}</span>
          </div>
          <div className="product__info">
            <Ram className="product__icon" />
            <span>Ram {item.ram}GB</span>
          </div>
          <div className="product__info">
            <Disk className="product__icon" />
            <span>SSD {item.ssd}GB</span>
          </div>
          <div className="product__info">
            <Card className="product__icon" />
            <span>{item.ga}</span>
          </div>
        </div>
      </div>
      <div className="product__btn">
        <Link to={`/product/${item.id}`}>Chi tiết sản phẩm</Link>
      </div>
    </div>
  );
};

export default ProductPageItem;
