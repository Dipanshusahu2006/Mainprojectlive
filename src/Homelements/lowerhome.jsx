import React from "react";
import '../App.css';

function Lowerhomepagesectione() {
  return (
    <>
      {/* 🔹 Offer Section */}
      <section className="lowersection">
        <div className="imagesbolg">
          <p className="Discounnt">DISCOUNTED UP TO 50%</p>
          <h1 className="heroHeading">Zigzag King Chair</h1>
          <p className="heroSub">LIMITED TIME OFFER</p>
          <div className="timer">00days, 00h : 00m : 00s</div>
          <span className="shopNow">SHOP NOW</span>
        </div>
      </section>

      {/* 🔹 Features Section */}
      <section className="features">
        <div className="blogs">
          <img
            src="https://htmldemo.net/nelson/nelson/assets/images/icons/feature-1.png"
            alt=""
            className="featureIcon"
          />
          <div className="featureTextBox">
            <h3>Free home delivery</h3>
            <p>Provide free home delivery for all products over $100</p>
          </div>
        </div>

        <div className="blogs">
          <img
            src="https://htmldemo.net/nelson/nelson/assets/images/icons/feature-2.png"
            alt=""
            className="featureIcon"
          />
          <div className="featureTextBox">
            <h3>Quality Products</h3>
            <p>We ensure the product quality that is our main goal</p>
          </div>
        </div>

        <div className="blogs">
          <img
            src="https://htmldemo.net/nelson/nelson/assets/images/icons/feature-3.png"
            alt=""
            className="featureIcon"
          />
          <div className="featureTextBox">
            <h3>3 Days Return</h3>
            <p>Return product within 3 days if not satisfied</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Lowerhomepagesectione;
