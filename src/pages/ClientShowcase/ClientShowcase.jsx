import React, { useState } from 'react'

const ClientShowcase = () => {
  const [activeTab, setActiveTab] = useState(0)
  const clients = [
    {
      skills: [
        'JavaScript',
        'Product Design',
        'Wordpress',
        'HTML to React',
        'React To Laravel',
        'Python'
      ]
    },
    {
      logo: 'https://rainbowit.net/html/inbio/assets/images/client/png/brand-01.png',
      name: 'John Due'
    },
    {
      logo: 'https://rainbowit.net/html/inbio/assets/images/client/png/brand-02.png',
      name: 'Smiths Marth'
    },
    {
      logo: 'https://rainbowit.net/html/inbio/assets/images/client/png/brand-03.png',
      name: 'Add Dev'
    },
    {
      logo: 'https://rainbowit.net/html/inbio/assets/images/client/png/brand-04.png',
      name: 'Jone Due'
    },
    {
      logo: 'https://rainbowit.net/html/inbio/assets/images/client/png/brand-01.png',
      name: 'John Due'
    },
    {
      logo: 'https://rainbowit.net/html/inbio/assets/images/client/png/brand-05.png',
      name: 'Adon Smith'
    },
    {
      logo: 'https://rainbowit.net/html/inbio/assets/images/client/png/brand-05.png',
      name: 'Smitha Mila'
    },
    {
      logo: 'https://rainbowit.net/html/inbio/assets/images/client/png/brand-03.png',
      name: 'Sultana Mila'
    },
    {
      logo: 'https://rainbowit.net/html/inbio/assets/images/client/png/brand-01.png',
      name: 'Jannat'
    }
  ]

  return (
    <div className='max-w-7xl mx-auto p-4 sm:px-6 lg:px-8'>
      <div className='space-y-4'>
        <p className='font-[400] text-sm uppercase text-primary letterWordSpacing'>
          POPULAR CLIENTS
        </p>
        <h2 className='xs:text-[26px] sm:text-[34px] lg:text-[60px] font-bold leading-[1.2] my-0 text-[#3c3e41] '>
          Awesome Clients
        </h2>
        <div className='grid md:grid-rows-3 sm:grid-rows-1 grid-flow-col gap-12 xs:p-8 sm:p-7 md:p-0'>
          {/* Skills Card */}
          <div className='col-span-full lg:col-span-1 xl:sticky md:top-[80px]'>
            <div className='bg-gradient-box-w rounded-lg shadow-lg text-center p-1 '>
              {clients[0].skills.map((skill, index) => (
                <div
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`${
                    activeTab == index &&
                    'bg-gradient-box-w text-primary shadow-white-3 '
                  } px-4 py-7 cursor-pointer transition-all duration-300 hover:text-primary hover:bg-gradient-box-w hover:shadow-shadow-gray rounded-lg text-gray-600 text-lg m-1`}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
          {/* Client Cards */}
          <div className='row-span-3 col-span-full md:col-span-1 '>
            <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8'>
              {clients.slice(1).map((client, index) => (
                <div
                  key={index}
                  className='bg-gradient-box-w rounded-lg shadow-white-3  flex flex-col items-center justify-center '
                >
                  <div className='w-40 h-[150px] flex items-center justify-center p-[30px]'>
                    <img
                      src={client.logo}
                      alt={`${client.name}'s logo`}
                      className='max-w-full max-h-full'
                    />
                  </div>
                  <hr className='w-full'/>
                  <p className='text-gray-600 text-center p-3 '>{client.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientShowcase
