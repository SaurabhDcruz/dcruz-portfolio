import React, { useState } from 'react'

const MyResume = () => {
  const [activeTab, setActiveTab] = useState('education')

  const tabs = [
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Professional Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'interview', label: 'Interview' }
  ]

  const steps = [
    {
      number: '01',
      title: 'Personal Info',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      number: '02',
      title: 'Education',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      number: '03',
      title: 'Work Experience',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      number: '04',
      title: 'Interview',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    }
  ]

  const educationData = [
    {
      period: '2007 - 2010',
      title: 'Personal Portfolio April Fools',
      institution: 'University of DVI (1997 - 2001)',
      description:
        'This education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.',
      rating: '4.30/5',
      highlight: true
    },
    {
      period: '2007 - 2010',
      title: 'Examples Of Personal Portfolio',
      institution: 'College of Studies (2000 - 2002)',
      description:
        'Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.',
      rating: '4.50/5'
    },
    {
      period: '2007 - 2010',
      title: 'Tips For Personal Portfolio',
      institution: 'University of Studies (1997 - 2001)',
      description:
        'If you are going to use a passage. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.',
      rating: '4.80/5'
    }
  ]

  const experienceData = [
    {
      period: '2007 - 2010',
      title: 'Diploma in Web Development',
      institution: 'BSE In CSE (2004 - 2008)',
      description:
        'Contrary to popular belief. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.',
      rating: '4.70/5'
    },
    {
      period: '2007 - 2010',
      title: 'The Personal Portfolio Mystery',
      institution: 'Job at Rainbow-Themes (2008 - 2016)',
      description:
        'Generate Lorem Ipsum which looks. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.',
      rating: '4.95/5'
    },
    {
      period: '2007 - 2010',
      title: 'Diploma in Computer Science',
      institution: 'Works at Plugin Development (2016 - 2020)',
      description:
        'Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.',
      rating: '5.00/5'
    }
  ]

  return (
    <div className='min-h-screen bg-gray-50 p-4 md:p-8 relative'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          <p className='text-primary text-sm uppercase letterWordSpacing mb-2'>
            7+ YEARS OF EXPERIENCE
          </p>
          <h2 className='text-4xl font-bold text-gray-800'>My Resume</h2>
        </div>

        {/* Tabs */}
        <div className='grid lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-4 justify-center mb-12'>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-4 text-sm font-medium transition-colors duration-300 rounded-full
                  ${
                    activeTab === tab.id
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-600 hover:bg-primary hover:text-white'
                  }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Stepper */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
          {steps.map((step, index) => (
            <div
              key={index}
              className='bg-white p-6 rounded-lg shadow-sm hover:bg-primary hover:text-white transition-all duration-300 group'
            >
              <div className='flex items-center mb-4'>
                <span className='text-3xl font-bold mr-2 text-primary group-hover:text-white'>
                  {step.number}
                </span>
                <h3 className='text-xl font-semibold'>{step.title}</h3>
              </div>
              <p className='text-sm text-gray-600 group-hover:text-white/90'>
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className='relative'>
          <div
            className={`inset-0 transition-opacity duration-300 ${
              activeTab === 'education'
                ? 'opacity-100 relative'
                : 'opacity-0 absolute'
            }`}
          >
            {/* Content 1 */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
              {/* Education Column */}
              <div className='space-y-6'>
                <h3 className='text-2xl font-bold mb-6'>Education Quality</h3>
                <div className='p-4 md:p-8'>
                  <div className='max-w-3xl mx-auto'>
                    <div className='mb-8'>
                      <span className='text-gray-600'>
                        {educationData[0].period}
                      </span>
                    </div>
                    <div className='relative'>
                      {/* Vertical line */}
                      <div className='absolute left-2.5 top-0 h-full w-[1px] bg-gray-200' />

                      <div className='space-y-8'>
                        {educationData.map((item, index) => (
                          <div key={index} className='relative flex gap-6'>
                            {/* Circle connector */}
                            <div className='relative'>
                              <div className='w-6 h-6 rounded-full border-2 border-gray-200 bg-white z-10 relative' />
                            </div>

                            {/* Content card */}
                            <div className='flex-1 p-6 shadow-sm hover:shadow-md transition-shadow'>
                              <div className='flex justify-between items-start mb-2'>
                                <div>
                                  <h3 className='text-xl font-semibold'>
                                    {item.title}
                                  </h3>
                                  <p className='text-sm text-gray-600 mt-1'>
                                    {item.institution}
                                  </p>
                                </div>
                                <span className='text-primary text-sm'>
                                  {item.rating}
                                </span>
                              </div>
                              <p className='text-gray-600 text-sm leading-relaxed'>
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Experience Column */}
              <div className='space-y-6'>
                <h3 className='text-2xl font-bold mb-6'>Job Experience</h3>
                <div className='p-4 md:p-8'>
                  <div className='max-w-3xl mx-auto'>
                    <div className='mb-8'>
                      <span className='text-gray-600'>
                        {educationData[0].period}
                      </span>
                    </div>
                    <div className='relative'>
                      {/* Vertical line */}
                      <div className='absolute left-2.5 top-0 h-full w-[1px] bg-gray-200' />
                      <div className='space-y-8'>
                        {educationData.map((item, index) => (
                          <div key={index} className='relative flex gap-6'>
                            {/* Circle connector */}
                            <div className='relative'>
                              <div className='w-6 h-6 rounded-full border-2 border-gray-200 bg-white z-10 relative' />
                            </div>

                            {/* Content card */}
                            <div className='flex-1 p-6 shadow-sm hover:shadow-md transition-shadow'>
                              <div className='flex justify-between items-start mb-2'>
                                <div>
                                  <h3 className='text-xl font-semibold'>
                                    {item.title}
                                  </h3>
                                  <p className='text-sm text-gray-600 mt-1'>
                                    {item.institution}
                                  </p>
                                </div>
                                <span className='text-primary text-sm'>
                                  {item.rating}
                                </span>
                              </div>
                              <p className='text-gray-600 text-sm leading-relaxed'>
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`inset-0 transition-opacity duration-300 ${
              activeTab === 'skills'
                ? 'opacity-100 relative'
                : 'opacity-0 absolute'
            }`}
          >
            {/* Content 2 */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
              {/* Design Skill */}
              <div className='space-y-6'>
                <h3 className='text-2xl font-bold mb-6'>Design Skill</h3>
                <div className='p-4 md:p-8'>
                  <div className='max-w-3xl mx-auto'>
                    <div className='mb-8'>
                      <span className='text-gray-600'>
                        {educationData[0].period}
                      </span>
                    </div>
                    <div className='relative'>
                      {/* Vertical line */}
                      <div className='absolute left-2.5 top-0 h-full w-[1px] bg-gray-200' />

                      <div className='space-y-8'>
                        {educationData.map((item, index) => (
                          <div key={index} className='relative flex gap-6'>
                            {/* Circle connector */}
                            <div className='relative'>
                              <div className='w-6 h-6 rounded-full border-2 border-gray-200 bg-white z-10 relative' />
                            </div>

                            {/* Content card */}
                            <div className='flex-1 p-6 shadow-sm hover:shadow-md transition-shadow'>
                              <div className='flex justify-between items-start mb-2'>
                                <div>
                                  <h3 className='text-xl font-semibold'>
                                    {item.title}
                                  </h3>
                                  <p className='text-sm text-gray-600 mt-1'>
                                    {item.institution}
                                  </p>
                                </div>
                                <span className='text-primary text-sm'>
                                  {item.rating}
                                </span>
                              </div>
                              <p className='text-gray-600 text-sm leading-relaxed'>
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Development Skill */}
              <div className='space-y-6'>
                <h3 className='text-2xl font-bold mb-6'>Development Skill</h3>
                <div className='p-4 md:p-8'>
                  <div className='max-w-3xl mx-auto'>
                    <div className='mb-8'>
                      <span className='text-gray-600'>
                        {educationData[0].period}
                      </span>
                    </div>
                    <div className='relative'>
                      {/* Vertical line */}
                      <div className='absolute left-2.5 top-0 h-full w-[1px] bg-gray-200' />
                      <div className='space-y-8'>
                        {educationData.map((item, index) => (
                          <div key={index} className='relative flex gap-6'>
                            {/* Circle connector */}
                            <div className='relative'>
                              <div className='w-6 h-6 rounded-full border-2 border-gray-200 bg-white z-10 relative' />
                            </div>

                            {/* Content card */}
                            <div className='flex-1 p-6 shadow-sm hover:shadow-md transition-shadow'>
                              <div className='flex justify-between items-start mb-2'>
                                <div>
                                  <h3 className='text-xl font-semibold'>
                                    {item.title}
                                  </h3>
                                  <p className='text-sm text-gray-600 mt-1'>
                                    {item.institution}
                                  </p>
                                </div>
                                <span className='text-primary text-sm'>
                                  {item.rating}
                                </span>
                              </div>
                              <p className='text-gray-600 text-sm leading-relaxed'>
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`inset-0 transition-opacity duration-300 ${
              activeTab === 'experience'
                ? 'opacity-100 relative'
                : 'opacity-0 absolute'
            }`}
          >
            {/* Content 3 */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
              {/* Education Column */}
              <div className='space-y-6'>
                <h3 className='text-2xl font-bold mb-6'>Education Quality</h3>
                <div className='p-4 md:p-8'>
                  <div className='max-w-3xl mx-auto'>
                    <div className='mb-8'>
                      <span className='text-gray-600'>
                        {educationData[0].period}
                      </span>
                    </div>
                    <div className='relative'>
                      {/* Vertical line */}
                      <div className='absolute left-2.5 top-0 h-full w-[1px] bg-gray-200' />

                      <div className='space-y-8'>
                        {educationData.map((item, index) => (
                          <div key={index} className='relative flex gap-6'>
                            {/* Circle connector */}
                            <div className='relative'>
                              <div className='w-6 h-6 rounded-full border-2 border-gray-200 bg-white z-10 relative' />
                            </div>

                            {/* Content card */}
                            <div className='flex-1 p-6 shadow-sm hover:shadow-md transition-shadow'>
                              <div className='flex justify-between items-start mb-2'>
                                <div>
                                  <h3 className='text-xl font-semibold'>
                                    {item.title}
                                  </h3>
                                  <p className='text-sm text-gray-600 mt-1'>
                                    {item.institution}
                                  </p>
                                </div>
                                <span className='text-primary text-sm'>
                                  {item.rating}
                                </span>
                              </div>
                              <p className='text-gray-600 text-sm leading-relaxed'>
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Experience Column */}
              <div className='space-y-6'>
                <h3 className='text-2xl font-bold mb-6'>Job Experience</h3>
                <div className='p-4 md:p-8'>
                  <div className='max-w-3xl mx-auto'>
                    <div className='mb-8'>
                      <span className='text-gray-600'>
                        {educationData[0].period}
                      </span>
                    </div>
                    <div className='relative'>
                      {/* Vertical line */}
                      <div className='absolute left-2.5 top-0 h-full w-[1px] bg-gray-200' />
                      <div className='space-y-8'>
                        {educationData.map((item, index) => (
                          <div key={index} className='relative flex gap-6'>
                            {/* Circle connector */}
                            <div className='relative'>
                              <div className='w-6 h-6 rounded-full border-2 border-gray-200 bg-white z-10 relative' />
                            </div>

                            {/* Content card */}
                            <div className='flex-1 p-6 shadow-sm hover:shadow-md transition-shadow'>
                              <div className='flex justify-between items-start mb-2'>
                                <div>
                                  <h3 className='text-xl font-semibold'>
                                    {item.title}
                                  </h3>
                                  <p className='text-sm text-gray-600 mt-1'>
                                    {item.institution}
                                  </p>
                                </div>
                                <span className='text-primary text-sm'>
                                  {item.rating}
                                </span>
                              </div>
                              <p className='text-gray-600 text-sm leading-relaxed'>
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`inset-0 transition-opacity duration-300 ${
              activeTab === 'interview'
                ? 'opacity-100 relative'
                : 'opacity-0 absolute'
            }`}
          >
            {/* Content 4 */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
              {/* Education Column */}
              <div className='space-y-6'>
                <h3 className='text-2xl font-bold mb-6'>Company Experience</h3>
                <div className='p-4 md:p-8'>
                  <div className='max-w-3xl mx-auto'>
                    <div className='mb-8'>
                      <span className='text-gray-600'>
                        {educationData[0].period}
                      </span>
                    </div>
                    <div className='relative'>
                      {/* Vertical line */}
                      <div className='absolute left-2.5 top-0 h-full w-[1px] bg-gray-200' />

                      <div className='space-y-8'>
                        {educationData.map((item, index) => (
                          <div key={index} className='relative flex gap-6'>
                            {/* Circle connector */}
                            <div className='relative'>
                              <div className='w-6 h-6 rounded-full border-2 border-gray-200 bg-white z-10 relative' />
                            </div>

                            {/* Content card */}
                            <div className='flex-1 p-6 shadow-sm hover:shadow-md transition-shadow'>
                              <div className='flex justify-between items-start mb-2'>
                                <div>
                                  <h3 className='text-xl font-semibold'>
                                    {item.title}
                                  </h3>
                                  <p className='text-sm text-gray-600 mt-1'>
                                    {item.institution}
                                  </p>
                                </div>
                                <span className='text-primary text-sm'>
                                  {item.rating}
                                </span>
                              </div>
                              <p className='text-gray-600 text-sm leading-relaxed'>
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Experience Column */}
              <div className='space-y-6'>
                <h3 className='text-2xl font-bold mb-6'>Job Experience</h3>
                <div className='p-4 md:p-8'>
                  <div className='max-w-3xl mx-auto'>
                    <div className='mb-8'>
                      <span className='text-gray-600'>
                        {educationData[0].period}
                      </span>
                    </div>
                    <div className='relative'>
                      {/* Vertical line */}
                      <div className='absolute left-2.5 top-0 h-full w-[1px] bg-gray-200' />
                      <div className='space-y-8'>
                        {educationData.map((item, index) => (
                          <div key={index} className='relative flex gap-6'>
                            {/* Circle connector */}
                            <div className='relative'>
                              <div className='w-6 h-6 rounded-full border-2 border-gray-200 bg-white z-10 relative' />
                            </div>

                            {/* Content card */}
                            <div className='flex-1 p-6 shadow-sm hover:shadow-md transition-shadow'>
                              <div className='flex justify-between items-start mb-2'>
                                <div>
                                  <h3 className='text-xl font-semibold'>
                                    {item.title}
                                  </h3>
                                  <p className='text-sm text-gray-600 mt-1'>
                                    {item.institution}
                                  </p>
                                </div>
                                <span className='text-primary text-sm'>
                                  {item.rating}
                                </span>
                              </div>
                              <p className='text-gray-600 text-sm leading-relaxed'>
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyResume
