import React, { useState } from 'react'

const Pricing = () => {
  const [activeTab, setActiveTab] = useState('standard')

  const plans = ['static', 'standard', 'premium']

  return (
    <div className='min-h-screen bg-gray-50 p-4 md:p-8'>
      <div className='mx-auto max-w-4xl'>
        <div className='text-center mb-8'>
          <p className='text-pink-500 font-medium mb-2'>PRICING</p>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-800'>
            My Pricing
          </h1>
        </div>

        <div className='relative mb-6'>
          <span className='absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-200 text-xs px-2 py-0.5 rounded'>
            Recommended
          </span>
          <div className='w-full bg-white rounded-xl p-1 shadow-sm flex'>
            {plans.map(plan => (
              <button
                key={plan}
                onClick={() => setActiveTab(plan)}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === plan
                    ? 'bg-gray-100 text-pink-500'
                    : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                {plan.charAt(0).toUpperCase() + plan.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className='bg-white rounded-2xl p-6 shadow-sm'>
          <div className='flex justify-between items-start mb-6'>
            <div>
              <h2 className='text-2xl font-bold text-gray-800 mb-2'>
                Design Make this Page
              </h2>
              <p className='text-gray-600'>Elementor</p>
            </div>
            <div className='bg-white shadow-sm rounded-lg p-3'>
              <span className='text-2xl font-bold text-pink-500'>$50.00</span>
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
                    className='w-5 h-5 text-pink-500'
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
                    className='w-5 h-5 text-pink-500'
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

          <button className='w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 mb-6'>
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
  )
}

export default Pricing
