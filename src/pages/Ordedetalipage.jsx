import React, { useEffect, useState } from "react";
import '../App.css';
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faHourglassHalf,
  faTruck,
  faBox,
} from "@fortawesome/free-solid-svg-icons";

function OrderDetails() {
  const [order, setOrder] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const res = await fetch("https://main-projectnode.vercel.app/order/Get");
        const data = await res.json();
        const allOrders = data.Data || [];

        // Flatten all products with username
        const allProducts = allOrders.flatMap(order =>
          (order.products || []).map(product => ({
            ...product,
            username: order.username,
          }))
        );

        const foundProduct = allProducts.find((p) => p._id === id);
        setOrder(foundProduct || null);
      } catch (error) {
        console.error("Error fetching order:", error);
      }
    };

    fetchOrderDetails();
  }, [id]);

  if (!order) return <h2 style={{ textAlign: "center" }}>Loading order details...</h2>;

  const statusTimeline = [
    { label: "Order Confirmed", icon: faCheckCircle, type: "confirmed" },
    { label: "Being Processed", icon: faHourglassHalf, type: "processing" },
    { label: "Shipped", icon: faTruck, type: "shipping" },
    { label: "Out for Delivery", icon: faBox, type: "out" },
  ];

  const message =
    order.Status === "Pending"
      ? "Your order is being processed. You will be notified once it is shipped."
      : order.Status === "Delivered"
      ? "Your order has been successfully delivered. Thank you for shopping!"
      : "Your order has been cancelled.";

  return (
    <div className="order-details-page">
      {/* Product Information */}
      <div className="order-card">
        <div className="order-header">
          <img src={order.ProductImage} alt={order.ProductName} />
          <div className="order-info">
            <h2>{order.ProductName}</h2>
            <p className="seller">Seller: <span>DipanshuEnterprizes</span></p>
            <h3 className="price">₹{order.ProductPrice}</h3>
            <p className="quantity">Qty: {order.ProductQuantity}</p>
            <p className="username">Ordered by: <b>{order.username}</b></p>
          </div>
        </div>
      </div>

      {/* Status Timeline */}
      <div className="status-timeline">
        {statusTimeline.map((step, index) => (
          <div className="status-step" key={index}>
            <span className={`status-icon ${step.type}`}>
              <FontAwesomeIcon icon={step.icon} />
            </span>
            <p><b>{step.label}</b></p>
            {index < statusTimeline.length - 1 && (
              <div className="status-line"></div>
            )}
          </div>
        ))}
      </div>

      {/* Order Message */}
      <p className="order-message">{message}</p>

      {/* Chat Button */}
      <div className="chat-btn">💬 Chat with us</div>
    </div>
  );
}

export default OrderDetails;
