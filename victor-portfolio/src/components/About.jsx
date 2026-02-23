const About = ({ summary, education, certifications, darkMode = true }) => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Gradient Background - Navy, Brown */}
      <div className={`absolute inset-0 bg-gradient-to-br ${
        darkMode
          ? 'from-navy-950 via-brown-950 to-navy-900'
          : 'from-navy-900 via-brown-900 to-navy-800'
      }`}></div>
      
      {/* Animated Orbs - Muted colors */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-lime-600/15 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-brown-600/15 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-navy-600/15 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className={`section-subtitle ${darkMode ? 'text-lime-400/80' : 'text-lime-300/80'}`}>👤 About Me</p>
          <h2 className={`section-title ${darkMode ? 'text-white' : 'text-white'} drop-shadow-lg`}>
            <span className="text-4xl inline-block mr-2">🎯</span>
            Get To Know Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Summary */}
          <div className={`group relative ${
            darkMode ? 'bg-white/5' : 'bg-white/10'
          } backdrop-blur-lg rounded-2xl p-8 border ${
            darkMode ? 'border-white/10' : 'border-white/20'
          } shadow-2xl hover:shadow-lime-500/20 transition-all duration-500 hover:scale-[1.02]`}>
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-2xl"></div>
            
            <div className="relative">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-lime-600 to-green-700 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:shadow-lime-500/30 transition-shadow duration-300">
                  <span className="text-3xl">👨‍💼</span>
                </div>
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-white'}`}>
                  Professional Summary
                </h3>
              </div>
              <p className={`${darkMode ? 'text-white/70' : 'text-white/80'} leading-relaxed mb-8`}>{summary}</p>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { emoji: '🔧', text: 'IT Support Expert' },
                  { emoji: '🤖', text: 'AI Specialist' },
                  { emoji: '🌐', text: 'Full Stack Developer' },
                  { emoji: '💡', text: 'Problem Solver' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center space-x-3 p-3 ${
                      darkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-white/10 hover:bg-white/15'
                    } rounded-lg transition-all duration-300 group/item`}
                  >
                    <span className="text-2xl group-hover/item:animate-bounce">{item.emoji}</span>
                    <span className={`${darkMode ? 'text-white/90' : 'text-white'} font-medium`}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-6">
            {/* Education */}
            <div className={`group relative ${
              darkMode ? 'bg-white/5' : 'bg-white/10'
            } backdrop-blur-lg rounded-2xl p-6 border ${
              darkMode ? 'border-white/10' : 'border-white/20'
            } shadow-xl hover:shadow-lime-500/20 transition-all duration-300 hover:scale-[1.02]`}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-lime-600 to-green-700 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-white'}`}>Education</h3>
              </div>
              <div className="space-y-4">
                {education?.slice(0, 3).map((edu) => (
                  <div
                    key={edu.id}
                    className={`relative border-l-4 border-lime-600 pl-4 py-2 ${
                      darkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-white/10 hover:bg-white/15'
                    } rounded-r-lg transition-all duration-300`}
                  >
                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-lime-600 to-green-700 rounded-full flex items-center justify-center">
                      <span className="text-xs">📚</span>
                    </div>
                    <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-white'}`}>
                      {edu.degree}
                    </h4>
                    <p className="text-lime-400 text-sm">{edu.institution}</p>
                    <p className={`${darkMode ? 'text-white/60' : 'text-white/70'} text-xs`}>
                      {edu.year} • {edu.location}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className={`group relative ${
              darkMode ? 'bg-white/5' : 'bg-white/10'
            } backdrop-blur-lg rounded-2xl p-6 border ${
              darkMode ? 'border-white/10' : 'border-white/20'
            } shadow-xl hover:shadow-lime-500/20 transition-all duration-300 hover:scale-[1.02]`}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-lime-600 to-brown-700 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                  <span className="text-2xl">🏅</span>
                </div>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-white'}`}>
                  Certifications
                </h3>
              </div>
              <div className="space-y-3">
                {certifications?.slice(0, 4).map((cert) => (
                  <div
                    key={cert.id}
                    className={`flex items-start space-x-3 p-3 ${
                      darkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-white/10 hover:bg-white/15'
                    } rounded-lg transition-all duration-300 group/cert`}
                  >
                    <span className="text-xl group-hover/cert:animate-bounce">✅</span>
                    <div>
                      <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-white'} text-sm`}>
                        {cert.name}
                      </h4>
                      <p className={`${darkMode ? 'text-white/60' : 'text-white/70'} text-xs`}>
                        {cert.issuer} • {cert.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
