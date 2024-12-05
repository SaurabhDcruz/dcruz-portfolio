import { React, useState } from 'react'
import HeroSection from '../HeroSection/HeroSection'
import WhatIDo from '../WhatIDoSection/WhatIDo'
import MyResume from '../MyResume/MyResume'
import ClientShowcase from '../ClientShowcase/ClientShowcase'
import Header from './Header/Header'
import Testimonial from '../Testimonial/Testimonial'
import Pricing from '../Pricing/Pricing'

const Layout = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <Header />
      {/* Hero Section */}
      <HeroSection />

      {/* What I Do Section */}
      {<WhatIDo />}

      {/* My Resume */}
      <MyResume />

      {/* Testimonial  */}
      <Testimonial />

      {/* ClientShowcase  */}
      <ClientShowcase />

      {/* My Pricing */}
      <Pricing />
    </div>
  )
}

export default Layout
