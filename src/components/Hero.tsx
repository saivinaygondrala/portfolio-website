'use client'

import { useEffect, useState } from 'react'
import { portfolioConfig } from '@/config/portfolio'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [showScrollArrow, setShowScrollArrow] = useState(true)
  const [isArrowPointingUp, setIsArrowPointingUp] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Show arrow when at top (pointing down) or near bottom (pointing up)
      const isAtTop = scrollTop < windowHeight * 0.3
      const isNearBottom = scrollTop + windowHeight >= documentHeight - 100
      
      setShowScrollArrow(isAtTop || isNearBottom)
      setIsArrowPointingUp(isNearBottom)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="section-padding text-center relative z-10 animate-fade-in">
        <div className="mb-8">
          {/* Profile Image */}
          <div className="mb-8 animate-slide-up">
            <div className="relative mx-auto w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative w-full h-full bg-gray-800 rounded-full border-4 border-gray-700 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img
                  src={portfolioConfig.personal.profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to a placeholder if image doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-4xl md:text-5xl lg:text-6xl">👤</div>
                </div>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-up" style={{animationDelay: '0.1s'}}>
            Hi, I'm <span className="gradient-text">{portfolioConfig.personal.name}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
            {portfolioConfig.personal.title}
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 animate-slide-up" style={{animationDelay: '0.4s'}}>
            {portfolioConfig.personal.bio}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{animationDelay: '0.6s'}}>
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </button>
          <a 
            href={portfolioConfig.resume.url}
            target={portfolioConfig.resume.external ? "_blank" : "_self"}
            rel={portfolioConfig.resume.external ? "noopener noreferrer" : undefined}
            download={portfolioConfig.resume.external ? undefined : portfolioConfig.resume.filename}
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg font-semibold hover:from-green-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 text-center flex items-center justify-center"
          >
            {portfolioConfig.resume.external ? (
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            ) : (
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            )}
            {portfolioConfig.resume.external ? "View Resume" : "Download Resume"}
          </a>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-gray-600 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>
        
        {/* Dynamic scroll indicator */}
        {showScrollArrow && (
          <button 
            onClick={() => {
              if (isArrowPointingUp) {
                // Scroll to top
                window.scrollTo({ top: 0, behavior: 'smooth' })
              } else {
                // Scroll to about section
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="fixed bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce z-10 transition-all duration-300 hover:scale-110 focus:outline-none"
          >
            <svg 
              className={`w-6 h-6 text-gray-400 hover:text-blue-400 transition-all duration-300 ${
                isArrowPointingUp ? 'rotate-180' : ''
              }`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        )}
      </div>
    </section>
  )
}