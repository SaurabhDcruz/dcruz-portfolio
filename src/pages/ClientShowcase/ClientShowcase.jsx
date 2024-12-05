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
      logo: 'https://kzmjdwztyg63kv6kteet.lite.vusercontent.net/placeholder.svg?height=80&width=150',
      name: 'John Due'
    },
    {
      logo: 'https://kzmjdwztyg63kv6kteet.lite.vusercontent.net/placeholder.svg?height=80&width=150',
      name: 'Smiths Marth'
    },
    {
      logo: 'https://kzmjdwztyg63kv6kteet.lite.vusercontent.net/placeholder.svg?height=80&width=150',
      name: 'Add Dev'
    },
    {
      logo: 'https://kzmjdwztyg63kv6kteet.lite.vusercontent.net/placeholder.svg?height=80&width=150',
      name: 'Jone Due'
    },
    {
      logo: 'https://kzmjdwztyg63kv6kteet.lite.vusercontent.net/placeholder.svg?height=80&width=150',
      name: 'John Due'
    },
    {
      logo: 'https://kzmjdwztyg63kv6kteet.lite.vusercontent.net/placeholder.svg?height=80&width=150',
      name: 'Adon Smith'
    },
    {
      logo: 'https://kzmjdwztyg63kv6kteet.lite.vusercontent.net/placeholder.svg?height=80&width=150',
      name: 'Smitha Mila'
    },
    {
      logo: 'https://kzmjdwztyg63kv6kteet.lite.vusercontent.net/placeholder.svg?height=80&width=150',
      name: 'Sultana Mila'
    },
    {
      logo: 'https://kzmjdwztyg63kv6kteet.lite.vusercontent.net/placeholder.svg?height=80&width=150',
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
        <div className='grid md:grid-rows-3 sm:grid-rows-1 grid-flow-col gap-4 xs:p-8 sm:p-7 md:p-0'>
          {/* Skills Card */}
          <div className='col-span-full lg:col-span-1 xl:sticky md:top-[80px]'>
            <div className='bg-gradient-box-w rounded-lg shadow-lg text-center  '>
              {clients[0].skills.map((skill, index) => (
                <div
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`${
                    activeTab == index &&
                    'bg-gradient-box-w text-primary shadow-white-3 '
                  }text-gray-600 px-4 py-5 cursor-pointer transition-all duration-300 hover:text-primary hover:bg-gradient-box-w hover:shadow-shadow-gray rounded-lg`}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
          {/* Client Cards */}
          <div className='row-span-3 col-span-full md:col-span-3 '>
            <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5'>
              {clients.slice(1).map((client, index) => (
                <div
                  key={index}
                  className='bg-gradient-box-w rounded-lg shadow-white-3  flex flex-col items-center justify-center space-y-4'
                >
                  <div className='w-40 h-20 flex items-center justify-center'>
                    <img
                      src={client.logo}
                      alt={`${client.name}'s logo`}
                      className='max-w-full max-h-full object-contain'
                    />
                  </div>
                  <hr className='w-full'/>
                  <p className='text-gray-600 text-center p-1 '>{client.name}</p>
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
