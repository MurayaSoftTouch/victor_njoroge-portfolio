const Projects = ({ projects, achievements, darkMode = true }) => {
  const featuredProjects = projects?.filter((p) => p.featured) || [];
  const otherProjects = projects?.filter((p) => !p.featured) || [];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Gradient Background - Navy, Brown, Lime */}
      <div className={`absolute inset-0 bg-gradient-to-br ${
        darkMode
          ? 'from-navy-900 via-brown-900 to-navy-950'
          : 'from-navy-800 via-brown-800 to-navy-900'
      }`}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      
      {/* Floating Orbs - Muted colors */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-lime-600/15 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-brown-600/15 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-navy-600/15 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className={`section-subtitle ${darkMode ? 'text-lime-400/80' : 'text-lime-300/80'}`}>✨ Portfolio</p>
          <h2 className={`section-title ${darkMode ? 'text-white' : 'text-white'} drop-shadow-lg`}>
            🚀 Featured Projects
          </h2>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className={`group relative ${
                darkMode ? 'bg-white/5' : 'bg-white/10'
              } backdrop-blur-lg rounded-2xl overflow-hidden border ${
                darkMode ? 'border-white/10' : 'border-white/20'
              } shadow-2xl hover:shadow-lime-500/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2`}
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              
              {/* Project Image - Muted gradient */}
              <div className="relative h-48 bg-gradient-to-br from-lime-700 via-green-800 to-brown-700 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-7xl animate-bounce-slow">📁</span>
                </div>
                {/* Holographic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Hover Action */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75"
                  >
                    <span className="px-6 py-3 bg-gradient-to-r from-lime-600 to-green-700 text-white font-bold rounded-full shadow-lg hover:shadow-lime-500/50 hover:scale-110 transition-all duration-300 inline-flex items-center gap-2">
                      <i className="bi bi-github"></i>
                      <span className="text-2xl">👨‍💻</span>
                    </span>
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-150"
                  >
                    <span className="px-6 py-3 bg-gradient-to-r from-brown-600 to-navy-700 text-white font-bold rounded-full shadow-lg hover:shadow-brown-500/50 hover:scale-110 transition-all duration-300 inline-flex items-center gap-2">
                      <i className="bi bi-eye"></i>
                      <span className="text-2xl">👀</span>
                    </span>
                  </a>
                </div>
                {/* Sparkles on Hover */}
                <div className="absolute inset-0 pointer-events-none">
                  <span className="absolute top-4 left-4 text-2xl opacity-0 group-hover:opacity-100 animate-ping">✨</span>
                  <span className="absolute top-4 right-4 text-2xl opacity-0 group-hover:opacity-100 animate-ping animation-delay-500">⭐</span>
                  <span className="absolute bottom-4 left-1/2 text-2xl opacity-0 group-hover:opacity-100 animate-ping animation-delay-1000">💫</span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-white'} mb-2 group-hover:text-lime-400 transition-colors duration-300 flex items-center gap-2`}>
                  <span className="text-2xl">🎯</span>
                  {project.title}
                </h3>
                <p className={`${darkMode ? 'text-white/70' : 'text-white/80'} text-sm mb-4 line-clamp-3`}>
                  {project.description}
                </p>
                {/* Tech Stack with Glow */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies?.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gradient-to-r from-lime-700/60 to-green-800/60 text-lime-300 text-xs font-bold rounded-full border border-lime-500/30 shadow-lg hover:shadow-lime-500/30 hover:scale-110 transition-all duration-300 cursor-default"
                    >
                      💻 {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Corner Decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-lime-500/20 to-transparent rounded-bl-full"></div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <h3 className={`text-2xl font-bold text-center ${darkMode ? 'text-white' : 'text-white'} mb-8 drop-shadow-lg flex items-center justify-center gap-2`}>
              <span className="text-3xl">🔥</span> More Projects <span className="text-3xl">🔥</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {otherProjects.map((project) => (
                <div
                  key={project.id}
                  className={`group relative ${
                    darkMode ? 'bg-white/5' : 'bg-white/10'
                  } backdrop-blur-lg rounded-2xl p-6 flex flex-col sm:flex-row gap-6 border ${
                    darkMode ? 'border-white/10' : 'border-white/20'
                  } shadow-xl hover:shadow-lime-500/30 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 overflow-hidden`}
                >
                  {/* Animated Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-lime-500/0 via-lime-500/10 to-lime-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  
                  <div className="relative w-full sm:w-32 h-32 bg-gradient-to-br from-lime-700 via-green-800 to-brown-700 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-lime-500/30 transition-shadow duration-300 overflow-hidden">
                    <span className="text-5xl group-hover:scale-125 transition-transform duration-300">📂</span>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  <div className="flex-1 relative z-10">
                    <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-white'} mb-2 group-hover:text-lime-400 transition-colors duration-300 flex items-center gap-2`}>
                      <span className="text-xl">💡</span>
                      {project.title}
                    </h3>
                    <p className={`${darkMode ? 'text-white/70' : 'text-white/80'} text-sm mb-4`}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies?.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className={`px-2 py-1 ${
                            darkMode ? 'bg-white/10 text-white' : 'bg-white/20 text-white'
                          } text-xs font-medium rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300`}
                        >
                          ⚡ {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        darkMode ? 'text-lime-400 hover:text-lime-300' : 'text-lime-300 hover:text-lime-200'
                      } font-bold text-sm inline-flex items-center gap-2 group/link transition-all duration-300`}
                    >
                      <span className="text-xl group-hover/link:rotate-12 transition-transform duration-300">🔗</span>
                      View on GitHub
                      <i className="bi bi-box-arrow-up-right group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Achievements */}
        {achievements && achievements.length > 0 && (
          <div className="mt-16">
            <h3 className={`text-2xl font-bold text-center ${darkMode ? 'text-white' : 'text-white'} mb-8 drop-shadow-lg flex items-center justify-center gap-2`}>
              <span className="text-3xl">🏆</span> Achievements & Highlights <span className="text-3xl">🎖️</span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className={`group relative ${
                    darkMode ? 'bg-white/5' : 'bg-white/10'
                  } backdrop-blur-lg rounded-2xl p-6 text-center border ${
                    darkMode ? 'border-white/10' : 'border-white/20'
                  } shadow-xl hover:shadow-lime-500/30 transition-all duration-300 hover:scale-110 hover:-translate-y-2 overflow-hidden`}
                >
                  {/* Rainbow Border Animation - Muted */}
                  <div className="absolute inset-0 bg-gradient-to-r from-lime-600 via-brown-600 via-navy-600 to-lime-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
                  <div className={`absolute inset-[2px] ${darkMode ? 'bg-white/5' : 'bg-white/10'} rounded-2xl -z-10`}></div>
                  
                  <div className="relative">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-lime-600 via-green-700 to-brown-700 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-lime-500/50 group-hover:animate-pulse transition-all duration-300">
                      <span className="text-3xl group-hover:scale-125 transition-transform duration-300">🏅</span>
                    </div>
                    <h4 className={`font-bold ${darkMode ? 'text-white' : 'text-white'} mb-2 group-hover:text-lime-400 transition-colors duration-300`}>
                      {achievement.title}
                    </h4>
                    <p className={`${darkMode ? 'text-white/70' : 'text-white/80'} text-sm`}>
                      {achievement.description}
                    </p>
                    {/* Celebration Emoji on Hover */}
                    <div className="absolute -top-2 -right-2 text-2xl opacity-0 group-hover:opacity-100 animate-bounce">
                      🎉
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
