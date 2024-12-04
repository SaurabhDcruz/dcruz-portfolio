import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const WhatIDo = () => {
  const services = [
    {
      icon: '≡',
      title: 'Business Strategy',
      description:
        'When you need team setting the first priority to each individual as they have to prepare.'
    },
    {
      icon: '⊞',
      title: 'App Development',
      description:
        'A web application is a software 250,000 users, customers as to capable of to more services.'
    },
    {
      icon: '▢',
      title: 'App Development',
      description:
        'When you need team setting the first priority to each individual as like down to the area.'
    },
    {
      icon: '⊡',
      title: 'Mobile App',
      description:
        'Professional mobile app development capabilities for the mobile.'
    },
    {
      icon: '◎',
      title: 'CEO Marketing',
      description:
        'Mobile Marketing capabilities included social media marketing, community media etc.'
    },
    {
      icon: '▢',
      title: 'Personal Portfolio April',
      description:
        'A web application is a software 250,000 users, customers as to capable of to model services.'
    }
  ]

  const portfolio = [
    {
      image: './assets/Theservicesprovidefordesign.png?height=400&width=600',
      title: 'The services provide for design',
      category: 'Design'
    },
    {
      image:
        './assets/Mobileapplandingdesignappmaintain.png?height=400&width=600',
      title: 'Mobile app landing design & app maintain',
      category: 'Development'
    },
    {
      image:
        './assets/LogodesigncreativityApplication.png?height=400&width=600',
      title: 'Logo design creativity & Application',
      category: 'Creative'
    },
    {
      image: './assets/MobileapplandingdesignServices.png?height=400&width=600',
      title: 'Mobile app landing design & Services',
      category: 'Design'
    },
    {
      image: './assets/Designfortechnologyservices.png?height=400&width=600',
      title: 'Design for technology & services',
      category: 'Development'
    },
    {
      image: './assets/Appfortechnologyservices.png?height=400&width=600',
      title: 'App for technology & services',
      category: 'Creative'
    }
  ]

  return (
    <div className='min-h-screen bg-gray-50 p-4 md:p-8'>
      <section className='max-w-7xl mx-auto'>
        <h4 className='font-[400] text-sm uppercase text-primary letterWordSpacing'>
          Features
        </h4>
        <h2 className='xs:text-[26px] sm:text-[34px] lg:text-[60px] font-bold leading-[1.2] text-[#3c3e41] mt-7 mb-11 mb'>
          What I Do
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-14'>
          {services.map((service, index) => (
            <div className='group'>
              <div
                key={index}
                className='bg-gradient-box-w cursor-pointer xl:h-[300px] xl:w-[400px] p-6 rounded-lg shadow-white-3 transition-all duration-300  group-hover:bg-gradient-red-hover'
              >
                <div className='text-[35px] text-primary group-hover:text-white transition-colors duration-300'>
                  {service.icon}
                </div>
                <h3 className='text-xl font-semibold my-6 text-gray-900 group-hover:text-white transition-colors duration-300'>
                  {service.title}
                </h3>
                <p className='text-gray-600 text-base leading-7 mt-8 group-hover:text-white transition-colors duration-300'>
                  {service.description}
                </p>
                <FaArrowRightLong className='mt-7 ml-1 text-xl opacity-0 group-hover:opacity-100 group-hover:text-white transition-all duration-300' />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='max-w-7xl mx-auto mt-20'>
        <div className='text-center mb-12'>
          <p className='text-primary text-sm uppercase mb-2 letterWordSpacing'>
            VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
          </p>
          <h2 className='xs:text-[26px] sm:text-[34px] lg:text-[60px] font-bold leading-[1.2] text-[#3c3e41] mt-[15px] mb-0'>
            My Portfolio
          </h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
          {portfolio.map((item, index) => (
            <div
              key={index}
              className='group relative bg-gradient-box-w rounded-lg overflow-hidden shadow-white-3 transition-shadow duration-300'
            >
              <div className='px-5 pt-5'>
                <div className='aspect-w-16 aspect-h-9 overflow-hidden rounded-md'>
                  <img
                    src={item?.image}
                    alt={item?.title}
                    className='object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-110'
                  />
                </div>
              </div>
              <div className='p-4'>
                <span className='text-primary text-sm'>{item.category}</span>
                <h3 className='font-semibold mt-1 group-hover:text-primary-500 transition-colors duration-300'>
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default WhatIDo
