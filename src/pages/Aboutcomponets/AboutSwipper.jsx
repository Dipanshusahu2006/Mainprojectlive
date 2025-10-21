// TestimonialSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../App.css"; // custom css

const testimonials = [
  {
    text: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada...",
    name: "Maria Jones",
    role: "CEO, Co-Founder, XYZ Inc.",
    img: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    text: "Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi...",
    name: "David Smith",
    role: "CTO, Founder, ABC Corp.",
    img: "https://randomuser.me/api/portraits/men/46.jpg"
  },
  {
    text: "Integer convallis volutpat dui quis scelerisque. Pellentesque habitant morbi tristique...",
    name: "Sophia Lee",
    role: "Manager, Tech Ltd.",
    img: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

function TestimonialSlider() {
  return (
    <div className="testimonial-container">
      <h2 className="testimonial-title">Testimonials</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop
        className="testimonial-swiper"
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-content">
              <p className="testimonial-text">“{t.text}”</p>
              <img src={t.img} alt={t.name} className="testimonial-img" />
              <h3 className="testimonial-name">{t.name}</h3>
              <p className="testimonial-role">{t.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TestimonialSlider;
