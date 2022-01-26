import "../styles/ProductInfo.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cart from "@material-ui/icons/ShoppingCart";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/actions/index";

const ProductInfo = ({ product }) => {
  const dispatch = useDispatch();
  const addtoCart = async (item) => {
    const actions = addItem(item);
    await dispatch(actions);
  };
  const { id } = useParams();
  const ProductInfo = product.find((prod) => prod.id.toString() === id);
  function currencyFormat(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  return (
    <div className="productItem">
      <Navbar />
      <div className="productItem__container">
        <div className="productItem__left">
          <div className="productItem__img">
            <img src={ProductInfo.image} alt="" />
          </div>
          <div className="productItem__left-content">
            <div className="productItem__price">
              <span>{currencyFormat(ProductInfo.newPrice)}Đ</span>
            </div>
            <div className="product__btn-group">
              <button
                className="card__cart"
                onClick={() => {
                  addtoCart(ProductInfo);
                }}
              >
                <Cart />
              </button>
            </div>
          </div>
        </div>
        <div className="productItem__right">
          <div className="productItem__infos">
            <div className="productItem__title">
              <span>Thông số kĩ thuật</span>
            </div>
            <div className="productItem__info">
              <div className="productItem__info-item-gray">
                <span className="productItem__name">CPU:</span>
                <p>{ProductInfo.coredetail}</p>
              </div>
              <div className="productItem__info-item-white">
                <span className="productItem__name">RAM:</span>
                <p>{ProductInfo.ramdetail}</p>
              </div>
              <div className="productItem__info-item-gray">
                <span className="productItem__name">Ổ cứng:</span>
                <p>{ProductInfo.ssddetail}</p>
              </div>
              <div className="productItem__info-item-white">
                <span className="productItem__name">Màn hình:</span>
                <p>{ProductInfo.screendetail}</p>
              </div>
              <div className="productItem__info-item-gray">
                <span className="productItem__name">Card màn hình:</span>
                <p>{ProductInfo.gadetail}</p>
              </div>
              <div className="productItem__info-item-white">
                <span className="productItem__name">Hệ điều hành:</span>
                <p>{ProductInfo.hdh}</p>
              </div>
              <div className="productItem__info-item-gray">
                <span className="productItem__name">Thiết kế:</span>
                <p>{ProductInfo.des}</p>
              </div>
              <div className="productItem__info-item-white">
                <span className="productItem__name">
                  Kích thước, trọng lượng:
                </span>
                <p>{ProductInfo.weight}</p>
              </div>
              <div className="productItem__info-item-gray">
                <span className="productItem__name">Thời điểm ra mắt:</span>
                <p>{ProductInfo.year}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductInfo;
