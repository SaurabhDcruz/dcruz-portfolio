import React from 'react'

function ClockIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    )
  }

const Blogs = () => {
    const posts = [
        {
          image: "https://rainbowit.net/html/inbio/assets/images/blog/blog-01.jpg",
          category: "CANADA",
          readTime: "2 min read",
          title: "T-shirt design is the part of design",
        },
        {
          image: "https://rainbowit.net/html/inbio/assets/images/blog/blog-02.jpg",
          category: "DEVELOPMENT",
          readTime: "2 hour read",
          title: "The services provide for design",
        },
        {
          image: "https://rainbowit.net/html/inbio/assets/images/blog/blog-03.jpg",
          category: "APPLICATION",
          readTime: "5 min read",
          title: "Mobile app landing design & app maintain",
        },
      ]
    
      return (
        <div className="max-w-7xl min-h-[720px] mx-auto px-4 py-6">
          <div className="text-center mb-16">
            <p className='font-[400] text-sm uppercase text-primary letterWordSpacing'>
              VISIT MY BLOG AND KEEP YOUR FEEDBACK
            </p>
            <h1 className='xs:text-[26px] sm:text-[34px] lg:text-[60px] font-bold leading-[1.2] my-0 text-[#3c3e41]'>My Blog</h1>
          </div>
    
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-1">
            {posts.map((post, index) => (
              <div
                key={index}
                className="bg-gradient-box-w rounded-3xl shadow-lg overflow-hidden transition-transform duration-500 hover:translate-y-[-4px]"
              >
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-[240px] object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-primary font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm flex items-center gap-1">
                      <ClockIcon className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-800 leading-tight">
                    {post.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
}

export default Blogs

  
  