import "../styles/Featured.scss";
import Speaker from "@material-ui/icons/Speaker";
import Shield from "@material-ui/icons/Smartphone";
import Battery from "@material-ui/icons/BatteryChargingFull";
import SDC from "@material-ui/icons/SdCard";
import Apple from "@material-ui/icons/Apple";
import Headphone from "@material-ui/icons/Headset";
import Mouse from "@material-ui/icons/Mouse";
import Keyboard from "@material-ui/icons/Keyboard";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featured__title">
        <span>Phụ kiện hot</span>
      </div>
      <div className="featured__items">
        <div className="featured__item">
          <span>
            <Speaker className="icon" />
          </span>
          <span className="title">Loa</span>
        </div>
        <div className="featured__item">
          <span>
            <Mouse className="icon" />
          </span>
          <span className="title">Chuột</span>
        </div>
        <div className="featured__item">
          <span>
            <Keyboard className="icon" />
          </span>
          <span className="title">Bàn phím</span>
        </div>
        <div className="featured__item">
          <span>
            <Headphone className="icon" />
          </span>
          <span className="title">Tai nghe</span>
        </div>
        <div className="featured__item">
          <span>
            <Shield className="icon" />
          </span>
          <span className="title">Túi chống sốc</span>
        </div>
        <div className="featured__item">
          <span>
            <Battery className="icon" />
          </span>
          <span className="title">Pin laptop</span>
        </div>
        <div className="featured__item">
          <span>
            <SDC className="icon" />
          </span>
          <span className="title">Ổ cứng</span>
        </div>
        <div className="featured__item">
          <span>
            <Apple className="icon" />
          </span>
          <span className="title">Apple</span>
        </div>
      </div>
    </div>
  );
};

export default Featured;
