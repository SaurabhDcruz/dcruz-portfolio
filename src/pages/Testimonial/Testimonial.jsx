import React from 'react'
import Slider from '../../Components/Slider/Slider'

const Testimonial = () => {
  return (
    <>
    <div className='w-full max-w-6xl mx-auto xs:px-10 sm:px-10 md:px-20 py-16'>
      <div className='text-center mb-12'>
        <span className='text-pink-500 uppercase text-sm font-medium tracking-wider'>
          WHAT CLIENTS SAY
        </span>
        <h2 className='text-4xl font-bold text-gray-800 mt-2'>Testimonial</h2>
      </div>
      <Slider />
    </div>
    </>
  )
}

export default Testimonial
