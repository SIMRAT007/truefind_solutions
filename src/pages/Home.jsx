import React from 'react'
import HeroSection from '../components/HeroSection'
import Clients from '../components/Clients'
import AboutUs from '../components/About'
import WhatWeDoSection from '../components/WhatWeDo'
import Portfolio from '../components/Portfolio'
import Testimonial from '../components/Testimonial'
import Services from '../components/ServicesSection'
import ValuesSection from '../components/ValuesSection'
import CTA from '../components/Cta'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Location from '../components/Location'
import Pricing from '../components/Pricing'
import Faq from '../components/Faq'

const Home = () => {
  return (
    <>
    <HeroSection/>
    <Clients/>
    <AboutUs/>
    <WhatWeDoSection/>
    <Portfolio/>
    <Services/>
    <ValuesSection/>
    {/* <Pricing/> */}
    <Testimonial/>
    <CTA/>
    <Faq/>
    <Contact/>
    <Location/>
    <Footer/>
    </>
  )
}

export default Home

// [#2E81CC]
