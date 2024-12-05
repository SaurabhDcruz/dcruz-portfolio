import React from 'react'

const Steps = ({ data }) => {
  // Structre of Data
  //   const educationData = [
  //     {
  //       period: '2007 - 2010',
  //       title: 'Personal Portfolio April Fools',
  //       institution: 'University of DVI (1997 - 2001)',
  //       description:
  //         'This education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.',
  //       rating: '4.30/5',
  //       highlight: true
  //     },
  //     {
  //       period: '2007 - 2010',
  //       title: 'Examples Of Personal Portfolio',
  //       institution: 'College of Studies (2000 - 2002)',
  //       description:
  //         'Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.',
  //       rating: '4.50/5'
  //     },
  //     {
  //       period: '2007 - 2010',
  //       title: 'Tips For Personal Portfolio',
  //       institution: 'University of Studies (1997 - 2001)',
  //       description:
  //         'If you are going to use a passage. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.',
  //       rating: '4.80/5'
  //     }
  //   ]
  return (
    <div className='relative'>
      {/* Vertical line */}
      <div className='absolute left-[10px] p-[2px] top-0 h-full w-[1px] bg-gray-200' />
      <div className='space-y-8'>
        {data.map((item, index) => (
          <div key={index} className='relative flex xs:gap-3 gap-6 group'>
            {/* Circle connector */}
            <div className='relative'>
              <div className='w-6 h-6 rounded-full border-2 border-gray-200 bg-white group-hover:bg-primary z-10 relative top-[120px]' />
              <span className='z-9 h-[4px] w-[55px] bg-gray-200 absolute top-[129px] left-[12px]'></span>
            </div>
            {/* Content card */}
            <div className='flex-1 xs:p-3 md:p-6 z-10 shadow-white-3 bg-gradient-box-w rounded-md transition-all duration-300 ease-in-out group-hover:bg-gradient-red-hover'>
              <div className='flex p-1 justify-between items-start mb-2'>
                <div>
                  <h3 className='md:text-xl font-[400] transition-colors duration-200 ease-in-out group-hover:text-white'>
                    {item.title}
                  </h3>
                  <p className='text-sm text-gray-600 mt-1 transition-colors duration-200 ease-in-out group-hover:text-white'>
                    {item.institution}
                  </p>
                </div>
                <span className='text-primary flex justify-center items-center xs:text-[11px] xs:h-6 xs:py-1 sm:py-1 px-2 md:text-sm md:h-[30px]  bg-white transition-all shadow-white-3 duration-300 ease-in-out group-hover:shadow-md group-hover:bg-gradient-red-hover group-hover:text-white rounded-md'>
                  {item.rating}
                </span>
              </div>
              <hr className='my-3' />
              <p className='text-gray-600 md:text-lg p-2 leading-relaxed transition-colors duration-200 ease-in-out group-hover:text-white'>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Steps
