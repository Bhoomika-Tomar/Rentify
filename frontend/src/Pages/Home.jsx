import React from 'react'

import FeaturedSection from '../Components/FeaturedSection/FeaturedSection'
import Banner from '../Components/Banner/Banner'
import Testimonial from '../Components/Testimonial'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
import AboutUs from '../Components/AboutUs'
import Hero from '../Components/Hero/Hero'

const Home = () => {
  return (
    <div>
      <Hero/>
      <FeaturedSection/>
      <Banner/>
      <Testimonial/>
      <Newsletter/>
      <AboutUs/>
      
        
    </div>
  )
}

export default Home