import React, { useState } from 'react'
import './Pricing.css'

const Pricing = () => {
  const [activeTab, setActiveTab] = useState('standard')

  const plans = ['static', 'standard', 'premium']

  return (
    <div className='min-h-[790px] max-w-7xl mx-auto bg-gray-50 p-4  md:p-8'>
      <div className='lg:flex justify-between relative'>
        <div className='text-start mb-8 space-y-4'>
          <div>
            <p className='font-[400] text-sm uppercase text-primary letterWordSpacing'>
              PRICING
            </p>
          </div>
          <div>
            <h1 className='xs:text-[26px] sm:text-[34px] lg:text-[60px] font-bold leading-[1.2] my-0 text-[#3c3e41] '>
              My Pricing
            </h1>
          </div>
        </div>
        <div>
          <div className='bg-gradient-box-w shadow-shadow-white-3 rounded-2xl '>
            <div className='relative'>
              <div className='w-full bg-gradient-box-w rounded-xl  shadow-shadow-white-3 grid grid-cols-3'>
                {plans.map((plan, index) => (
                  <div key={index}>
                    {plan == 'standard' ? (
                      <div className='tooltip'>
                        <button
                          key={plan}
                          onClick={() => setActiveTab(plan)}
                          // className={`flex-1 py-8 rounded-lg text-lg font-normal transition-all duration-500 ${
                          //   activeTab === plan
                          //     ? 'bg-gradient-box-w shadow-shadow-white-3 text-primary'
                          //     : 'text-gray-500 hover:bg-gray-50'
                          // }`}
                          className={`w-full px-8 py-7 text-[16px] font-medium transition-all duration-500 
                      ${
                        activeTab === plan
                          ? 'bg-gradient-box-w text-primary shadow-white-3 rounded-lg'
                          : 'text-gray-600 hover:bg-gradient-box-w hover:shadow-white-3 hover:text-primary rounded-lg'
                      }`}
                        >
                          {plan.charAt(0).toUpperCase() + plan.slice(1)}
                        </button>
                        <div className='tooltip-content'>Recommended</div>
                      </div>
                    ) : (
                      <div>
                        <button
                          key={plan}
                          onClick={() => setActiveTab(plan)}
                          // className={`flex-1 py-8 rounded-lg text-lg font-normal transition-all duration-500 ${
                          //   activeTab === plan
                          //     ? 'bg-gradient-box-w shadow-shadow-white-3 text-primary'
                          //     : 'text-gray-500 hover:bg-gray-50'
                          // }`}
                          className={`w-full px-8 py-7 text-[16px] font-medium transition-all duration-500 
                      ${
                        activeTab === plan
                          ? 'bg-gradient-box-w text-primary shadow-white-3 rounded-lg'
                          : 'text-gray-600 hover:bg-gradient-box-w hover:shadow-white-3 hover:text-primary rounded-lg'
                      }`}
                        >
                          {plan.charAt(0).toUpperCase() + plan.slice(1)}
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className='p-12'>
              <div className='sm:flex justify-between items-start mb-6'>
                <div className='mb-2'>
                  <h2 className='text-2xl font-bold text-gray-800 mb-2'>
                    Design Make this Page
                  </h2>
                  <p className='text-gray-600'>Elementor</p>
                </div>
                <div className='bg-gradient-box-w text-center sm:text-start shadow-white-3 rounded-lg p-3'>
                  <span className='text-3xl font-bold text-primary'>
                    $50.00
                  </span>
                </div>
              </div>

              <p className='text-gray-600 mb-8'>
                Making this the first true generator on the Internet. It uses a
                dictionary & plugin Development.
              </p>

              <div className='grid md:grid-cols-2 gap-4 mb-8'>
                <div className='space-y-4'>
                  {[
                    '1 Page with Elementor',
                    'Design Customization',
                    'Responsive Design',
                    'Content Upload',
                    'Design Customization',
                    '2 Plugins/Extensions'
                  ].map((feature, index) => (
                    <div key={index} className='flex items-center gap-2'>
                      <svg
                        className='w-5 h-5 text-primary'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className='space-y-4'>
                  {[
                    'multipage Elementor',
                    'Design Figma',
                    'MAintaine Design',
                    'Content Upload',
                    'Design With XD',
                    '8 Plugins/Extensions'
                  ].map((feature, index) => (
                    <div key={index} className='flex items-center gap-2'>
                      <svg
                        className='w-5 h-5 text-primary'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button className='w-full transition-all duration-500 bg-gradient-box-w shadow-white-3 hover:bg-gradient-red-hover text-gray-800 hover:text-white font-medium p-6 rounded-lg  flex items-center justify-center gap-2 mb-6'>
                ORDER NOW
                <svg
                  className='w-4 h-4'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M14 5l7 7m0 0l-7 7m7-7H3'
                  />
                </svg>
              </button>

              <div className='flex items-center justify-center gap-6 text-sm text-gray-600'>
                <div className='flex items-center gap-1'>
                  <svg
                    className='w-4 h-4'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                  2 Days Delivery
                </div>
                <div className='flex items-center gap-1'>
                  <svg
                    className='w-4 h-4'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
                    />
                  </svg>
                  Unlimited Revission
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
