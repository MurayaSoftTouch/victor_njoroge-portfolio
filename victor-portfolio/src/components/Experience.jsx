const Experience = ({ experience, darkMode = true }) => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Gradient Background - Navy, Brown */}
      <div className={`absolute inset-0 bg-gradient-to-br ${
        darkMode
          ? 'from-navy-950 via-brown-950 to-navy-900'
          : 'from-navy-900 via-brown-900 to-navy-800'
      }`}></div>

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* Floating Orbs - Muted colors */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-lime-600/15 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-brown-600/15 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-navy-600/15 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className={`section-subtitle ${darkMode ? 'text-lime-400/80' : 'text-lime-300/80'}`}>💼 Career Path</p>
          <h2 className={`section-title ${darkMode ? 'text-white' : 'text-white'} drop-shadow-lg`}>
            <span className="text-4xl inline-block mr-2">🚀</span>
            Work Experience
          </h2>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line with Gradient - Lime, Brown */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-lime-600 via-brown-600 to-lime-800 rounded-full shadow-lg shadow-lime-500/30"></div>

          <div className="space-y-12">
            {experience?.map((job, index) => (
              <div
                key={job.id}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot with Pulse */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-lime-500 to-green-700 rounded-full border-4 border-white shadow-lg z-10 animate-pulse"></div>

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                  <div className={`group relative ${
                    darkMode ? 'bg-white/5' : 'bg-white/10'
                  } backdrop-blur-lg rounded-2xl p-6 ml-8 md:ml-0 border ${
                    darkMode ? 'border-white/10' : 'border-white/20'
                  } shadow-xl hover:shadow-lime-500/20 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1`}>
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-2xl"></div>

                    <div className="relative">
                      {/* Company Header */}
                      <div className={`flex items-start gap-4 mb-4 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                        <div className="w-14 h-14 bg-gradient-to-br from-lime-600 via-green-700 to-brown-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-lime-500/30 transition-shadow duration-300">
                          <span className="text-2xl">🏢</span>
                        </div>
                        <div>
                          <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-white'}`}>
                            {job.role}
                          </h3>
                          <p className="text-lime-400 font-medium">{job.company}</p>
                          <div className={`flex items-center gap-4 mt-2 text-sm ${darkMode ? 'text-white/60' : 'text-white/70'} ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                            <span className="flex items-center gap-1">
                              <span className="text-sm">📅</span>
                              {job.period}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <ul className={`space-y-3 mb-4 ${index % 2 === 0 ? '' : 'md:text-right'}`}>
                        {job.responsibilities?.slice(0, 4).map((resp, i) => (
                          <li
                            key={i}
                            className={`flex items-start gap-3 ${darkMode ? 'text-white/80' : 'text-white/90'} text-sm ${
                              index % 2 === 0 ? '' : 'md:flex-row-reverse md:text-right'
                            }`}
                          >
                            <span className="text-lime-400 mt-0.5 flex-shrink-0 text-base">▹</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                        {job.technologies?.slice(0, 4).map((tech, i) => (
                          <span
                            key={i}
                            className={`px-3 py-1 ${
                              darkMode
                                ? 'bg-lime-500/20 text-lime-300 border-lime-500/30'
                                : 'bg-lime-500/30 text-lime-200 border-lime-400/40'
                            } text-xs font-medium rounded-full border hover:border-lime-400 hover:shadow-lime-500/20 transition-all duration-300 cursor-default`}
                          >
                            💻 {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
