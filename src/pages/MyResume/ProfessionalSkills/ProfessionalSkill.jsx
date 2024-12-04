import { useEffect, useRef, useState, React } from 'react'

const ProfessionalSkill = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const designSkills = [
    { name: 'PHOTOSHOP', percentage: 100 },
    { name: 'FIGMA', percentage: 95 },
    { name: 'ADOBE XD', percentage: 60 },
    { name: 'ADOBE ILLUSTRATOR', percentage: 70 },
    { name: 'DESIGN', percentage: 90 }
  ]

  const developmentSkills = [
    { name: 'HTML', percentage: 90 },
    { name: 'CSS', percentage: 80 },
    { name: 'JAVASCRIPT', percentage: 90 },
    { name: 'SOFTWARE', percentage: 75 },
    { name: 'PLUGIN', percentage: 70 }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div ref={sectionRef} className='w-full max-w-7xl mx-auto px-4 py-16'>
      <div className='grid md:grid-cols-2 gap-8'>
        {/* Design Skills */}
        <div className='space-y-6'>
          <h2 className='text-primary text-sm font-medium tracking-wider uppercase'>
            Features
          </h2>
          <h3 className='text-3xl font-bold text-gray-900 mb-8'>
            Design Skill
          </h3>
          <div className='space-y-8'>
            {designSkills.map(skill => (
              <div key={skill.name} className='space-y-2'>
                <div className='flex justify-between text-sm'>
                  <span className='font-medium text-gray-700'>
                    {skill.name}
                  </span>
                  <span className='text-gray-500'>{skill.percentage}%</span>
                </div>
                <div className='h-2 bg-gray-200 rounded-full overflow-hidden'>
                  <div
                    className={`h-full rounded-full border border-s-2 transition-all duration-1000 ease-out ${
                      isVisible ? 'w-full' : 'w-0'
                    }`}
                    style={{
                      width: `${skill.percentage}%`,
                      background: 'linear-gradient(to right, #fff, #ff4500)'
                    }}
                  >
                    {' '}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Development Skills */}
        <div className='space-y-6'>
          <h2 className='text-primary text-sm font-medium tracking-wider uppercase'>
            Features
          </h2>
          <h3 className='text-3xl font-bold text-gray-900 mb-8'>
            Development Skill
          </h3>
          <div className='space-y-8'>
            {developmentSkills.map(skill => (
              <div key={skill.name} className='space-y-2'>
                <div className='flex justify-between text-sm'>
                  <span className='font-medium text-gray-700'>
                    {skill.name}
                  </span>
                  <span className='text-gray-500'>{skill.percentage}%</span>
                </div>
                <div className='h-2 bg-gray-200 rounded-full overflow-hidden'>
                  <div
                    className={`h-full rounded-full border border-s-2 transition-all duration-1000 ease-out ${
                      isVisible ? 'w-full' : 'w-0'
                    }`}
                    style={{
                      width: `${skill.percentage}%`,
                      background:  'linear-gradient(to right, #fff, #ff4500)'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfessionalSkill
