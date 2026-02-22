import { useState } from 'react';

const Skills = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState('programming');

  const categories = {
    programming: { name: 'Programming', icon: 'bi-code-slash' },
    operatingSystems: { name: 'OS', icon: 'bi-hdd' },
    aiTools: { name: 'AI Tools', icon: 'bi-robot' },
    cloudPlatforms: { name: 'Cloud', icon: 'bi-cloud' },
    databases: { name: 'Databases', icon: 'bi-database' },
    networking: { name: 'Networking', icon: 'bi-hdd-network' },
    productivity: { name: 'Productivity', icon: 'bi-tools' },
  };

  const currentSkills = skills?.[activeCategory] || [];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle">Expertise</p>
          <h2 className="section-title">Technical Skills</h2>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.entries(categories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-primary-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-secondary-600 hover:bg-primary-50'
              }`}
            >
              <i className={`bi ${category.icon}`}></i>
              <span className="hidden sm:inline">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {currentSkills.map((skill, index) => (
            <div key={skill.name} className="card p-6">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-secondary-800">
                  {skill.name}
                </h3>
                <span className="text-primary-600 font-bold">{skill.level}%</span>
              </div>
              <div className="w-full bg-secondary-200 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary-500 to-primary-700 rounded-full skill-bar-fill"
                  style={{ width: `${skill.level}%`, transitionDelay: `${index * 100}ms` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Competencies */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-secondary-800 mb-8">
            Core Competencies
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: 'bi-pc-display', title: 'IT Systems Administration' },
              { icon: 'bi-headset', title: 'Technical Support' },
              { icon: 'bi-cpu', title: 'AI Model Evaluation' },
              { icon: 'bi-graph-up-arrow', title: 'Data Analysis' },
              { icon: 'bi-gear-wide-connected', title: 'Process Automation' },
              { icon: 'bi-cloud-check', title: 'Cloud Computing' },
              { icon: 'bi-shield-check', title: 'Cybersecurity Awareness' },
              { icon: 'bi-code-square', title: 'Web Development' },
              { icon: 'bi-people', title: 'Team Collaboration' },
              { icon: 'bi-kanban', title: 'Project Management' },
            ].map((competency, index) => (
              <div
                key={index}
                className="card p-5 flex items-center gap-4 hover:bg-primary-50 transition-colors"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className={`bi ${competency.icon} text-2xl text-primary-600`}></i>
                </div>
                <h4 className="font-medium text-secondary-800">{competency.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
