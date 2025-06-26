'use client'

import { useState, useEffect } from 'react'
import { portfolioConfig } from '@/config/portfolio'
import Logo from './Logo'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false) // Close mobile menu after clicking
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="section-padding py-4">
        <div className="flex justify-between items-center">
          {/* Logo with Initials */}
          <div className="flex items-center space-x-3">
            <Logo size={40} />
            <div className="text-xl font-bold gradient-text">
              {portfolioConfig.personal.name}
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {['Home', 'About', 'Experience', 'Publications', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-blue-400 transition-colors duration-200"
              >
                {item}
              </button>
            ))}
            <a 
              href={portfolioConfig.resume.url}
              target={portfolioConfig.resume.external ? "_blank" : "_self"}
              rel={portfolioConfig.resume.external ? "noopener noreferrer" : undefined}
              download={portfolioConfig.resume.external ? undefined : portfolioConfig.resume.filename}
              className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg font-medium hover:from-green-600 hover:to-teal-700 transition-all duration-300 text-sm flex items-center"
            >
              {portfolioConfig.resume.external ? (
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              ) : (
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              )}
              {portfolioConfig.resume.external ? "View Resume" : "Download Resume"}
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-50 relative"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg 
              className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-sm transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <div className="section-padding py-4 space-y-4">
            {['Home', 'About', 'Experience', 'Publications', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-2 hover:text-blue-400 transition-colors duration-200"
              >
                {item}
              </button>
            ))}
            <a 
              href={portfolioConfig.resume.url}
              target={portfolioConfig.resume.external ? "_blank" : "_self"}
              rel={portfolioConfig.resume.external ? "noopener noreferrer" : undefined}
              download={portfolioConfig.resume.external ? undefined : portfolioConfig.resume.filename}
              className="block w-full text-left py-2 text-green-400 hover:text-green-300 transition-colors duration-200 flex items-center"
            >
              {portfolioConfig.resume.external ? (
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              ) : (
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              )}
              {portfolioConfig.resume.external ? "View Resume" : "Download Resume"}
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}