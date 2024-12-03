import React from 'react'
import { X, Menu, Facebook, Instagram, Linkedin } from 'lucide-react'
import './HeroSection.css'

const HeroSection = () => {
    return (
        <div>
            <main className="pt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="lg:space-y-[140px] sm:space-y-[100px]">
                            <div className="space-y-[20px]">
                                <div>
                                    <h2 className="text-gray-600 text-sm tracking-wider mb-4">WELCOME TO MY WORLD</h2>
                                    <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
                                        Hi, I'm{" "}
                                        <span className="text-pink-500">S D'cruz</span>
                                    </h1>
                                    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold">
                                        a <span className="text-gray-800">Professional Coder.</span>
                                    </h2>
                                </div>
                                <div>
                                    <p className="text-gray-600 max-w-2xl leading-7">
                                        I use animation as a third dimension by which to simplify experiences and
                                        guiding through each and every interaction. I'm not adding motion just to
                                        spruce things up, but doing it in ways that.
                                    </p>
                                </div>
                            </div>


                            <div className='flex items-center gap-[50px]'>
                                {/* Social Links */}
                                <div className="space-y-4">
                                    <h3 className="text-sm font-medium text-gray-900">FIND WITH ME</h3>
                                    <div className="flex space-x-4">
                                        <a href="#" className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                            <Facebook className="h-5 w-5 text-gray-600" />
                                        </a>
                                        <a href="#" className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                            <Instagram className="h-5 w-5 text-gray-600" />
                                        </a>
                                        <a href="#" className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                            <Linkedin className="h-5 w-5 text-gray-600" />
                                        </a>
                                    </div>
                                </div>

                                {/* Skills */}
                                <div className="space-y-4">
                                    <h3 className="text-sm font-medium text-gray-900">BEST SKILL ON</h3>
                                    <div className="flex space-x-4">
                                        {["sketch", "figma", "photoshop"].map((skill) => (
                                            <a
                                                key={skill}
                                                href="#"
                                                className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                            >
                                                <div className="w-6 h-6 bg-gray-300 rounded" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative  h-[400px] sm:h-[500px] lg:h-[600px]">
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/024/095/208/large_2x/happy-young-man-smiling-free-png.png"
                                alt="Professional portrait"
                                className="absolute inset-0 w-full h-full object-fit rounded-2xl primarysShadow"
                            />
                        </div>
                    </div>
                </div>

                {/* Side Text */}
                <div className="fixed right-0 top-1/2 -translate-y-1/2 hidden lg:block">
                    <div className="vertical-text transform rotate-90 text-pink-500 tracking-widest text-sm">
                        DEMOS
                    </div>
                </div>
            </main>
        </div>
    )
}

export default HeroSection