import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import '../App.css';

function Productssate() {
  const [productChang, setproductChangt] = useState(1);

  function productsIncrese() {
    if (productChang < 50) {
      setproductChangt(productChang + 1);
    } else {
      toast.error("Products maximum quantity reached");
    }
  }

  function productsdecrese() {
    if (productChang > 1) {
      setproductChangt(productChang - 1);
    } else {
      toast.error("Products minimum quantity reached");
    }
  }

  return (
    <>
      <Toaster />
      <div className="productscart">
        <button onClick={productsIncrese} className="btnincrese">
          <i className="fa-solid fa-plus"></i>
        </button>
        <h3>{productChang}</h3>
        <button onClick={productsdecrese} className="btndecrese">
          <i className="fa-solid fa-minus"></i>
        </button>
      </div>
    </>
  );
}

export { Productssate };
