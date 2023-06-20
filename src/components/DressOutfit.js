import React, { useState } from "react";

const App = () => {
  const [selectedDress, setSelectedDress] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [isOutOfStock, setIsOutOfStock] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleDressClick = (dressImage) => {
    setSelectedDress(dressImage);
    setIsOutOfStock(false); 
  };

  const handleZoomIn = () => {
    setIsZoomed(true);
  };

  const handleZoomOut = () => {
    setIsZoomed(false);
  };

  const handleSizeClick = (size) => {
    if (size === "XXL") {
      setIsOutOfStock(true); 
    } else {
      setSelectedSize(size); 
      setIsOutOfStock(false); 
    }
  };
  
  return (
    <div className="container">
      <div className="content">
        <div className="dress-list">
           <div className="dress-images">
            <img
              src="https://i.postimg.cc/Kv9Dh7N8/23ef8c71-3454-48aa-95e6-8b89dd0bd571.jpg"
              alt="Dress 1"
              className={`dress-image ${
                selectedDress ===
                "https://i.postimg.cc/hvLTYTGc/e61b3d91-8509-4a82-b23f-163862df1b8a-removebg-preview.png"
                  ? "selected-dress"
                  : ""
              }`}
              onClick={() =>
                handleDressClick(
                  "https://i.postimg.cc/hvLTYTGc/e61b3d91-8509-4a82-b23f-163862df1b8a-removebg-preview.png"
                )
              }
            />
            <img
              src="https://i.postimg.cc/hvD5495P/68ec7021-650f-40db-8606-ca81affb434d.jpg"
              alt="Dress 2"
              className={`dress-image ${
                selectedDress ===
                "https://i.postimg.cc/XJftVCTH/67f13a6c-94bc-4811-b524-a3917364d71f-removebg-preview.png"
                  ? "selected-dress"
                  : ""
              }`}
              onClick={() =>
                handleDressClick(
                  "https://i.postimg.cc/XJftVCTH/67f13a6c-94bc-4811-b524-a3917364d71f-removebg-preview.png"
                )
              }
            />
            <img
              src="https://i.postimg.cc/GhRwByZR/4bd0378d-488c-4bd2-aa86-7d541b36699f.jpg"
              alt="Dress 3"
              className={`dress-image ${
                selectedDress ===
                "https://i.postimg.cc/BQH9b6jD/b108eb3f-1051-41a4-a4f2-2837135337b8-removebg-preview-removebg-preview.png"
                  ? "selected-dress"
                  : ""
              }`}
              onClick={() =>
                handleDressClick(
                  "https://i.postimg.cc/BQH9b6jD/b108eb3f-1051-41a4-a4f2-2837135337b8-removebg-preview-removebg-preview.png"
                )
              }
            />
          </div>
        </div>
        <div className="mannequin">
          
          <div
            className={`zoom-wrapper ${isZoomed ? "zoomed" : ""}`}
            onClick={handleZoomOut}
          >
            <img
              src="https://i.postimg.cc/4yjQz39R/c9245323-bbd5-45c7-9620-631addbee3d0.jpg"
              alt="Default Dress"
              className="default-dress"
              onMouseEnter={handleZoomIn}
              onMouseLeave={handleZoomOut}
            />
            {selectedDress && (
              <>
                <img
                
                  src={selectedDress}
                  alt="Selected Dress"
                  className={`selected-dress-overlay ${
                    isOutOfStock ? "out-of-stock" : ""
                  }`}
                />
                {isOutOfStock && (
                  <p className="out-of-stock-text">Out of Stock</p>
                )}
              </>
            )}
          </div>
        </div>

        <div className="dress-details">
          <h2>3BROS</h2>
          <p>Men Solid Polo Neck Cotton Blend (220 gsm) Orange T-Shirt(White)</p>
          <p className="price">
            ₹1,299<span className="original-price">₹3,199</span>
          </p>
          <p className="discount">59% off</p>
          <div className="rating">
            <span className="stars">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
            <span className="rating-value">4.623 ratings</span>
          </div>
          <p className="reviews">16 reviews</p>
          <div className="sizes">
  <span className="size">Size:</span>
  <button
    className={`size-btn ${
      selectedSize === "S" && isOutOfStock ? "out-of-stock" : ""
    }`}
    onClick={() => handleSizeClick("S")}
  >
    S
  </button>
  <button
    className={`size-btn ${
      selectedSize === "M" && isOutOfStock ? "out-of-stock" : ""
    }`}
    onClick={() => handleSizeClick("M")}
  >
    M
  </button>
  <button
    className={`size-btn ${
      selectedSize === "L" && isOutOfStock ? "out-of-stock" : ""
    }`}
    onClick={() => handleSizeClick("L")}
  >
    L
  </button>
  <button
    className={`size-btn ${
      selectedSize === "XL" && isOutOfStock ? "out-of-stock" : ""
    }`}
    onClick={() => handleSizeClick("XL")}
  >
    XL
  </button>
  <button
    className={`size-btn ${
      selectedSize === "XXL" && isOutOfStock ? "out-of-stock" : ""
    }`}
    onClick={() => handleSizeClick("XXL")}
  >
    XXL
  </button>
          </div>
          <div className="buttons">
            <button className="buy-now">Buy Now</button>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="frequently-bought">
        <div className="Product">
          <h2>Frequently bought together</h2>
          <div className="ProductClass">
            <div className="product">
              <img
                src="https://i.postimg.cc/FzWv3v63/19bdf9b7-d883-4679-82d3-f19be7315636-1.jpg"
                alt="Product 1"
                className="product-image"
              />
              <div className="product-details">
                <h6 className="product-name">3BROS</h6>
                <p className="product-description">Men Solid Polo N...</p>
                <p className="product-price">₹1,299</p>
                <p className="product-size">Size S, M, L, XL, XXL</p>
              </div>
            </div>
            <span className="plus-sign">+</span> 
            <div className="product">
              <img
                src="https://www.mannequins-online.com/3345-large_default/man-flexible-mannequin-flexible-legs-m.jpg"
                alt="Product 2"
                className="product-image"
              />
              <div className="product-details">
                <h6 className="product-name">BASE 41</h6>
                <p className="product-description">Men Regular Fit ...</p>
                <p className="product-price">₹740</p>
                <p className="product-size">Size S, M, L, XL, XXL</p>
              </div>
            </div>
          </div>
        </div>
        <div className="price-summary">
          <h2>Price Summary</h2>
          <div className="summary-item">
            <p>Main Product selected</p>
            <p className="price">₹1,299</p>
          </div>
          <div className="summary-item">
            <p>1 Addonselected</p>
            <p className="addon">+₹595</p>
          </div>
          <div className="summary-item total">
            <p>Total</p>
            <p className="price">₹2039</p>
          </div>
          <button className="add-to-cart">ADD 2 ITEMS TO CART</button>
        </div>
      </div>
      <div className="you-might-be-interested">
        <h2>You might be interested in</h2>
        <div className="interest-categories">
          <div className="interest-category">
            <img
              src="https://rukminim1.flixcart.com/image/400/400/xif0q/shopsy-sari/0/w/o/free-latest-georgette-saree-blue-wish-unstitched-original-imagp4k9kmdc3skx.jpeg?q=90"
              alt="Women's Sarees"
              className="interest-image"
            />
            <div className="interest-details">
              <p className="interest-description">Women's Sarees</p>
              <p className="interest-discount">Min. 50% Off</p>
              <button className="interest-button">Shop Now</button>
            </div>
          </div>
          <div className="interest-category">
            <img
              src="https://rukminim1.flixcart.com/image/400/400/xif0q/kids-t-shirt/s/z/n/9-10-years-byl-wt-blrnfulboy-bz55-blive-original-imaghbh9vdpm95hw.jpeg?q=90"
              alt="Kids' T-shirts"
              className="interest-image"
            />
            <div className="interest-details">
              <p className="interest-description">Kids' T-shirts</p>
              <p className="interest-discount">Min. 50% Off</p>
              <button className="interest-button">Shop Now</button>
            </div>
          </div>
          <div className="interest-category">
            <img
              src="https://rukminim1.flixcart.com/image/400/400/xif0q/shoe/j/w/y/-original-imagzhztrhwzffpp.jpeg?q=90"
              alt="Sports Shoes"
              className="interest-image"
            />
            <div className="interest-details">
              <p className="interest-description">Sports Shoes</p>
              <p className="interest-discount">Min. 70% Off</p>
              <button className="interest-button">Shop Now</button>
            </div>
          </div>
          <div className="interest-category">
            <img
              src="https://rukminim1.flixcart.com/image/400/400/xif0q/slipper-flip-flop/g/f/0/-original-imaghugu7dfeyf7d.jpeg?q=90"
              alt="Sports Shoes"
              className="interest-image"
            />
            <div className="interest-details">
              <p className="interest-description">Slippers & Flip Flops</p>
              <p className="interest-discount">Min. 70% Off</p>
              <button className="interest-button">Shop Now</button>
            </div>
          </div>
           
        </div>
        </div>
    </div>
    
  );
};

export default App;
