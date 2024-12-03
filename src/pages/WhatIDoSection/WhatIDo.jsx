import React from 'react'

const WhatIDo = () => {
    const services = [
        {
          icon: "≡",
          title: "Business Strategy",
          description: "When you need team setting the first priority to each individual as they have to prepare.",
        },
        {
          icon: "⊞",
          title: "App Development",
          description: "A web application is a software 250,000 users, customers as to capable of to more services.",
        },
        {
          icon: "▢",
          title: "App Development",
          description: "When you need team setting the first priority to each individual as like down to the area.",
        },
        {
          icon: "⊡",
          title: "Mobile App",
          description: "Professional mobile app development capabilities for the mobile.",
        },
        {
          icon: "◎",
          title: "CEO Marketing",
          description: "Mobile Marketing capabilities included social media marketing, community media etc.",
        },
        {
          icon: "⚙",
          title: "Personal Portfolio April",
          description: "A web application is a software 250,000 users, customers as to capable of to model services.",
        },
      ]
    
      const portfolio = [
        {
          image: "https://kzmnzbxuxao12h02wyfq.lite.vusercontent.net/placeholder.svg?height=400&width=600",
          title: "The services provide for design",
          category: "Design",
        },
        {
          image: "https://kzmnzbxuxao12h02wyfq.lite.vusercontent.net/placeholder.svg?height=400&width=600",
          title: "Mobile app landing design & app maintain",
          category: "Development",
        },
        {
          image: "https://kzmnzbxuxao12h02wyfq.lite.vusercontent.net/placeholder.svg?height=400&width=600",
          title: "Logo design creativity & Application",
          category: "Creative",
        },
        {
          image: "https://kzmnzbxuxao12h02wyfq.lite.vusercontent.net/placeholder.svg?height=400&width=600",
          title: "Mobile app landing design & Services",
          category: "Design",
        },
        {
          image: "https://kzmnzbxuxao12h02wyfq.lite.vusercontent.net/placeholder.svg?height=400&width=600",
          title: "Design for technology & services",
          category: "Development",
        },
        {
          image: "https://kzmnzbxuxao12h02wyfq.lite.vusercontent.net/placeholder.svg?height=400&width=600",
          title: "App for technology & services",
          category: "Creative",
        },
      ]
    
      return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
          <section className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">What I Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="text-3xl mb-4 text-red-500">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </section>
    
          <section className="max-w-7xl mx-auto mt-20">
            <div className="text-center mb-12">
              <p className="text-red-500 text-sm uppercase tracking-wider mb-2">
                VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
              </p>
              <h2 className="text-3xl font-bold">My Portfolio</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolio.map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-red-500 text-sm">{item.category}</span>
                    <h3 className="font-semibold mt-1 group-hover:text-red-500 transition-colors duration-300">
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