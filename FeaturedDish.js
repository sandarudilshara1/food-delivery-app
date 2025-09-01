import React from 'react';
import './FeaturedDish.css';

function FeaturedDish({ name, description, price, image }) {
  return (
    <div className="featured-dish">
      <img src={image} alt={name} className="dish-image" />
      <div className="dish-info">
        <h2>{name}</h2>
        <p>{description}</p>
        <span>{price}</span>
        <button className="order-btn">Order Now</button>
      </div>
    </div>
  );
}

export default FeaturedDish;
