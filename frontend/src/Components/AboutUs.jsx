import React from "react";
import { Carousel } from "antd";
import { assets } from "../assets/assets";
import Title from "./Title";

const AboutUs = () => {
  return (
    <div className="flex items-center justify-center px-6 py-16 min-h-screen bg-gray-50">
      <div className="w-full max-w-6xl bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-200 animate-fade-in">
        
        {/* Title Section */}
        <div className="text-center py-10 px-6">
          <Title
            title="About Our Company & Team"
            subtitle="At Rentify, we dream and work hard to provide you with the best rental properties designed for your comfort and lifestyle."
          />
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed animate-slide-up">
            Our dedicated team is passionate about connecting people with their perfect homes. 
            From luxurious apartments to budget-friendly stays, we ensure that every listing meets 
            our high standards of quality and trust. Together, we are shaping the future of rentals.
          </p>
        </div>

        {/* Carousel Section */}
        <div className="relative">
          <Carousel className="mt-2" arrows infinite={true} autoplay autoplaySpeed={3000}>
            <div>
              <img
                className="w-full h-[500px] object-cover transition-transform duration-700"
                src={assets.aboutus}
                alt="About Us"
              />
            </div>
            <div>
              <img
                className="w-full h-[500px] object-cover transition-transform duration-700"
                src={assets.aboutvision}
                alt="Our Vision"
              />
            </div>
            <div>
              <img
                className="w-full h-[500px] object-cover transition-transform duration-700"
                src={assets.aboutteam}
                alt="Our Team"
              />
            </div>
            <div>
              <img
                className="w-full h-[500px] object-cover transition-transform duration-700"
                src={assets.aboutcontact}
                alt="Contact Us"
              />
            </div>
          </Carousel>
        </div>

        {/* Footer Section */}
        <div className="text-center py-10 px-6 bg-gray-100">
          <h2 className="text-2xl font-semibold tracking-wide animate-fade-in-up text-gray-800">
            Let’s Find Your Next Home Together 🏡
          </h2>
          <p className="mt-2 text-gray-500 text-sm">
            Reach out to our team anytime — we’re here to guide you every step of the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

