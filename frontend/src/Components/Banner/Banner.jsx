import React from 'react';
import { assets } from '../../assets/assets';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner-section">
      {/* Text Content */}
      <div className="banner-text">
        <h2 className="banner-title">
          Do you want to rent your property?
        </h2>
        <p className="banner-subtitle">
          Turn your property into a steady income stream. List it today and
          connect with potential tenants looking for premium rentals.
        </p>

        <button className="banner-btn">
          List Your Property
        </button>
      </div>

      {/* Image */}
      <div className="banner-image">
        <img
          src={assets.animatedhouse1}
          alt="Luxury property"
          className="banner-img"
        />
      </div>
    </div>
  );
};

export default Banner;

