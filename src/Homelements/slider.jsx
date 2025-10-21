import React from "react";
import Slider from "react-slick";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div style={{ width: "600px", margin: "auto" }}>
      <Slider {...settings}>
        <div><img src="https://via.placeholder.com/600x300?text=Slide+1" alt="1" /></div>
        <div><img src="https://via.placeholder.com/600x300?text=Slide+2" alt="2" /></div>
        <div><img src="https://via.placeholder.com/600x300?text=Slide+3" alt="3" /></div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
