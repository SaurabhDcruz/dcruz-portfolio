import React from 'react'

const ClientShowcase = () => {
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
    <div className='max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8'>
      <div className='space-y-4'>
        <p className='font-[400] text-sm uppercase text-primary letterWordSpacing'>
          POPULAR CLIENTS
        </p>
        <h2 className='text-[60px] font-bold leading-[1.2] text-[#3c3e41] mt-7 mb-11 mb'>
          Awesome Clients
        </h2>
        <div className='grid md:grid-rows-3 sm:grid-rows-1 grid-flow-col gap-4'>
          {/* Skills Card */}
          <div className='col-span-full md!col-span-1 md:sticky md:top-[80px]'>
            <div className='bg-white rounded-lg shadow-lg p-8 space-y-4'>
              {clients[0].skills.map((skill, index) => (
                <div key={index} className='text-gray-600'>
                  {skill}
                </div>
              ))}
            </div>
          </div>
          {/* Client Cards */}
          <div className='row-span-3 col-span-full md:col-span-3'>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8'>
              {clients.slice(1).map((client, index) => (
                <div
                  key={index}
                  className='bg-white rounded-lg shadow-lg p-8 flex flex-col items-center justify-center space-y-4 transition-transform hover:scale-105'
                >
                  <div className='w-40 h-20 flex items-center justify-center'>
                    <img
                      src={client.logo}
                      alt={`${client.name}'s logo`}
                      className='max-w-full max-h-full object-contain'
                    />
                  </div>
                  <p className='text-gray-600 text-center'>{client.name}</p>
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
