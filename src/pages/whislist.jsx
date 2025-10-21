import React from "react";
import '../App.css';
import { Helmet } from "react-helmet";
import { useCart } from "react-use-cart";
import toast from "react-hot-toast";
import Header from "../CommonElements/Header";

function Whislist() {
  const {
    isEmpty,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
    emptyCart,
  } = useCart();

  if (isEmpty) return <h2 className="empty-cart">Your wishlist is empty</h2>;

  return (
    <>
      <Helmet>
        <title>Wishlist Page</title>
      </Helmet>
      <Header/>
      <div className="cart-container">
        <h1>Your Wishlist</h1>

        <div className="cart-items">
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <div className="quantity-controls">
                  <button
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Total: ${cartTotal.toFixed(2)}</h2>
          <button
            className="checkout-btn"
            onClick={() => toast.success("Checkout not implemented")}
          >
            Proceed to Checkout
          </button>
          <button className="clear-btn" onClick={() => emptyCart()}>
            Clear Wishlist
          </button>
        </div>
      </div>
    </>
  );
}

export default Whislist;
