import React, { useEffect, useState } from "react";
import { FaStar, FaBolt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import '../App.css';
import Header from "../CommonElements/Header";
import tag from "../Images/tag.png"
import Footer from "../CommonElements/Footer";
import { useCart } from "react-use-cart";
import { Helmet } from "react-helmet";

export default function ProductDetails() {
   const { addItem } = useCart();
  const { ProductName } = useParams();
  const [product, setProduct] = useState({});
   const [wishlist, setWishlist] = useState({});

    
   const decodedName = decodeURIComponent(ProductName);

  const fetchProductDetails = async () => {
    try {
      const res = await fetch(`https://main-projectnode.vercel.app/product/Get/${decodedName}`);
      const data = await res.json();
      setProduct(data.Data || []);
    } catch (error) {
      console.error("Failed to fetch product details:", error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (decodedName) {
    fetchProductDetails();
  }
}, [decodedName]);
  const Whislist = (productId) => {
  setWishlist((prevWishlist) => ({ ...prevWishlist, [productId]: true }));
  toast.success("Product added to wishlist");
}

  async function AddToCart() {
  try {
    const cartRes = await fetch("https://main-projectnode.vercel.app/cart/Get");
    const cartItems = await cartRes.json();
    const cartitemsget = cartItems.Data || [];

    // Use product._id instead of undefined "id"
    const existingItem = cartitemsget.find(
      (item) => String(item._id) === String(product._id)
    );

    let response;

    if (existingItem) {
      // Update quantity for existing item
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
      // Add new product to cart
      response = await fetch(
        "https://main-projectnode.vercel.app/cart/Post",
        {
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
            id: product._id, // keep this field for backend reference
          }),
        }
      );
    }

    toast.dismiss();
    response.ok
      ? toast.success("Product added to cart successfully")
      : toast.error("Error adding product to cart");
  } catch (error) {
    toast.dismiss();
    toast.error("Please try again");
    console.error(error);
  }
}

  return (
    <>
      <Toaster />
      <Helmet>
   <title>{product?.ProductName || "Product Details"}</title>
  <meta name="description" content={product?.ProductDescription || "Buy this amazing product"} />
</Helmet>
      <Header/>
      <div className="pd-container">
        {/* Left: Product Image */}
        <div className="pd-left">
          <img src={product.ProductImage} alt={product.ProductName} className="pd-image" />
          <div className="pd-buttons">
            <button className="pd-buy-now">
              <FaBolt /> BUY NOW
            </button>
            <button className="pd-add-cart" onClick={AddToCart}>
              <i className="fa-solid fa-cart-shopping" ></i>
              ADD TO CART
            </button>
          </div>
          <button className="wishlist-btn" onClick={() => {
  addItem({
       id: product.id,
      price: product.ProductPrice,
      name: product.ProductName,
       image: product.ProductImage,
        category: product.productCategory,
        quantity: product.ProductQuantity,
      });
        Whislist(product._id);
      }}>
       {wishlist[product._id] ? (
        <i className="fa-solid fa-heart" style={{ color: 'red' }}></i>
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
            <h4>Available offers</h4>
            <ul>
              <li><img src={tag}></img>5% cashback on Flipkart Axis Bank Credit Card</li>
              <li><img src={tag}></img>5% cashback on Axis Bank Flipkart Debit Card</li>
              <li><img src={tag}></img>Up to ₹30 Instant Cashback on BHIM Payments App</li>
              <li><img src={tag}></img>Extra ₹4000 off (price inclusive of cashback/coupon)</li>
            </ul>
          </div>
          <div className="products-descriptione">
           <h3>Products Descriptione</h3>

           <p>{product.ProductDescription}</p>
          </div>

           <div className="ratingsReviews">
      <h2>Ratings & Reviews</h2>

      <div className="ratingsSummary">
        {/* Left side average */}
        <div className="averageRating">
          <span className="ratingValue">4.4</span>
          <FaStar className="starIcon" />
          <p>98,450 Ratings & 5,008 Reviews</p>
        </div>

        {/* Middle bars */}
        <div className="ratingBars">
          <div className="ratingBar">
            <span>5 ★</span>
            <div className="progress"><div className="fill fillGreen" style={{ width: "75%" }}></div></div>
            <span>65,837</span>
          </div>
          <div className="ratingBar">
            <span>4 ★</span>
            <div className="progress"><div className="fill fillGreen" style={{ width: "25%" }}></div></div>
            <span>20,782</span>
          </div>
          <div className="ratingBar">
            <span>3 ★</span>
            <div className="progress"><div className="fill fillLightGreen" style={{ width: "10%" }}></div></div>
            <span>5,458</span>
          </div>
          <div className="ratingBar">
            <span>2 ★</span>
            <div className="progress"><div className="fill fillOrange" style={{ width: "5%" }}></div></div>
            <span>2,054</span>
          </div>
          <div className="ratingBar">
            <span>1 ★</span>
            <div className="progress"><div className="fill fillRed" style={{ width: "7%" }}></div></div>
            <span>4,319</span>
          </div>
        </div>

        <button className="rateBtn">Rate Product</button>
      </div>

      {/* Circles */}
      <div className="circleRatings">
  <div className="circle">
    <div
      className="progressCircle"
      style={{ background: `conic-gradient(#228B22 ${(4.0 / 5) * 100}%, #eee 0)` }}
    >
      <div className="innerCircle">
        <span>4.0</span>
      </div>
    </div>
    <p>Camera</p>
  </div>

  <div className="circle">
    <div
      className="progressCircle"
      style={{ background: `conic-gradient(#228B22 ${(4.5 / 5) * 100}%, #eee 0)` }}
    >
      <div className="innerCircle">
        <span>4.5</span>
      </div>
    </div>
    <p>Battery</p>
  </div>

  <div className="circle">
    <div
      className="progressCircle"
      style={{ background: `conic-gradient(#228B22 ${(4.2 / 5) * 100}%, #eee 0)` }}
    >
      <div className="innerCircle">
        <span>4.2</span>
      </div>
    </div>
    <p>Display</p>
  </div>

  <div className="circle">
    <div
      className="progressCircle"
      style={{ background: `conic-gradient(#228B22 ${(4.3 / 5) * 100}%, #eee 0)` }}
    >
      <div className="innerCircle">
        <span>4.3</span>
      </div>
    </div>
    <p>Design</p>
  </div>
</div>


    </div>

        </div>
      </div>
      <Footer/>
    </>
  );
}
