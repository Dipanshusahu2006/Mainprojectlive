import React from 'react';

const ChairShowcase = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '80px',
    backgroundColor: '#f8fbfb',
    fontFamily: 'sans-serif'
  };

  const leftSection = {
    flex: 1,
    marginRight: '60px'
  };

  const headingStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#1d1d1f',
    marginBottom: '20px'
  };

  const descriptionStyle = {
    fontSize: '16px',
    color: '#6e6e73',
    lineHeight: '1.6',
    marginBottom: '30px'
  };

  const buttonStyle = {
    backgroundColor: '#1d1d1f',
    color: '#fff',
    padding: '12px 30px',
    borderRadius: '30px',
    border: 'none',
    fontWeight: 'bold',
    cursor: 'pointer'
  };

  const productContainer = {
    flex: 2,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  };

  const productCard = {
    textAlign: 'center'
  };

  const productImage = {
    width: '200px',
    height: 'auto',
    marginBottom: '20px'
  };

  const productTitle = {
    fontSize: '16px',
    fontWeight: '500',
    marginBottom: '10px'
  };

  const productPrice = {
    fontSize: '20px',
    fontWeight: 'bold'
  };
  const Imges = {
    Img1: 'https://themewagon.github.io/furni/images/product-1.png',
    Img2: 'https://themewagon.github.io/furni/images/product-2.png',
    Img3: 'https://themewagon.github.io/furni/images/product-3.png',
    
  };
  

  return (
    <div style={containerStyle}>
      <div style={leftSection}>
        <h1 style={headingStyle}>Crafted with<br />excellent material.</h1>
        <p style={descriptionStyle}>
          Donec vitae odio quis nisl dapibus malesuada.<br />
          Nullam ac aliquet velit. Aliquam vulputate velit<br />
          imperdiet dolor tempor tristique.
        </p>
        <button style={buttonStyle}>Explore</button>
      </div>

      <div style={productContainer}>
        <div style={productCard}>
          <img
            src={Imges.Img1}
            alt="Nordic Chair"
            style={productImage}
          />
          <div style={productTitle}>Nordic Chair</div>
          <div style={productPrice}>$50.00</div>
        </div>

        <div style={productCard}>
          <img
            src={Imges.Img2}
            alt="Kruzo Aero Chair"
            style={productImage}
          />
          <div style={productTitle}>Kruzo Aero Chair</div>
          <div style={productPrice}>$78.00</div>
        </div>

        <div style={productCard}>
          <img
            src={Imges.Img3}
            alt="Ergonomic Chair"
            style={productImage}
          />
          <div style={productTitle}>Ergonomic Chair</div>
          <div style={productPrice}>$43.00</div>
        </div>
      </div>
    </div>
  );
};

export default ChairShowcase;
