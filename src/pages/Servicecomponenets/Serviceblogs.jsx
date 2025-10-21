import React from "react";
import "../../App.css";
import { FaTruck, FaBoxOpen, FaLifeRing, FaExchangeAlt, FaUserShield, FaCreditCard, FaRecycle, FaGift } from "react-icons/fa";

const features = [
  {
    icon: <FaTruck />,
    title: "Fast & Free Shipping",
    desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
  },
  {
    icon: <FaBoxOpen />,
    title: "Easy to Shop",
    desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
  },
  {
    icon: <FaLifeRing />,
    title: "24/7 Support",
    desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
  },
  {
    icon: <FaExchangeAlt />,
    title: "Hassle Free Returns",
    desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
  },
  // 👇 Second Row Features
  {
    icon: <FaUserShield />,
    title: "Secure Payments",
    desc: "All transactions are encrypted for maximum safety and reliability."
  },
  {
    icon: <FaGift />,
    title: "Exciting Offers",
    desc: "Get exclusive discounts, deals, and seasonal offers every week."
  },
  {
    icon: <FaCreditCard />,
    title: "Multiple Payment Options",
    desc: "We support UPI, Cards, Net Banking, and Wallets for your convenience."
  },
  {
    icon: <FaRecycle />,
    title: "Eco-Friendly Packaging",
    desc: "We use recyclable and eco-friendly packaging to reduce waste."
  }
];

function Features() {
  return (
    <section className="features-section">
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="icon-wrapper">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
