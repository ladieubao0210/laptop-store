import "../styles/CartPage.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Delete from "@material-ui/icons/Delete";
import { useSelector, useDispatch } from "react-redux";
import { addItem, decreItem, removeItem } from "../redux/actions/index";

const CartPage = () => {
  const cartItem = useSelector((state) => state.product.cartItem);
  const dispatch = useDispatch();

  const addtoCart = async (item) => {
    const actions = addItem(item);
    await dispatch(actions);
  };

  const decreCart = async (item) => {
    const actions = decreItem(item);
    await dispatch(actions);
  };

  const removeCart = async (item) => {
    const actions = removeItem(item);
    await dispatch(actions);
  };

  function currencyFormat(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  const totalPrice = cartItem.reduce( 
    (total, item) => total + item.quantity * item.newPrice,
    0);

  return (
    <>
      <Navbar />
      <div className="cart__page-container">
        <div className="cart__page-title">Giỏ hàng</div>
        <div className="cart__page-items">
          {cartItem.length === 0 && (
            <h1>Không có sản phẩm nào trong giỏ hàng.</h1>
          )}
          {cartItem.map((item, index) => (
            <div className="cart__page-item" key={index}>
              <div className="cart__page-img">
                <img src={item.image} alt="" />
              </div>
              <div className="cart__page-name">{item.title}</div>
              <div className="cart__page-count">
                <span className="decre" onClick={() => addtoCart(item)}>
                  +
                </span>
                <span className="count">{item.quantity}</span>
                <span className="incre" onClick={() => decreCart(item)}>
                  -
                </span>
                <div className="remove">
                  <Delete className="empty" onClick={() => removeCart(item)} />
                </div>
              </div>
              <div className="cart__page-price">
                <span className="cart__page-price-check">
                  {currencyFormat(item.newPrice * item.quantity)}đ
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="cart__page-item-bottom">
          <div className="cart__page-price-check">
            <span>Tổng tiền: </span>
            <span>Cần thanh toán: </span>
          </div>
          <div className="cart__page-price-total">
            <span>{currencyFormat(totalPrice)}đ</span>
            <span>{currencyFormat(totalPrice)}đ</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
