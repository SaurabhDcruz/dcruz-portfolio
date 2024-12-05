import React from 'react'
import Slider from '../../Components/Slider/Slider'

const Testimonial = () => {
  return (
    <>
      <div className='w-full max-w-6xl mx-auto xs:px-10 sm:px-10 md:px-20 py-2'>
        <div className='text-center mb-12 space-y-4'>
          <div>
            <p className='text-primary text-sm uppercase letterWordSpacing mb-2'>
              WHAT CLIENTS SAY
            </p>
          </div>
          <div>
            <h2 className='xs:text-[26px] sm:text-[34px] lg:text-[60px] font-bold leading-[1.2] text-[#3c3e41]  mb-11 mb'>
              Testimonial
            </h2>
          </div>
        </div>
        <Slider />
      </div>
    </>
  )
}

export default Testimonial
