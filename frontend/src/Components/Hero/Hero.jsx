import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import { useAppContext } from '../../context/AppContext';
import './Hero.css';

const Hero = () => {
  const [location, setLocation] = useState('');
  const { navigate, startDate, setStartDate, returnDate, setReturnDate } = useAppContext();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(
      `/properties?location=${location}&startDate=${startDate}&returnDate=${returnDate}`
    );
  };

  return (
    <div
      className="hero-container"
      style={{
        backgroundImage: `url(${assets.herobanner1})`,
      }}
    >
      {/* Dark overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          Luxury Properties on Rent
        </h1>

        <form onSubmit={handleSearch} className="hero-form">
          {/* Location */}
          <div className="form-group">
            <label htmlFor="pickup-location">Location</label>
            <input
              id="pickup-location"
              required
              type="text"
              placeholder="Enter City or Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <p className="form-hint">
              {location ? `Selected: ${location}` : ' '}
            </p>
          </div>

          {/* Start Date */}
          <div className="form-group">
            <label htmlFor="pickup-date">Rent Start Date</label>
            <input
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              type="date"
              id="pickup-date"
              min={new Date().toISOString().split('T')[0]}
              required
            />
          </div>

          {/* Return Date */}
          <div className="form-group">
            <label htmlFor="return-date">Rent Return Date</label>
            <input
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              type="date"
              id="return-date"
              required
            />
          </div>

          {/* Search Button */}
          <div className="form-btn">
            <button type="submit" className="search-btn">
              <img
                src={assets.search_icon}
                alt="search"
                className="search-icon"
              />
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
