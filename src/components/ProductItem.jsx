import "../styles/ProductItem.scss";
import ReactStar from "react-rating-stars-component";
import Cart from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import {addItem} from '../redux/actions/index'
import { useDispatch } from "react-redux";

const ProductItem = ({ item }) => {
  const dispatch = useDispatch()
  const addtoCart = async () =>{
    const actions = addItem(item)
  await dispatch(actions)
  }
  function currencyFormat(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  return (
    <div className="product__card">
      <div className="card__img">
        <Link to={`/product/${item.id}`}> 
        <img src={item.image} priority="false" alt="" />
        </Link>
      </div>
      <div className="card__content">
        <h3 className="card__title">{item.title}</h3>
        <p className="card__desc">{item.description}</p>
        <div className="card__price">
          <span className="card__price-old">
            {currencyFormat(item.oldPrice)}đ
          </span>
          <span className="card__price-new">
            {currencyFormat(item.newPrice)}đ
          </span>
        </div>
        <div className="card__info">
          <div className="card__stars">
            <ReactStar
              count={5}
              activeColor="#ffbc48"
              size={24}
              className="star"
            />
          </div>
          <button className="card__cart" onClick={()=>{addtoCart(item)}}>
            <Cart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;