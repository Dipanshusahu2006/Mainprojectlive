import React, { useEffect, useState, useCallback } from "react";
import Header from "../CommonElements/Header";
import "../App.css";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

function Productcart() {
  const Id = localStorage.getItem("Ids");
  const tranfer = useNavigate();
  const [Cartproduct, setCartproduct] = useState([]);
  const [Profilecheckout, setProfilecheckout] = useState({});

  // ✅ Wrap with useCallback for stable reference
  const ProfileChekout = useCallback(async () => {
    try {
      const profileUser = await fetch(
        `https://main-projectnode.vercel.app/user/Get/${Id}`
      );
      const Usercheck = await profileUser.json();
      setProfilecheckout(Usercheck?.Data || {});
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  }, [Id]); // ✅ depends only on Id

  // ✅ Wrap CartProducts too
  const CartProducts = useCallback(async () => {
    try {
      const res = await fetch("https://main-projectnode.vercel.app/cart/Get");
      const data = await res.json();
      setCartproduct(data.Data || []);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  }, []); // ✅ no dependencies, stable forever

  const updateQuantity = async (id, newQuantity) => {
    if (newQuantity < 1) return;

    try {
      await fetch(`https://main-projectnode.vercel.app/cart/Edit/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ProductQuantity: newQuantity }),
      });

      setCartproduct((prev) =>
        prev.map((item) =>
          item._id === id ? { ...item, ProductQuantity: newQuantity } : item
        )
      );
    } catch (error) {
      toast.error("Error updating quantity");
    }
  };

  const DeletesCart = async (id) => {
    try {
      const res = await fetch(
        `https://main-projectnode.vercel.app/cart/Delete/${id}`,
        {
          method: "DELETE",
        }
      );

      if (res.ok) {
        setCartproduct((prev) => prev.filter((item) => item._id !== id));
        toast.success("Cart item deleted successfully");
      } else {
        toast.error("Error deleting item");
      }
    } catch (error) {
      toast.error("Please try again");
    }
  };

  // ✅ useEffect now has stable dependencies
  useEffect(() => {
    CartProducts();
    ProfileChekout();
  }, [CartProducts, ProfileChekout]);

  const Carttotal = Cartproduct.reduce(
    (total, item) => total + item.ProductPrice * item.ProductQuantity,
    0
  );

  const Userchekout =
    !Profilecheckout?.email?.length ||
    !Profilecheckout?.phone?.length ||
    !Profilecheckout?.Useraddress?.length ||
    !Profilecheckout?.Userpincode?.length ||
    !Profilecheckout?.Userstate?.length ||
    !Profilecheckout?.Usercity?.length;

  const Chekout = () => {
    localStorage.setItem("Carttotal", Carttotal.toFixed(2));

    if (!Id || Userchekout) {
      tranfer("/ProfileCheck");
    } else {
      tranfer("/Qrcode");
    }
  };

  return (
    <>
      <Helmet>
        <title>My Cart | MyShop</title>
        <meta
          name="description"
          content="Aapke cart me rakhe products dekhiyen aur apna order complete kijiye. MyShop par fast checkout aur secure payment ka fayda uthaiye."
        />
        <meta
          name="keywords"
          content="shopping cart, checkout, online cart, myshop"
        />
        <meta property="og:title" content="My Cart | MyShop" />
        <meta
          property="og:description"
          content="Aapke cart me rakhe products dekhiyen aur apna order complete kijiye. MyShop par fast checkout aur secure payment ka fayda uthaiye."
        />
      </Helmet>

      <Header />

      <div className="cart-container">
        <div className="cart-items-section">
          <h2>Your Shopping Cart</h2>

          {Cartproduct.map((item) => (
            <div className="cart-item" key={item._id}>
              <img
                src={item.ProductImage}
                alt={item.ProductName}
                className="cart-item-image"
              />

              <div className="cart-item-details">
                <h4>{item.ProductName}</h4>
                <p>{item.ProductCategory}</p>
                <p>₹{item.ProductPrice}</p>

                <div className="productscart">
                  <button
                    onClick={() =>
                      updateQuantity(item._id, item.ProductQuantity + 1)
                    }
                    className="btnincrese"
                  >
                    <i className="fa-solid fa-plus"></i>
                  </button>

                  <h3>{item.ProductQuantity}</h3>

                  <button
                    onClick={() =>
                      updateQuantity(item._id, item.ProductQuantity - 1)
                    }
                    className="btndecrese"
                  >
                    <i className="fa-solid fa-minus"></i>
                  </button>
                </div>
              </div>

              <button
                onClick={() => DeletesCart(item._id)}
                className="remove-button"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="price-details-section">
          <h3>PRICE DETAILS</h3>

          <div className="price-row total">
            <span style={{ fontSize: "20px" }}>Total Amount</span>
            <span style={{ fontSize: "20px" }}>₹{Carttotal}</span>
          </div>

          <p className="save-amount">You will save ₹2,300 on this order</p>

          <button className="place-order-btn" onClick={Chekout}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default Productcart;
