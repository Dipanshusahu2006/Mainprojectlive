import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../CommonElements/Header";
import { Helmet } from "react-helmet";
import ChooseUs from "./Aboutcomponets/Aboutchoose";
import TeamSection from "./Aboutcomponets/Aboutteam";
import TestimonialSlider from "./Aboutcomponets/AboutSwipper";
import Footer from "../CommonElements/Footer";
import AboutFooter from "./Aboutcomponets/Aboutblog";

function About(props){  
    const Transfer =useNavigate()

    if(!props.Userid){
       Transfer("/")
    }
  

return(
    <>
     <Helmet>
        <title>About Us | MyShop</title>
  <meta
    name="description"
    content="MyShop ke baare mein janiye – hamara mission, vision aur customer ke liye hamara promise."
  />
  <meta property="og:title" content="About Us | MyShop" />
  <meta
    property="og:description"
    content="MyShop ke baare mein janiye – hamara mission, vision aur customer ke liye hamara promise."
  />
    </Helmet>
    <Header/>
    <ChooseUs/>
    <AboutFooter/>
    <TeamSection/>
    <TestimonialSlider/>
    <Footer/>
    
    </>
)
}
export default About