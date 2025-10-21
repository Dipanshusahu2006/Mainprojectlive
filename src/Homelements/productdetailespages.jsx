import React, { useEffect, useState, useCallback } from "react";
import { FaStar, FaBolt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "../App.css";
import Header from "../CommonElements/Header";
import tag from "../Images/tag.png";
import Footer from "../CommonElements/Footer";
import { useCart } from "react-use-cart";
import { Helmet } from "react-helmet";

export default function ProductDetails() {
  const { addItem } = useCart();
  const { ProductName } = useParams();

  const [product, setProduct] = useState(null);
  const [wishlist, setWishlist] = useState({});
  const [loading, setLoading] = useState(true);

  const decodedName = decodeURIComponent(ProductName);

  // ✅ Use useCallback to avoid ESLint missing dependency warning
  const fetchProductDetails = useCallback(async () => {
    try {
      const res = await fetch(
        `https://main-projectnode.vercel.app/product/Get/${decodedName}`
      );
      const data = await res.json();
      setProduct(data.Data || {});
    } catch (error) {
      console.error("Failed to fetch product details:", error);
      toast.error("Failed to load product details");
    } finally {
      setLoading(false);
    }
  }, [decodedName]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (decodedName) fetchProductDetails();
  }, [decodedName, fetchProductDetails]);

  const handleWishlist = (productId) => {
    setWishlist((prev) => ({ ...prev, [productId]: true }));
    toast.success("Product added to wishlist");
  };

  const AddToCart = async () => {
    if (!product) return;

    try {
      const cartRes = await fetch("https://main-projectnode.vercel.app/cart/Get");
      const cartItems = await cartRes.json();
      const cartList = cartItems.Data || [];

      const existingItem = cartList.find(
        (item) => String(item._id) === String(product._id)
      );

      let response;
      if (existingItem) {
        response = await fetch(
          `https://main-projectnode.vercel.app/cart/Edit/${product._id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ProductQuantity: existingItem.ProductQuantity + 1,
            }),
          }
        );
      } else {
        response = await fetch("https://main-projectnode.vercel.app/cart/Post", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ProductName: product.ProductName,
            ProductPrice: product.ProductPrice,
            ProductImage: product.ProductImage,
            ProductCategory: product.ProductCategory,
            ProductDescription: product.ProductDescription || "",
            ProductBrand: product.ProductBrand || "",
            ProductQuantity: 1,
            id: product._id,
          }),
        });
      }

      response.ok
        ? toast.success("Product added to cart successfully")
        : toast.error("Error adding product to cart");
    } catch (error) {
      console.error(error);
      toast.error("Please try again");
    }
  };

  if (loading) {
    return (
      <>
        <Header />
        <div className="loading">Loading product details...</div>
        <Footer />
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Header />
        <div className="error">Product not found.</div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Toaster />
      <Helmet>
        <title>{product.ProductName || "Product Details"}</title>
        <meta
          name="description"
          content={product.ProductDescription || "Buy this amazing product"}
        />
      </Helmet>
      <Header />

      <div className="pd-container">
        {/* Left: Product Image */}
        <div className="pd-left">
          <img
            src={product.ProductImage}
            alt={product.ProductName || "Product"}
            className="pd-image"
          />

          <div className="pd-buttons">
            <button className="pd-buy-now">
              <FaBolt /> BUY NOW
            </button>
            <button className="pd-add-cart" onClick={AddToCart}>
              <i className="fa-solid fa-cart-shopping"></i> ADD TO CART
            </button>
          </div>

          <button
            className="wishlist-btn"
            onClick={() => {
              addItem({
                id: product._id,
                price: product.ProductPrice,
                name: product.ProductName,
                image: product.ProductImage,
                category: product.ProductCategory,
                quantity: product.ProductQuantity || 1,
              });
              handleWishlist(product._id);
            }}
          >
            {wishlist[product._id] ? (
              <i className="fa-solid fa-heart" style={{ color: "red" }}></i>
            ) : (
              <i className="fa-regular fa-heart"></i>
            )}
          </button>
        </div>

        {/* Right: Product Info */}
        <div className="pd-right">
          <h1 className="pd-title">{product.ProductName}</h1>

          <div className="pd-rating">
            <span className="pd-rating-badge">
              4.4 <FaStar size={12} />
            </span>
            <span className="pd-rating-text">97,453 Ratings & 4,987 Reviews</span>
          </div>

          <div className="pd-price">
            <span className="pd-current">₹{product.ProductPrice}</span>
            <span className="pd-old">₹17,999</span>
            <span className="pd-discount">22% off</span>
          </div>

          <p className="pd-emi">₹4,667/month • 3 months No Cost EMI</p>

          <div className="pd-offers">
            <h4>Available Offers</h4>
            <ul>
              <li>
                <img src={tag} alt="offer tag" /> 5% cashback on Flipkart Axis
                Bank Credit Card
              </li>
              <li>
                <img src={tag} alt="offer tag" /> 5% cashback on Axis Bank
                Flipkart Debit Card
              </li>
              <li>
                <img src={tag} alt="offer tag" /> Up to ₹30 Instant Cashback on
                BHIM App
              </li>
              <li>
                <img src={tag} alt="offer tag" /> Extra ₹4000 off (inclusive of
                cashback/coupon)
              </li>
            </ul>
          </div>

          <div className="products-descriptione">
            <h3>Product Description</h3>
            <p>{product.ProductDescription}</p>
          </div>

          {/* Ratings & Reviews Section */}
          <div className="ratingsReviews">
            <h2>Ratings & Reviews</h2>

            <div className="ratingsSummary">
              <div className="averageRating">
                <span className="ratingValue">4.4</span>
                <FaStar className="starIcon" />
                <p>98,450 Ratings & 5,008 Reviews</p>
              </div>

              <div className="ratingBars">
                {[
                  { stars: 5, width: "75%", count: "65,837" },
                  { stars: 4, width: "25%", count: "20,782" },
                  { stars: 3, width: "10%", count: "5,458" },
                  { stars: 2, width: "5%", count: "2,054" },
                  { stars: 1, width: "7%", count: "4,319" },
                ].map((bar) => (
                  <div className="ratingBar" key={bar.stars}>
                    <span>{bar.stars} ★</span>
                    <div className="progress">
                      <div className="fill fillGreen" style={{ width: bar.width }}></div>
                    </div>
                    <span>{bar.count}</span>
                  </div>
                ))}
              </div>

              <button className="rateBtn">Rate Product</button>
            </div>

            {/* Circle Ratings */}
            <div className="circleRatings">
              {[
                { label: "Camera", rating: 4.0 },
                { label: "Battery", rating: 4.5 },
                { label: "Display", rating: 4.2 },
                { label: "Design", rating: 4.3 },
              ].map(({ label, rating }) => (
                <div className="circle" key={label}>
                  <div
                    className="progressCircle"
                    style={{
                      background: `conic-gradient(#228B22 ${(rating / 5) * 100}%, #eee 0)`,
                    }}
                  >
                    <div className="innerCircle">
                      <span>{rating}</span>
                    </div>
                  </div>
                  <p>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
