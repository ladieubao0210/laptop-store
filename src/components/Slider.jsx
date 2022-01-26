import Slider from "react-slick";
import "../styles/Slider.scss";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import { sliderItemL } from '../data';

const SliderFeature = () => {
  const settings = {
    autoplay:true,
    autoplaySpeed:3000,
    dots: false,
    infinite: true,
    fade:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow:true,
    className:'slides'
  };

  return (
    <div className="slider__section">
      <div className="slider__items1">
        <Slider {...settings}>
        {sliderItemL.map((item,index) =>(
          <div className="slider__content" key={index}>
            <img src={item.img} alt="" />
          </div>
        ))}
        </Slider>
      </div>
      <div className="slider__items2">
          <img src="/Img/SlideR1.jpg" alt=""/>
      </div>
      <div className="slider__items3">
      <img src="/Img/SlideR2.jpg"  alt=""/>
      </div>
    </div>
  );
};

export default SliderFeature;
