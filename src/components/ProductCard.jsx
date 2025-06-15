import React from "react";
import "./ProductCard.css";

function ProductCard({ title, price, image, description }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="product-image" />
      <h2>{title}</h2>
      <p>₹{price}</p>
      <button
        className="button"
        onClick={() => alert(`Description:\n${description}`)}
      >
        Buy Now
      </button>
    </div>
  );
}

export default ProductCard;
