import { portfolioConfig } from '@/config/portfolio'

/**
 * About Section Component
 * 
 * Displays personal information, bio, skills, and education
 * Sections are conditionally rendered based on available data:
 * - Summary stats (only if summary data exists)
 * - Education (only if education array has items)
 * - Skills (grouped by category, only shows categories with skills)
 * - What I Do section (customizable based on your expertise)
 */
export default function About() {
  // Check if we have any content to display
  const hasSkills = portfolioConfig.skills && portfolioConfig.skills.length > 0;
  const hasEducation = portfolioConfig.education && portfolioConfig.education.length > 0;
  const hasSummary = portfolioConfig.summary && portfolioConfig.summary.yearsOfExperience;

  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Personal Information */}
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Who I Am</h3>
              <div className="space-y-4 text-gray-300">
                {/* Personal Bio */}
                {portfolioConfig.personal.bio && (
                  <p>{portfolioConfig.personal.bio}</p>
                )}
                
                {/* Professional Summary - Only show if data exists */}
                {hasSummary && (
                  <p>
                    With {portfolioConfig.summary.yearsOfExperience} years of professional experience, 
                    I've completed {portfolioConfig.summary.projectsCompleted} projects and developed expertise in {portfolioConfig.summary.skillsAreas} areas.
                    {portfolioConfig.summary.industryFocus && portfolioConfig.summary.industryFocus.length > 0 && (
                      <> I specialize in {portfolioConfig.summary.industryFocus.join(", ")} sectors.</>
                    )}
                  </p>
                )}
              </div>
              
              {/* What I Do Section - This is optional and can be customized for any field */}
              {/* Remove this entire section if you don't want it, or customize the items below */}
              {/* Examples for different fields:
                  - Developer: "Web Development", "API Design", "Database Design"
                  - Designer: "Brand Design", "User Experience", "Visual Identity"  
                  - Writer: "Content Creation", "Copy Writing", "Editing & Proofreading"
                  - Artist: "Digital Illustration", "Portrait Art", "Commission Work"
                  - Musician: "Music Composition", "Live Performance", "Audio Production"
              */}
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4 text-purple-400">What I Do</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    Professional Service 1
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    Professional Service 2
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    Professional Service 3
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    Professional Service 4
                  </li>
                </ul>
              </div>

              {/* Education Section - Only show if education data exists */}
              {hasEducation && (
                <div className="mt-8">
                  <h4 className="text-xl font-semibold mb-4 text-purple-400">Education</h4>
                  <div className="space-y-4">
                    {portfolioConfig.education.map((edu, index) => (
                      <div key={index} className="text-gray-300">
                        <p className="font-medium">{edu.degree} in {edu.field}</p>
                        <p className="text-gray-400">{edu.institution} • {edu.duration}</p>
                        {edu.cgpa && <p className="text-gray-400">CGPA: {edu.cgpa}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Right Column - Skills & Technologies */}
            {hasSkills && (
              <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
                <h3 className="text-2xl font-semibold mb-6 text-blue-400">Skills & Expertise</h3>
                
                {/* Dynamically group skills by category - works with ANY category names */}
                {(() => {
                  // Get all unique categories from the skills array
                  const uniqueCategories = [...new Set(portfolioConfig.skills.map(skill => skill.category))];
                  
                  return uniqueCategories.map((category) => {
                    const categorySkills = portfolioConfig.skills.filter(skill => skill.category === category);
                    
                    return (
                      <div key={category} className="mb-6">
                        <h4 className="text-lg font-semibold mb-3 text-purple-400">{category}</h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                          {categorySkills.map((skill, index) => (
                            <div 
                              key={skill.name} 
                              className="flex items-center bg-gray-700/30 rounded-lg p-3 hover:bg-gray-700/50 transition-colors duration-200 animate-slide-up"
                              style={{animationDelay: `${index * 0.1}s`}}
                            >
                              {/* Icon - supports FontAwesome classes, emojis, or any text */}
                              {skill.icon.includes('fa-') ? (
                                <i className={`${skill.icon} text-xl mr-2 text-blue-400`}></i>
                              ) : (
                                <span className="text-xl mr-2">{skill.icon}</span>
                              )}
                              <span className="text-sm text-gray-300 font-medium">{skill.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  });
                })()}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}