import React, { useEffect, useState, useCallback } from "react";
import "../App.css";
import Header from "../CommonElements/Header";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function OrderStatus() {
  const userId = localStorage.getItem("Ids");
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");

  // ✅ Wrap fetchOrders with useCallback so it doesn't recreate on every render
  const fetchOrders = useCallback(async () => {
    try {
      const res = await fetch(
        `https://main-projectnode.vercel.app/order/Get/${userId}`
      );
      const data = await res.json();
      const Ordersdatas = data.Data || [];

      const formattedOrders = Ordersdatas.flatMap((order) =>
        (order.products || []).map((product) => ({
          ...product,
          username: order.username,
        }))
      );

      console.log(formattedOrders);
      setOrders(formattedOrders);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  }, [userId]);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  // ✅ Filter by product name or username
  const filteredOrders = orders.filter(
    (order) =>
      order.ProductName?.toLowerCase().includes(search.toLowerCase()) ||
      order.username?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>My Orders | MyShop</title>
        <meta
          name="description"
          content="Apne orders ka status track kijiye – processing, shipped, aur delivered updates ek hi jagah par. MyShop ke saath hassle-free shopping."
        />
        <meta
          name="keywords"
          content="order tracking, my orders, delivery status, order history, myshop"
        />
      </Helmet>

      <Header />

      <div className="orders-container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by product or username"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>🔍 Search Orders</button>
        </div>

        <div className="order-list">
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order, index) => (
              <Link to={`/${order.ProductName}`} key={index}>
                <div className="order-card">
                  <img src={order.ProductImage} alt={order.ProductName} />

                  <div className="order-details">
                    <h3>{order.ProductName}</h3>
                    <p className="price">₹{order.ProductPrice}</p>
                    <p className="category">{order.ProductCategory}</p>
                    <small className="username">
                      Ordered by: {order.username}
                    </small>
                  </div>

                  <div className="order-status">
                    <span
                      className={`status-dot ${
                        order.Status === "Pending"
                          ? "yellow"
                          : order.Status === "Delivered"
                          ? "green"
                          : "red"
                      }`}
                    ></span>

                    <p>
                      <b>Status: {order.Status}</b>
                    </p>

                    <p className="reason">
                      {order.Status === "Pending"
                        ? "Your order is being processed"
                        : order.Status === "Delivered"
                        ? "Your order has been delivered successfully"
                        : "As per your request, your item has been cancelled"}
                    </p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p>No orders found.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default OrderStatus;
