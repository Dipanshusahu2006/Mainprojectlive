import React from "react";
import "../../App.css";

import { FaTruck, FaShoppingBag, FaHeadset, FaExchangeAlt } from "react-icons/fa";

function ChooseUs() {
    const Aboutimage = {
     img : "https://themewagon.github.io/furni/images/why-choose-us-img.jpg"
    }
    
  return (
    <section className="chooseus-container">
      <div className="chooseus-left">
        <h2>Why Choose Us</h2>
        <p>
          Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
          Aliquam vulputate velit imperdiet dolor tempor tristique.
        </p>

        <div className="chooseus-features">
          <div className="feature">
            <span className="icon"><FaTruck /></span>
            <div>
              <h3>Fast & Free Shipping</h3>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. 
                Aliquam vulputate.
              </p>
            </div>
          </div>

          <div className="feature">
            <span className="icon"><FaShoppingBag /></span>
            <div>
              <h3>Easy to Shop</h3>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. 
                Aliquam vulputate.
              </p>
            </div>
          </div>

          <div className="feature">
            <span className="icon"><FaHeadset /></span>
            <div>
              <h3>24/7 Support</h3>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. 
                Aliquam vulputate.
              </p>
            </div>
          </div>

          <div className="feature">
            <span className="icon"><FaExchangeAlt /></span>
            <div>
              <h3>Hassle Free Returns</h3>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. 
                Aliquam vulputate.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="chooseus-right">
        <div className="dot-pattern"></div>
        <img
          src={Aboutimage.img}
          alt="sofa"
          className="chooseus-image"
        />
      </div>
    </section>
  );
}

export default ChooseUs;
