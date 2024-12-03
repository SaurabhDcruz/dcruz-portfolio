import { React ,useState } from 'react'
import { X, Menu, Facebook, Instagram, Linkedin } from 'lucide-react'

const Layout = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    'HOME',
    'FEATURES',
    'PORTFOLIO',
    'RESUME',
    'CLIENTS',
    'PRICING',
    'BLOG',
    'CONTACT',
  ]
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-40 shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <div className="flex items-center gap-2">
                                    <img
                                        className="h-10 w-10 rounded-full"
                                        src="/placeholder.svg"
                                        alt="Profile"
                                    />
                                    <span className="font-bold text-xl">INBIO</span>
                                </div>
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-center space-x-4">
                                {navItems.map((item) => (
                                    <a
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors"
                                    >
                                        {item}
                                    </a>
                                ))}
                                <button className="bg-pink-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-pink-600 transition-colors shadow-md">
                                    BUY NOW
                                </button>
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(true)}
                                className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                                aria-label="Open menu"
                            >
                                <Menu className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-black/50 z-50 md:hidden" onClick={() => setIsMobileMenuOpen(false)} />
            )}

            {/* Mobile Navigation Menu */}
            <div
                className={`fixed top-0 right-0 bottom-0 w-[300px] bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="h-full flex flex-col overflow-y-auto">
                    {/* Header */}
                    <div className="p-4 flex items-start justify-between border-b">
                        <div className="flex items-center gap-4">
                            <img
                                className="h-12 w-12 rounded-full"
                                src="/placeholder.svg"
                                alt="Profile"
                            />
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 rounded-full hover:bg-gray-100 absolute right-4"
                                aria-label="Close menu"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="px-4 py-3 text-sm text-gray-600">
                        Inbio is a personal portfolio template. You can customize all.
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex-1 px-4 py-2">
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="block py-3 text-base font-medium text-gray-900 hover:text-pink-500 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    {/* Social Links */}
                    <div className="px-4 py-6 border-t">
                        <h3 className="text-sm font-semibold mb-4">FIND WITH ME</h3>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook className="h-5 w-5 text-gray-600" />
                            </a>
                            <a
                                href="#"
                                className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="h-5 w-5 text-gray-600" />
                            </a>
                            <a
                                href="#"
                                className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-5 w-5 text-gray-600" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <main className="pt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-gray-600 text-sm tracking-wider mb-4">WELCOME TO MY WORLD</h2>
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
                                    Hi, I'm{" "}
                                    <span className="text-pink-500">Jone Lee</span>
                                </h1>
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold">
                                    a <span className="text-gray-800">Professional Coder.</span>
                                </h2>
                            </div>

                            <p className="text-gray-600 max-w-2xl">
                                I use animation as a third dimension by which to simplify experiences and
                                guiding through each and every interaction. I'm not adding motion just to
                                spruce things up, but doing it in ways that.
                            </p>

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

                        {/* Right Image */}
                        <div className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
                            <img
                                src="/placeholder.svg"
                                alt="Professional portrait"
                                className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-lg"
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

export default Layout