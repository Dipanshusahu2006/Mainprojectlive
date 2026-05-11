import React from "react";
import Slider from "react-slick";
import '../App.css';
import { Link } from "react-router-dom";

const sliderData = [
    {
    image: "https://www.shutterstock.com/image-illustration/warm-modern-living-room-openconcept-1000w-2638126305.jpg",
    title: "BEST OF COLLECTION",
    subtitle: "Spring - Summer 2023",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident",
  },
  {
    image: "https://www.shutterstock.com/shutterstock/photos/2170027799/display_1500/stock-photo-modern-interior-with-fireplace-in-house-near-forest-d-render-2170027799.jpg",
    title: "BEST OF COLLECTION",
    subtitle: "Spring - Summer 2023",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident",
  },
  {
    image: "https://www.shutterstock.com/shutterstock/photos/1902537682/display_1500/stock-photo-corner-of-stylish-living-room-with-gray-walls-concrete-floor-dark-grey-sofa-and-kitchen-in-the-1902537682.jpg",
    title: "NEW TRENDS",
    subtitle: "Autumn 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus.",
  },
];

function Headersectione() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Slider {...settings}>
  {sliderData.map((slide, index) => (
    <div key={index} tabIndex="-1"> {/* Add tabIndex to outer div */}
      <div
        className="Headarsectione"
        style={{
          backgroundImage: `url(${slide.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '580px',
          width: '100%',
        }}
      >
        <div className="pargraph">
          <h5>{slide.subtitle}</h5>
          <h1>{slide.title}</h1>
          <p>{slide.description}</p>
          <button><Link to="/shop">Shop now</Link></button>
        </div>
      </div>
    </div>
  ))}
</Slider>

  );
}
console.log(sliderData);

export { Headersectione };





