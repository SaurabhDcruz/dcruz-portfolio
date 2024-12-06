import { useState, useEffect, React } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import './Slider.css'
const testimonials = [
  {
    id: 1,
    name: 'Nevine Acotanza',
    title: 'Chief Operating Officer',
    company: 'RAINBOW-THEMES',
    project: 'Android App Development',
    date: 'via Upwork - Mar 4, 2015 - Aug 30, 2021',
    image:
      'https://rainbowit.net/html/inbio/assets/images/testimonial/final-home--1st.png',
    content:
      'Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris mauris hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris .'
  },
  {
    id: 2,
    name: 'Burner Lee',
    title: 'Chief Operating Officer',
    company: 'RAINBOW-THEMES',
    project: 'Android App Development',
    date: 'via Upwork - Mar 4, 2015 - Aug 30, 2021',
    image:
      'https://rainbowit.net/html/inbio/assets/images/testimonial/final-home--2nd.png',
    content:
      'Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris mauris hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris .'
  },
  {
    id: 3,
    name: 'Jhonn Corner',
    title: 'Chief Officer US',
    company: 'RAINBOW-THEMES',
    project: 'Commander of US Miletry',
    date: 'via Defence Academy - Mar 4, 2015 - Aug 30, 2021',
    image:
      'https://rainbowit.net/html/inbio/assets/images/testimonial/final-home--3rd.png',
    content:
      'Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris mauris hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris .'
  }
  // Add more testimonials as needed
]

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentSlide(prev => (prev + 1) % testimonials.length)
    }
  }

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentSlide(
        prev => (prev - 1 + testimonials.length) % testimonials.length
      )
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false)
    }, 500) // Match this with the transition duration

    return () => clearTimeout(timer)
  }, [currentSlide])

  return (
    <div className='relative overflow-hidden py-2 '>
      <div
        className='flex transition-transform duration-500 ease-in-out'
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className='w-full flex-shrink-0 justify-center'
          >
            <div className='grid lg:grid-cols-[1fr,1.5fr] gap-10 items-end xs:p-5 sm:p-5 lg:p-9'>
              {/* Profile Card */}
              <div
                key={index}
                className='group z-10 relative bg-gradient-box-w shadow-white-3 rounded-lg overflow-hidden  transition-shadow duration-300'
              >
                <div className='p-7 md:flex md:gap-6 md:items-end lg:block'>
                  <div className='overflow-hidden rounded-lg'>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className='object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-110'
                    />
                  </div>
                  <div className='space-y-2 text-center md:text-left lg:mt-4'>
                    <span className='text-primary text-sm font-medium'>
                      {testimonial.company}
                    </span>
                    <h3 className='text-xl font-bold text-gray-800'>
                      {testimonial.name}
                    </h3>
                    <p className='text-gray-600'>{testimonial.title}</p>
                  </div>
                </div>
              </div>
              <span className='absolute w-40 h-1 bg-gray-200 transform translate-x-[290px] -translate-y-44 z-0 md:hidden lg:block'></span>
              {/* Content Card */}
              <div className='z-10 rounded-lg shadow-white-3 bg-gradient-box-w w-[100%] p-6 md:p-8 relative '>
                <div className='absolute -left-3 -top-24 md:hidden text-gray-200 hidden lg:block'>
                  <svg
                    width='70'
                    height='70'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                  >
                    <path d='M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z' />
                  </svg>
                </div>
                <div className='space-y-4'>
                  <h4 className='md:text-xl font-[400] text-gray-800'>
                    {testimonial.project}
                  </h4>
                  <div className='absolute right-7 top-8 flex gap-0.5 p-3 shadow-white-3 rounded-md bg-gradient-box-w'>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className='w-4 h-4 fill-yellow-400 text-yellow-400'
                      />
                    ))}
                  </div>
                  <p className='text-sm text-gray-500'>{testimonial.date}</p>
                  <hr />
                  <p className='text-gray-600 leading-relaxed md:text-[15px] lg:text-base'>
                    {testimonial.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className='absolute -top-1 md:top-0 lg:-top-1 lg:right-6 md:right-7 hidden md:block'>
        <div className='flex justify-center mt-8 gap-4'>
          <button
            onClick={prevSlide}
            className='p-4 md:p-1 lg:p-4 rounded-lg bg-gradient-box-w hover:bg-gradient-red-hover shadow-white-3 group transition-colors'
            aria-label='Previous testimonial'
            disabled={isAnimating}
          >
            <ChevronLeft className='w-6 h-6 text-primary group-hover:text-white duration-200' />
          </button>
          <button
            onClick={nextSlide}
            className='p-4 md:p-1 lg:p-4 rounded-lg bg-gradient-box-w hover:bg-gradient-red-hover shadow-white-3 group transition-colors'
            aria-label='Next testimonial'
            disabled={isAnimating}
          >
            <ChevronRight className='w-6 h-6 text-primary group-hover:text-white duration-200' />
          </button>
        </div>
      </div>
      {/* Pagination Dots */}
      <div className='flex justify-center gap-2 mt-6'>
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => !isAnimating && setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-primary' : 'bg-gray-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
            disabled={isAnimating}
          />
        ))}
      </div>
    </div>
  )
}

export default Slider
