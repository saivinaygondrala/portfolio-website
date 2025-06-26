import { portfolioConfig } from '@/config/portfolio'

export default function Publications() {
  if (!portfolioConfig.publications || portfolioConfig.publications.length === 0) {
    return null
  }

  return (
    <section id="publications" className="py-20 bg-gray-800/50">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Publications</h2>
          
          <div className="space-y-8">
            {portfolioConfig.publications.map((pub, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 card-hover animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  {/* Publication Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2 leading-tight">{pub.title}</h3>
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                            {pub.type}
                          </span>
                          <span className="text-gray-400 text-sm">{pub.year}</span>
                        </div>
                      </div>
                    </div>

                    {/* Authors */}
                    <div className="mb-3">
                      <p className="text-gray-300">
                        <span className="text-purple-400 font-medium">Authors: </span>
                        {pub.authors.join(', ')}
                      </p>
                    </div>

                    {/* Publication Venue */}
                    <div className="mb-3">
                      {pub.journal && (
                        <p className="text-gray-300">
                          <span className="text-green-400 font-medium">Journal: </span>
                          {pub.journal}
                          {pub.volume && <span className="text-gray-400"> • {pub.volume}</span>}
                          {pub.pages && <span className="text-gray-400"> • pp. {pub.pages}</span>}
                        </p>
                      )}
                      {pub.conference && (
                        <p className="text-gray-300">
                          <span className="text-green-400 font-medium">Conference: </span>
                          {pub.conference}
                          {pub.location && <span className="text-gray-400"> • {pub.location}</span>}
                          {pub.pages && <span className="text-gray-400"> • pp. {pub.pages}</span>}
                        </p>
                      )}
                    </div>

                    {/* Abstract */}
                    {pub.abstract && (
                      <div className="mb-4">
                        <p className="text-gray-400 text-sm leading-relaxed">
                          <span className="text-blue-400 font-medium">Abstract: </span>
                          {pub.abstract}
                        </p>
                      </div>
                    )}

                    {/* Keywords */}
                    {pub.keywords && pub.keywords.length > 0 && (
                      <div className="mb-4">
                        <p className="text-purple-400 font-medium text-sm mb-2">Keywords:</p>
                        <div className="flex flex-wrap gap-2">
                          {pub.keywords.map((keyword, i) => (
                            <span key={i} className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs">
                              {keyword}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Links */}
                    <div className="flex flex-wrap gap-3">
                      {pub.url && pub.url !== '#' && (
                        <a 
                          href={pub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          View Publication
                        </a>
                      )}
                      {pub.doi && (
                        <div className="flex items-center text-sm text-gray-400">
                          <span className="font-medium mr-1">DOI:</span>
                          <span className="font-mono">{pub.doi}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Publication Icon */}
                  <div className="flex-shrink-0 lg:ml-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                      <div className="text-2xl">
                        {pub.type === 'Journal Article' ? '📄' : '📚'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Publication Stats */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
              <div className="text-2xl mr-3">📊</div>
              <div>
                <div className="text-lg font-semibold text-white">
                  {portfolioConfig.publications.length} Publication{portfolioConfig.publications.length !== 1 ? 's' : ''}
                </div>
                <div className="text-sm text-gray-400">
                  Research Contributions
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}