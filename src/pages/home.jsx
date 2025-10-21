import React, { useState } from "react";
import Header from "../CommonElements/Header";
import '../App.css';
import { Headersectione } from "../Homelements/heaedersectione";
import Lowerhomepagesectione from "../Homelements/lowerhome";
import { Newproductsarrival } from "../Homelements/New productssectione";
import Footer from "../CommonElements/Footer";
import Products from "../Homelements/Product";
import { Helmet } from "react-helmet";
import Enqries from "../Homelements/Enqiryform";

function Home(){
    const [searchQuery, setSearchQuery] = useState("");
return(
    <>
    <Helmet>
  <title>Home Page | MyShop</title>
  <meta name="description" content="Welcome to MyShop - Find the latest products, exclusive deals, and trending arrivals at the best prices." />
  <meta name="keywords" content="online shopping, latest products, trending items, best deals, myshop" />
  <meta name="author" content="MyShop Team" />
</Helmet>

    <Header setSearchQuery={setSearchQuery} />
    <Headersectione/>
     <Products searchQuery={searchQuery} />
    <Newproductsarrival/>
    <Lowerhomepagesectione/>
    <Enqries/>
    <Footer/>
    </>

)
}
export default Home