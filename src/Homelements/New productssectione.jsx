import React from "react";
import '../App.css';

function Newproductsarrival (){

    const ImgStyle = {
     img1 : "https://demo.snstheme.com/html/simen/images/products/9.jpg",

     img2: "https://demo.snstheme.com/html/simen/images/products/11.jpg",

     img3 : "https://demo.snstheme.com/html/simen/images/products/25.jpg",

     img4 : "https://demo.snstheme.com/html/simen/images/products/2.jpg",

     img5: "https://demo.snstheme.com/html/simen/images/products/3.jpg",

     images1 : "https://furns-react.netlify.app/_ipx/w_640,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Ffiles%2FNav1_LivingRoomFurniture.jpg%3Fv%3D1709032906?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Ffiles%2FNav1_LivingRoomFurniture.jpg%3Fv%3D1709032906&w=640&q=75",

     imges2 :"https://furns-react.netlify.app/_ipx/w_640,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F8_fcebc072-8193-4679-b10e-7f68a7e4d072.jpg%3Fv%3D1709108914?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F8_fcebc072-8193-4679-b10e-",

     imges3 :"https://furns-react.netlify.app/_ipx/w_640,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F10_da3eb510-63c2-4f13-b224-8ae9e92102e8.jpg%3Fv%3D1709108923?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F10_da3eb510-63c2-4f13-b224-8ae9e92102e8.jpg%3Fv%3D1709108923&w=640&q=75",
     imges4 :"https://furns-react.netlify.app/_ipx/w_640,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F12_f87051c2-0726-4a74-a98b-5b462b19dc78.jpg%3Fv%3D1709108934?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F12_f87051c2-0726-4a74-a98b-5b462b19dc78.jpg%3Fv%3D1709108934&w=640&q=75",
     imges5 :"https://furns-react.netlify.app/_ipx/w_640,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F6_cb7fa61b-c039-4b83-80dc-1b9c7a7efcfa.jpg%3Fv%3D1709108899?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F6_cb7fa61b-c039-4b83-80dc-1b9c7a7efcfa.jpg%3Fv%3D1709108899&w=640&q=75",
     imges6 :"https://furns-react.netlify.app/_ipx/w_640,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F4_d2d85450-694d-4907-8abe-699534972db6.jpg%3Fv%3D1709108892?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F4_d2d85450-694d-4907-8abe-699534972db6.jpg%3Fv%3D1709108892&w=640&q=75",

     imges7 :"https://furns-react.netlify.app/_ipx/w_640,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F2_40d9c634-67d1-4623-a7d5-c2ef2b24db83.jpg%3Fv%3D1709108882?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F2_40d9c634-67d1-4623-a7d5-c2ef2b24db83.jpg%3Fv%3D1709108882&w=640&q=75",

     imges8 :"https://furns-react.netlify.app/_ipx/w_640,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F8_fcebc072-8193-4679-b10e-7f68a7e4d072.jpg%3Fv%3D1709108914?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F8_fcebc072-8193-4679-b10e-7f68a7e4d072.jpg%3Fv%3D1709108914&w=640&q=75"

    }



    return(
        <>
        <section className="Producscirculls">
        <div className="productscircul">
            <div className="productscircudl1">
                <img src={ImgStyle.img1} alt="" />
                <h4>Bedroom</h4>
            </div>
            <div className="productscircudl1">
                <img src={ImgStyle.img2} alt="" />
                <h4>Living</h4>
            </div>
            <div className="productscircudl1">
               <img src={ImgStyle.img3} alt="" />
                <h4>Dinnig </h4>
            </div>
            <div className="productscircudl1">
                <img src={ImgStyle.img4} alt="" />
                <h4>Loung</h4>
            </div>
            <div className="productscircudl1">
                <img src={ImgStyle.img5} alt="" />
                <h4>Chaires</h4>
            </div>
        </div>
        </section>
        <section className="Our-products">
            <div className="oursnew">
            <div className="Ourproductsss">
                <h1>Our Products</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore</p>
                <ul>
                    <li style={{ color: "rgb(255, 112, 4)" }}>New Arrival</li>
                    <li>Featured</li>
                    <li>On Sale</li>
                    <li>Tending</li>
                </ul>
                </div>
            </div>
            <div className="allnewproducts">
            <div className="New-products">
        <img src={ImgStyle.images1} alt="" />
        <h2>Living Room Sets</h2>
        <p>$1520.0<span>$1540.0</span></p>
            </div>
            
            <div className="New-products">
        <img src={ImgStyle.imges2} alt="" />
        <h2>Sofa  for Living Room </h2>
        <p>$130.0<span>$110.0</span></p>
            </div>

            <div className="New-products">
        <img src={ImgStyle.imges3} alt="" />
        <h2>10. This is the large title for testing large title and there is an image for testing</h2>
        <p>$21.0<span>$1540.0</span></p>
            </div>

            <div className="New-products">
        <img src={ImgStyle.imges3} alt="" />
        <h2>11. Product with video</h2>
        <p>$39.0</p>
            </div>

            <div className="New-products">
        <img src={ImgStyle.imges4} alt="" />
        <h2>12. Unique content for each product on the product tab</h2>
        <p>$111.0<span>$99.0</span></p>
            </div>


            <div className="New-products">
        <img src={ImgStyle.imges5} alt="" />
        <h2>2. New badge prod</h2>
        <p>$80.0</p>
            </div>


            <div className="New-products">
        <img src={ImgStyle.imges6} alt="" />
        <h2>3. Variable product</h2>
        <p>$85.0<span>$70.0</span></p>
            </div>

            <div className="New-products">
        <img src={ImgStyle.imges7} alt="" />
        <h2>4. Soldout product</h2>
        <p>$29.0<span>$19.0</span></p>
            </div>
            </div>
        </section>
        </>
    )
}
export {Newproductsarrival}
