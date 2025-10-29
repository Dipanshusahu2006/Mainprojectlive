import React from 'react';
import './App.css';
import About from './pages/About';
import Home from './pages/home';
import { Login } from './pages/login';
import Service from './pages/Service';
import { Signup } from './pages/sigup';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Productcart from './pages/Cart';
import { EditUser } from './pages/Edit';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CartProvider } from "react-use-cart";
import Products from './Homelements/Product';
import Whislist from './pages/whislist';
import MyEnquiries from './pages/Notificatione';
import Qrcode from './pages/Qrcode';
import Usermailecheks from './pages/Usecheks';
import OrderStatus from './pages/orderpage';
import ProductDetails from './Homelements/productdetailespages';
import OrderDetails from './pages/Ordedetalipage';


function App() {
  const id = localStorage.getItem("Ids");
  
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/" element={<Home Userid={id} />} />
          <Route path="/About" element={<About Userid={id} />} />
          <Route path="/Service" element={<Service Userid={id} />} />
          <Route path="/productcart" element={<Productcart />} />
          <Route path="/productdeatailes/:slug" element={<ProductDetails />} />
          <Route path="/EditUser" element={<EditUser />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/whislist" element={<Whislist />} />
          <Route path="/Myenqries" element={<MyEnquiries />} />
          <Route path="/Qrcode" element={<Qrcode />} />
           <Route path="/ProfileCheck" element={<Usermailecheks />} />
           <Route path="/order" element={<OrderStatus/>} />
           <Route path="/OrderDetails/:Ordername" element={<OrderDetails />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
    
  );
}
export default App;


