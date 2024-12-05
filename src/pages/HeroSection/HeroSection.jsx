import React from 'react'
import { X, Menu, Facebook, Instagram, Linkedin } from 'lucide-react'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <div>
      <main className='pt-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* Left Content */}
            <div className='lg:space-y-[140px] sm:space-y-[100px]'>
              <div className='space-y-[20px]'>
                <div className='space-y-[20px]'>
                  <div>
                    <h2 className='text-gray-600 text-sm tracking-wider mb-4'>
                      WELCOME TO MY WORLD
                    </h2>
                  </div>
                  <div>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4'>
                      Hi, I'm <span className='text-primary'>S D'cruz</span>
                    </h1>
                    <h2 className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold'>
                      a{' '}
                      <span className='text-gray-800'>Professional Coder.</span>
                    </h2>
                  </div>
                </div>
                <div>
                  <p className='text-gray-600 max-w-2xl leading-7'>
                    I use animation as a third dimension by which to simplify
                    experiences and guiding through each and every interaction.
                    I'm not adding motion just to spruce things up, but doing it
                    in ways that.
                  </p>
                </div>
              </div>

              <div className='md:flex items-center gap-[50px]'>
                {/* Social Links */}
                <div className='space-y-4 xs:mt-8'>
                  <h3 className='text-sm font-medium text-gray-900'>
                    FIND WITH ME
                  </h3>
                  <div className='flex space-x-4'>
                    <a
                      href='#'
                      className='p-4 bg-white rounded-lg shadow-white-3 hover:-translate-y-1 group bg-gradient-box-w hover:bg-gradient-red-hover transition-all duration-500'
                    >
                      <Facebook className='h-6 w-6 text-gray-600 group-hover:text-white duration-300' />
                    </a>
                    <a
                      href='#'
                      className='p-4 bg-white rounded-lg shadow-white-3 hover:-translate-y-1 group bg-gradient-box-w hover:bg-gradient-red-hover transition-all duration-500'
                    >
                      <Instagram className='h-6 w-6 text-gray-600 group-hover:text-white duration-300' />
                    </a>
                    <a
                      href='#'
                      className='p-4 bg-white rounded-lg shadow-white-3 hover:-translate-y-1 group bg-gradient-box-w hover:bg-gradient-red-hover transition-all duration-500'
                    >
                      <Linkedin className='h-6 w-6 text-gray-600 group-hover:text-white duration-300' />
                    </a>
                  </div>
                </div>

                {/* Skills */}
                <div className='space-y-4 xs:mt-8'>
                  <h3 className='text-sm font-medium text-gray-900'>
                    BEST SKILL ON
                  </h3>
                  <div className='flex space-x-4'>
                    {[
                      'https://rainbowit.net/html/inbio/assets/images/icons/icons-01.png',
                      'https://rainbowit.net/html/inbio/assets/images/icons/icons-02.png',
                      'https://rainbowit.net/html/inbio/assets/images/icons/icons-03.png'
                    ].map(skill => (
                      <div
                        key={skill}
                        className='p-4 bg-white rounded-lg shadow-white-3 hover:-translate-y-1 bg-gradient-box-w  transition-all duration-500'
                      >
                        <img
                          src={skill}
                          alt='icon'
                          className='h-6 w-6 object-scale-down'
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className='relative  h-[400px] sm:h-[500px] lg:h-[600px]'>
              <img
                src='https://static.vecteezy.com/system/resources/previews/024/095/208/large_2x/happy-young-man-smiling-free-png.png'
                alt='Professional portrait'
                className='absolute inset-0 w-full h-full object-fit rounded-2xl bg-gradient-box-w shadow-white-3'
              />
            </div>
          </div>
        </div>

        {/* Side Text */}
        <div className='fixed right-0 top-1/2 -translate-y-1/2 hidden lg:block h-[100px] w-[41px] rounded bg-gradient-box-w shadow-white-3 cursor-pointer z-20'>
          <div className='vertical-text transform rotate-90 text-primary tracking-widest text-sm  absolute top-[40px] right-[-8px]'>
            DEMOS
          </div>
        </div>
      </main>
    </div>
  )
}

export default HeroSection
