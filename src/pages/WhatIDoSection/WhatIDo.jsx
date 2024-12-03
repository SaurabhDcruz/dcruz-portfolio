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
          icon: "▢",
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
           <h4 className="font-[400] text-sm uppercase text-primary">Features</h4>
            <h2 className="text-[60px] font-bold leading-[1.2] text-[#3c3e41] mt-[15px] mb-0">What I Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-transparent h-240px] w-[409px] p-6 rounded-lg primarysShadow transition-shadow duration-300"
                >
                  <div className="text-[35px] text-primary">{service.icon}</div>
                  <h3 className="text-xl font-semibold my-4">{service.title}</h3>
                  <p className="text-gray-600 text-base leading-7 mb-[20px] transition">{service.description}</p>
                </div>
              ))}
            </div>
          </section>
    
          <section className="max-w-7xl mx-auto mt-20">
            <div className="text-center mb-12">
              <p className="text-primary text-sm uppercase tracking-wider mb-2">
                VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
              </p>
            <h2 className="text-[60px] font-bold leading-[1.2] text-[#3c3e41] mt-[15px] mb-0">My Portfolio</h2>
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
                    <span className="text-primary text-sm">{item.category}</span>
                    <h3 className="font-semibold mt-1 group-hover:text-primary-500 transition-colors duration-300">
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