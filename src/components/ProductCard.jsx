import React, { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ title, price, image, description }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h2 className="product-title">{title}</h2>
      <p className="product-price">₹{price}</p>
      <button
        className="buy-button"
        onClick={() => setShowDescription(!showDescription)}
      >
        Buy Now
      </button>
      <p className={`product-description ${showDescription ? 'visible' : ''}`}>
        {description}
      </p>
    </div>
  );
};

export default ProductCard;
