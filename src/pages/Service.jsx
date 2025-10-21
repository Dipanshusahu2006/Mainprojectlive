import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../CommonElements/Header";
import { Helmet } from "react-helmet";
import Features from "./Servicecomponenets/Serviceblogs";
import ChairShowcase from "./Servicecomponenets/serviceproducts";
import Footer from "../CommonElements/Footer";
import AboutFooter from "./Aboutcomponets/Aboutblog";

function Service(props){
      const Transfer =useNavigate()

    if(!props.Userid){
       Transfer("/")
    }
return(
    <>
     <Helmet>
        <title>Our Services | MyShop</title>
       <meta
    name="description"
    content="MyShop ki premium services – fast delivery, easy returns, customer support aur secure payments."
  />
  <meta property="og:title" content="Our Services | MyShop" />
  <meta
    property="og:description"
    content="MyShop ki premium services – fast delivery, easy returns, customer support aur secure payments."
  />

    </Helmet>
    <Header/>
    <Features/>
    <AboutFooter/>
    <ChairShowcase/>
    <Footer/>
    
    </>
)

}
export default Service