import { portfolioConfig } from '@/config/portfolio'

/**
 * Experience Section Component
 * 
 * Displays work experience, professional stats, and certifications
 * Conditionally renders based on available data:
 * - Only shows if experience array has items
 * - Professional stats only show if summary data exists
 * - Certifications only show if certification data exists
 * - Adaptable for any profession (not just technology)
 */
export default function Experience() {
  // Check if we have experience data to display
  const hasExperience = portfolioConfig.experience && portfolioConfig.experience.length > 0;
  const hasSummary = portfolioConfig.summary && portfolioConfig.summary.yearsOfExperience;
  const hasCertifications = portfolioConfig.certifications && portfolioConfig.certifications.length > 0;

  // Don't render the section if there's no experience to show
  if (!hasExperience) {
    return null;
  }

  return (
    <section id="experience" className="py-20">
      <div className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 gradient-text">Experience</h2>
          
          {/* Professional Stats - Only show if summary data exists */}
          {hasSummary && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="text-center bg-gray-800/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-400">{portfolioConfig.summary.yearsOfExperience}</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center bg-gray-800/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-400">{portfolioConfig.summary.projectsCompleted}</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center bg-gray-800/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-purple-400">{portfolioConfig.summary.skillsAreas}</div>
                <div className="text-sm text-gray-400">Skill Areas</div>
              </div>
              <div className="text-center bg-gray-800/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-orange-400">{portfolioConfig.experience.length}</div>
                <div className="text-sm text-gray-400">Organizations</div>
              </div>
            </div>
          )}
          
          <div className="space-y-12">
            {portfolioConfig.experience.map((exp, index) => (
              <div key={index} className="relative animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                {/* Timeline line */}
                {index !== portfolioConfig.experience.length - 1 && (
                  <div className="absolute left-4 top-16 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>
                )}
                
                <div className="flex items-start space-x-6">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mt-2">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-gray-800/50 rounded-xl p-6 card-hover">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-1">{exp.position}</h3>
                        <p className="text-blue-400 font-medium text-lg">{exp.company}</p>
                        <p className="text-gray-400 text-sm mb-2">{exp.location}</p>
                      </div>
                      <div className="text-right mt-2 md:mt-0 flex-shrink-0">
                        <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30">
                          {exp.duration}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    
                    {exp.achievements && exp.achievements.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-purple-400 mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start text-gray-300">
                              <span className="text-green-400 mr-2 mt-1 text-xs">▶</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {exp.technologies && exp.technologies.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-purple-400 mb-2">Skills & Tools Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span key={tech} className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Certifications Section - Only show if certifications exist */}
          {hasCertifications && (
            <div className="mt-20">
              <h3 className="text-2xl font-bold text-center mb-8 text-blue-400">Certifications & Credentials</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {portfolioConfig.certifications.map((cert, index) => (
                  <div key={index} className="bg-gray-800/30 rounded-lg p-6 text-center animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                    <h4 className="text-lg font-semibold text-white mb-2">{cert.name}</h4>
                    <p className="text-blue-400 mb-1">{cert.issuer}</p>
                    <p className="text-gray-400 text-sm mb-2">{cert.date}</p>
                    {cert.credentialId && (
                      <p className="text-gray-500 text-xs">ID: {cert.credentialId}</p>
                    )}
                    {cert.verificationUrl && (
                      <a 
                        href={cert.verificationUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 text-xs mt-2 inline-block"
                      >
                        Verify Certificate
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}