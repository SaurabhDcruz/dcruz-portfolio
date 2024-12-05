import React, { useState } from 'react'
import Steps from '../../Components/Steps/Steps'
import ProfessionalSkill from './ProfessionalSkills/ProfessionalSkill'

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
        <div className='text-center mb-12 space-y-4'>
          <div>
            <p className='text-primary text-sm uppercase letterWordSpacing mb-2'>
              7+ YEARS OF EXPERIENCE
            </p>
          </div>
          <div>
            <h2 className='xs:text-[26px] sm:text-[34px] lg:text-[60px] font-bold leading-[1.2] text-[#3c3e41]  mb-11 mb'>
              My Resume
            </h2>
          </div>
        </div>

        {/* Tabs */}
        <div className='grid lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 justify-center mb-12 bg-gradient-box-w shadow-white-3 rounded-lg'>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-7 text-[16px] font-medium transition-all duration-500 
                  ${
                    activeTab === tab.id
                      ? 'bg-gradient-box-w text-primary shadow-white-3 rounded-lg'
                      : 'text-gray-600 hover:bg-gradient-box-w hover:shadow-white-3 hover:text-primary rounded-lg'
                  }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Stepper */}
        <div className='space-y-10'>
          <div className='relative'>
            <div
              className={`inset-0 transition-opacity duration-300 ${
                activeTab === 'education'
                  ? 'opacity-100 relative'
                  : 'opacity-0 absolute'
              }`}
            >
              {/* Content 1 */}
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                {/* Education Column */}
                <div className='space-6'>
                  <div className='md:px-5 xs:px-0 xs:pr-[10px]'>
                    <h3 className='text-2xl font-bold'>Education Quality</h3>
                    <div className='max-w-3xl mx-auto'>
                      <div className='mb-8'>
                        <span className='text-gray-600'>
                          {educationData[0].period}
                        </span>
                      </div>
                      <Steps data={educationData} />
                    </div>
                  </div>
                </div>
                {/* Experience Column */}
                <div className='space-6'>
                  <div className='md:px-5 xs:px-0 xs:pr-[10px]'>
                    <h3 className='text-2xl font-bold'>Job Experience</h3>
                    <div className='max-w-3xl mx-auto'>
                      <div className='mb-8'>
                        <span className='text-gray-600'>
                          {educationData[0].period}
                        </span>
                      </div>
                      <Steps data={educationData} />
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
              <ProfessionalSkill />
            </div>

            <div
              className={`inset-0 transition-opacity duration-300 ${
                activeTab === 'experience'
                  ? 'opacity-100 relative'
                  : 'opacity-0 absolute'
              }`}
            >
              {/* Content 3 */}
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                {/* Education Column */}
                <div className='space-6'>
                  <div className='md:px-5 xs:px-0 xs:pr-[10px]'>
                    <h3 className='text-2xl font-bold'>Education Quality</h3>
                    <div className='max-w-3xl mx-auto'>
                      <div className='mb-8'>
                        <span className='text-gray-600'>
                          {educationData[0].period}
                        </span>
                      </div>
                      <Steps data={educationData} />
                    </div>
                  </div>
                </div>
                {/* Experience Column */}
                <div className='space-6'>
                  <div className='md:px-5 xs:px-0 xs:pr-[10px]'>
                    <h3 className='text-2xl font-bold'>Job Experience</h3>
                    <div className='max-w-3xl mx-auto'>
                      <div className='mb-8'>
                        <span className='text-gray-600'>
                          {educationData[0].period}
                        </span>
                      </div>
                      <Steps data={educationData} />
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
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                {/* Education Column */}
                <div className='space-6'>
                  <div className='md:px-5 xs:px-0 xs:pr-[10px] '>
                    <h3 className='text-2xl font-bold'>Company Experience</h3>
                    <div className='max-w-3xl mx-auto'>
                      <div className='mb-8'>
                        <span className='text-gray-600'>
                          {educationData[0].period}
                        </span>
                      </div>
                      <Steps data={educationData} />
                    </div>
                  </div>
                </div>
                {/* Experience Column */}
                <div className='space-6'>
                  <div className='md:px-5 xs:px-0 xs:pr-[10px] '>
                    <h3 className='text-2xl font-bold'>Job Experience</h3>
                    <div className='max-w-3xl mx-auto'>
                      <div className='mb-8'>
                        <span className='text-gray-600'>
                          {educationData[0].period}
                        </span>
                      </div>
                      <Steps data={educationData} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 '>
              {steps.map((step, index) => (
                <div
                  key={index}
                  className='bg-white p-6 rounded-lg shadow-white-3 bg-gradient-box-w hover:bg-gradient-box-primary hover:text-white group transition-all duration-300 ease-in-out'
                >
                  <div>
                    <div className='flex items-center mb-4'>
                      <span className='text-3xl font-bold mr-2 text-primary group-hover:text-white transition-all duration-300 ease-in-out'>
                        {step.number}
                      </span>
                      <h3 className='text-xl font-semibold'>{step.title}</h3>
                    </div>
                    <p className='text-sm text-gray-600 group-hover:text-white/90 transition-all duration-300 ease-in-out'>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyResume
