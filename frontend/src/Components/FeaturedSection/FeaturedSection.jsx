import React from 'react';
import Title from '../Title';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router';
import { useAppContext } from '../../context/AppContext';
import PropertyCard from '../PropertyCard';
import './FeaturedSection.css';

const FeaturedSection = () => {
  const navigate = useNavigate();
  const { properties } = useAppContext();

  return (
    <div className="featured-section">
      {/* Title */}
      <div>
        <Title
          title="Featured Properties"
          subtitle="Luxury living awaits you at our premier featured properties. Explore the finest rentals curated just for you."
        />
      </div>

      {/* Property Grid */}
      <div className="property-grid">
        {properties.slice(0, 6).map((property) => (
          <div key={property._id}>
            <PropertyCard property={property} />
          </div>
        ))}
      </div>

      {/* Button */}
      <button
        className="explore-btn"
        onClick={() => {
          navigate('/properties');
          scrollTo(0, 0);
        }}
      >
        Explore All Properties
        <img src={assets.arrow_icon} alt="arrow" />
      </button>
    </div>
  );
};

export default FeaturedSection;
