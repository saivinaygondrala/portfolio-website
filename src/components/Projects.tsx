import { portfolioConfig } from '@/config/portfolio'

export default function Projects() {
  const featuredProjects = portfolioConfig.projects.filter(p => p.featured)
  const otherProjects = portfolioConfig.projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-20">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Featured Projects</h2>
          
          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-blue-400">Featured Work</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <div key={project.title} className="bg-gray-800/50 rounded-xl overflow-hidden card-hover animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="aspect-video bg-gradient-to-br from-blue-900/20 to-purple-900/20 flex items-center justify-center">
                    <div className="text-6xl opacity-20">🚀</div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-3 text-white">{project.title}</h4>
                    <p className="text-gray-300 mb-4 leading-relaxed">{project.longDescription || project.description}</p>
                    
                    {project.highlights && (
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h5>
                        <ul className="text-sm text-gray-400 space-y-1">
                          {project.highlights.slice(0, 3).map((highlight, i) => (
                            <li key={i} className="flex items-center">
                              <span className="text-green-400 mr-2 text-xs">●</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a 
                        href={project.demoUrl}
                        className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                      <a 
                        href={project.codeUrl}
                        className="flex items-center px-4 py-2 border border-gray-600 rounded-lg text-sm font-medium hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-blue-400">Other Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <div key={project.title} className="bg-gray-800/30 rounded-lg p-6 card-hover animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl">📁</div>
                    <div className="flex gap-2">
                      <a href={project.demoUrl} className="text-gray-400 hover:text-blue-400 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <a href={project.codeUrl} className="text-gray-400 hover:text-blue-400 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-white">{project.title}</h4>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map(tech => (
                      <span key={tech} className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}