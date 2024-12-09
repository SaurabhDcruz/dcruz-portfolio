import React from 'react'

const ContactUs = () => {
  return (
    <div className='min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-4'>
      <div className='max-w-7xl mx-auto px-2'>
        {/* Header */}
        <div className='text-center mb-12'>
          <p className='text-primary font-medium mb-2'>CONTACT</p>
          <h1 className='text-4xl font-bold text-gray-800 sm:text-5xl'>
            Contact With Me
          </h1>
        </div>

        {/* Main Content */}
        <div className='grid grid-cols-1 lg:grid-cols-[1.4fr,2fr] gap-12 mt-8'>
          {/* Left Column */}
          <div className='bg-gradient-box-w rounded-lg shadow-white-3 p-8'>
            <div className='aspect-w-16 aspect-h-9 mb-6'>
              <img
                src='https://rainbowit.net/html/inbio/assets/images/contact/contact1.png'
                alt='Handshake'
                className='rounded-lg object-cover w-full h-full'
              />
            </div>
            <h2 className='text-2xl font-bold text-gray-800 mb-2'>
              Nevine Acotanza
            </h2>
            <div className='space-y-6'>
              <div>
                <p className='text-gray-600 mb-4'>Chief Operating Officer</p>
              </div>
              <div>
                <p className='text-gray-600 mb-6'>
                  I am available for freelance work. Connect with me via and
                  call in to my account.
                </p>
              </div>
              <div>
                <p className='text-gray-600'>Phone: +01234567890</p>
              </div>
              <div>
                <p className='text-gray-600'>Email: admin@example.com</p>
              </div>
            </div>
            <div className='mt-8'>
              <p className='text-sm font-medium text-gray-600 mb-4 pb-3'>
                FIND WITH ME
              </p>
              <div className='flex space-x-4'>
                <a
                  href='#'
                  className='p-3 group bg-gradient-box-w duration-500 hover:-translate-y-1 shadow-shadow-white-3 rounded-lg hover:bg-gradient-red-hover'
                >
                  <svg
                    className='w-7 h-7 group-hover:text-white text-gray-600 transition-all duration-300'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
                  </svg>
                </a>
                <a
                  href='#'
                  className='p-3 group bg-gradient-box-w duration-500 hover:-translate-y-1 shadow-shadow-white-3 rounded-lg hover:bg-gradient-red-hover'
                >
                  <svg
                    className='w-7 h-7 group-hover:text-white text-gray-600 transition-all duration-300'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                  </svg>
                </a>
                <a
                  href='#'
                  className='p-3 group bg-gradient-box-w duration-500 hover:-translate-y-1 shadow-shadow-white-3 rounded-lg hover:bg-gradient-red-hover'
                >
                  <svg
                    className='w-7 h-7 group-hover:text-white text-gray-600 transition-all duration-300'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.897 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.897-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z' />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className='bg-gradient-box-w rounded-lg shadow-shadow-white-3 p-8'>
            <form className='space-y-6'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    YOUR NAME
                  </label>
                  <input
                    type='text'
                    id='name'
                    className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none focus:border-transparent'
                  />
                </div>
                <div>
                  <label
                    htmlFor='phone'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    PHONE NUMBER
                  </label>
                  <input
                    type='tel'
                    id='phone'
                    className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none focus:border-transparent'
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  EMAIL
                </label>
                <input
                  type='email'
                  id='email'
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none focus:border-transparent'
                />
              </div>
              <div>
                <label
                  htmlFor='subject'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  SUBJECT
                </label>
                <input
                  type='text'
                  id='subject'
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none focus:border-transparent'
                />
              </div>
              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  YOUR MESSAGE
                </label>
                <textarea
                  id='message'
                  rows={6}
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none focus:border-transparent'
                ></textarea>
              </div>
              <div className='hover:-translate-y-1 duration-500 transition-all'>
                <button
                  type='submit'
                  className='w-full flex items-center transition-all duration-300 justify-center px-8 py-4  text-base font-medium rounded-lg text-primary bg-gradient-box-w shadow-shadow-gray hover:bg-gradient-red-hover hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'
                >
                  SEND MESSAGE
                  <svg
                    className='ml-2 -mr-1 w-5 h-5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M14 5l7 7m0 0l-7 7m7-7H3'
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
