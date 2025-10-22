import React, { useEffect, useState } from "react";
import '../App.css';
import { Productssate } from "./ProductsQuantityincrease";
import toast, { Toaster } from "react-hot-toast";
import { useCart } from "react-use-cart";
import { Link, useNavigate } from "react-router-dom";

function Products({ searchQuery }) {
   
    const Id =localStorage.getItem("Ids")
      const Transfer = useNavigate()

  const { addItem } = useCart();
  const [products, setProducts] = useState([]);
 const [wishlist, setWishlist] = useState({});


  const fetchProducts = async () => {
    try {
      const response = await fetch("https://main-projectnode.vercel.app/product/Get");
      const data = await response.json();
      setProducts(data.Data || []);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((p) => {
    const query = searchQuery.toLowerCase();
    return (
      p.ProductName.toLowerCase().includes(query) ||
      p.ProductCategory.toLowerCase().includes(query)
    );
  });

  const addToCart = async (id) => {
  if (!Id) {
    toast.error("Please login first");
    setTimeout(() => {
      Transfer("/Login");
    }, 3000);
    return;
  }

  const product = products.find((p) => p._id === id);

  try {
    const cartRes = await fetch("https://main-projectnode.vercel.app/cart/Get");
    const cartItems = await cartRes.json();
    const Carturl = cartItems.Data || [];

    // ✅ Compare using product.id, not _id
    const existingItem = Carturl.find((item) => item.id === id);

    let response;

    if (existingItem) {
      // ✅ Use the cart item's _id when updating
      response = await fetch(`https://main-projectnode.vercel.app/cart/Edit/${existingItem._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ProductQuantity: existingItem.ProductQuantity + 1,
        }),
      });
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
          id: product._id, // product reference
        }),
      });
    }

    toast.dismiss();
    if (response.ok) {
      toast.success("Product added to cart successfully");
    } else {
      toast.error("Error adding product to cart");
    }
  } catch (error) {
    toast.dismiss();
    toast.error("Please try again");
  }
    }

          
  const Whislist = (productId) => {
  setWishlist((prevWishlist) => ({ ...prevWishlist, [productId]: true }));
  toast.success("Product added to wishlist");
}


  


  return (
    <>
      <Toaster />
      <div className="productshead">
        <h1>Products</h1>
      </div>
      <div className="products">
        {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div key={product._id} className="category-products">
            <Link to={`/productdeatailes/${product.ProductName}`}>
            <div className="category-image">
             <Link to={`/productdeatailes/${product.ProductName}`}>
             <img src={product.ProductImage} alt={product.ProductName} />
             </Link>
            </div>
            <h4>{product.ProductName}</h4>
            <h3>{product.ProductCategory}</h3>
            <h2>${product.ProductPrice}</h2>
            <Productssate />
            </Link>
            <button className="wishlist-btn" onClick={() => {
  addItem({
    id: product._id,
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
            <div className="carts-button">
              <button onClick={() => addToCart(product._id)}>
                <i className="fa-solid fa-cart-shopping" ></i> Add to Cart
              </button>
            </div>
            
          </div>
        ))
      ) : (
          <p style={{ textAlign: "center" }}>No products found.</p>
        )}
      </div>
    </>
  );
}

export default Products;
