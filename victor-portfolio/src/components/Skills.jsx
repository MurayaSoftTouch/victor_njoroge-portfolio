import { useState } from 'react';

const Skills = ({ skills, darkMode = true }) => {
  const [activeCategory, setActiveCategory] = useState('programming');

  const categories = {
    programming: { name: 'Programming', icon: 'bi-code-slash', emoji: '💻' },
    operatingSystems: { name: 'OS', icon: 'bi-hdd', emoji: '🖥️' },
    aiTools: { name: 'AI Tools', icon: 'bi-robot', emoji: '🤖' },
    cloudPlatforms: { name: 'Cloud', icon: 'bi-cloud', emoji: '☁️' },
    databases: { name: 'Databases', icon: 'bi-database', emoji: '🗄️' },
    networking: { name: 'Networking', icon: 'bi-hdd-network', emoji: '🌐' },
    productivity: { name: 'Productivity', icon: 'bi-tools', emoji: '⚡' },
  };

  const currentSkills = skills?.[activeCategory] || [];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Gradient Background - Navy, Brown */}
      <div className={`absolute inset-0 bg-gradient-to-br ${
        darkMode
          ? 'from-navy-900 via-brown-900 to-navy-950'
          : 'from-navy-800 via-brown-800 to-navy-900'
      }`}></div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Orbs - Muted colors */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-lime-600/15 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-brown-600/15 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-navy-600/15 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className={`section-subtitle ${darkMode ? 'text-lime-400/80' : 'text-lime-300/80'}`}>🚀 Expertise</p>
          <h2 className={`section-title ${darkMode ? 'text-white' : 'text-white'} drop-shadow-lg`}>
            <span className="text-4xl inline-block mr-2">💎</span>
            Technical Skills
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.entries(categories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`group flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-110 ${
                activeCategory === key
                  ? 'bg-gradient-to-r from-lime-700 via-green-800 to-brown-700 text-white shadow-lg shadow-lime-500/30'
                  : `${
                      darkMode ? 'bg-white/10 backdrop-blur-md text-white/80' : 'bg-white/15 backdrop-blur-md text-white'
                    } hover:bg-white/20 border border-white/20`
              }`}
            >
              <span className="text-xl group-hover:animate-bounce">{category.emoji}</span>
              <span className="hidden sm:inline">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {currentSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group relative ${
                darkMode ? 'bg-white/5' : 'bg-white/10'
              } backdrop-blur-lg rounded-2xl p-6 border ${
                darkMode ? 'border-white/10' : 'border-white/20'
              } shadow-xl hover:shadow-lime-500/20 transition-all duration-300 hover:scale-105 overflow-hidden`}
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-lime-500/0 via-lime-500/10 to-lime-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              
              <div className="relative">
                <div className="flex justify-between items-center mb-3">
                  <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-white'} flex items-center gap-2`}>
                    <span className="text-xl">⚡</span>
                    {skill.name}
                  </h3>
                  <span className="text-lime-400 font-bold bg-lime-500/20 px-3 py-1 rounded-full border border-lime-500/30">
                    {skill.level}%
                  </span>
                </div>
                <div className={`w-full ${darkMode ? 'bg-white/10' : 'bg-white/20'} rounded-full h-4 overflow-hidden`}>
                  <div
                    className="h-full bg-gradient-to-r from-lime-600 via-green-700 to-brown-700 rounded-full relative overflow-hidden"
                    style={{ width: `${skill.level}%`, transitionDelay: `${index * 100}ms` }}
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Competencies */}
        <div className="mt-16">
          <h3 className={`text-2xl font-bold text-center ${darkMode ? 'text-white' : 'text-white'} mb-8 drop-shadow-lg flex items-center justify-center gap-2`}>
            <span className="text-3xl">🔥</span> Core Competencies <span className="text-3xl">🔥</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: 'bi-pc-display', title: 'IT Systems Administration', emoji: '🖥️' },
              { icon: 'bi-headset', title: 'Technical Support', emoji: '🎧' },
              { icon: 'bi-cpu', title: 'AI Model Evaluation', emoji: '🧠' },
              { icon: 'bi-graph-up-arrow', title: 'Data Analysis', emoji: '📊' },
              { icon: 'bi-gear-wide-connected', title: 'Process Automation', emoji: '⚙️' },
              { icon: 'bi-cloud-check', title: 'Cloud Computing', emoji: '☁️' },
              { icon: 'bi-shield-check', title: 'Cybersecurity Awareness', emoji: '🔒' },
              { icon: 'bi-code-square', title: 'Web Development', emoji: '🌐' },
              { icon: 'bi-people', title: 'Team Collaboration', emoji: '👥' },
              { icon: 'bi-kanban', title: 'Project Management', emoji: '📋' },
            ].map((competency, index) => (
              <div
                key={index}
                className={`group relative ${
                  darkMode ? 'bg-white/5' : 'bg-white/10'
                } backdrop-blur-lg rounded-2xl p-5 border ${
                  darkMode ? 'border-white/10' : 'border-white/20'
                } shadow-lg hover:shadow-lime-500/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1 overflow-hidden`}
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-lime-500/0 via-brown-500/10 to-lime-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                <div className="relative flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-lime-600 to-green-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-lime-500/30 transition-shadow duration-300">
                    <span className="text-2xl group-hover:animate-bounce">{competency.emoji}</span>
                  </div>
                  <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-white'}`}>{competency.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
