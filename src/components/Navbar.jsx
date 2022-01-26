import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../styles/Navbar.scss";
import Cart from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { navbarItem } from "../data";
import Bars from "@material-ui/icons/Dehaze";

const Navbar = () => {
  const cartItem = useSelector((state) => state.product.cartItem);
  const [navbar, setNavbar] = useState(false);
  const [slidebar, setSlidebar] = useState(false);
  const handleClick = () => {
    setSlidebar(!slidebar);
  }
  useEffect(() => {
    const changeNavbar = () => {
      if (window.scrollY >= 100) {
        return setNavbar(true);
      } else {
        return setNavbar(false);
      }
    };
    window.addEventListener("scroll", changeNavbar);
    return () => {
      window.removeEventListener("scroll", changeNavbar);
    };
  }, []);
  return (
    <div className={navbar ? "navbar_scroll" : "navbar"}>
      <div className="side__icons">
        <Bars className="bars__icon" onClick={handleClick}/>
      </div>
      <div className="navbar__left">
        <div className="navbar__logo">
          <Link to="/">
          <img src="/Img/Logo.png" alt="" className="navbar__img" />
          </Link>
        </div>
        <div className="navbar__texts">
          <span className="navbar__text">STORE</span>
        </div>
      </div>
      <div className="navbar__center">
        <ul className="navbar__list" style={ slidebar ? {top:'100px'} : {top:'-100vh'}}>
          {navbarItem.map((item, index) => (
            <li className="navbar__link" key={index}>
              <Link to={`/products/${item.cat}`} className="navbar__item">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar__right">
        <Link to="/cart" className="navbar__cart">
          <Cart className="icon" />
          <div className="navbar__count">{cartItem.length}</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
