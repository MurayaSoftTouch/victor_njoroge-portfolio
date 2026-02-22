const Projects = ({ projects, achievements }) => {
  const featuredProjects = projects?.filter((p) => p.featured) || [];
  const otherProjects = projects?.filter((p) => !p.featured) || [];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle">Portfolio</p>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <div key={project.id} className="card overflow-hidden group">
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-400 to-primary-600 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <i className="bi bi-folder2-open text-6xl text-white/50"></i>
                </div>
                <div className="absolute inset-0 bg-secondary-900/0 group-hover:bg-secondary-900/60 transition-all duration-300 flex items-center justify-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                  >
                    <span className="btn-primary bg-white text-primary-600">
                      <i className="bi bi-github"></i> View Code
                    </span>
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-secondary-600 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies?.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary-50 text-primary-600 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <h3 className="text-2xl font-bold text-secondary-800 mb-8">
              More Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {otherProjects.map((project) => (
                <div key={project.id} className="card p-6 flex flex-col sm:flex-row gap-6">
                  <div className="w-full sm:w-32 h-32 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="bi bi-folder text-4xl text-white/70"></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-secondary-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-secondary-600 text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies?.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-secondary-100 text-secondary-600 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 font-medium text-sm inline-flex items-center gap-1"
                    >
                      <i className="bi bi-github"></i>
                      View on GitHub
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
            <h3 className="text-2xl font-bold text-center text-secondary-800 mb-8">
              Achievements & Highlights
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className="card p-6 text-center hover:bg-primary-50 transition-colors"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="bi bi-trophy text-2xl text-white"></i>
                  </div>
                  <h4 className="font-semibold text-secondary-800 mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-secondary-600 text-sm">
                    {achievement.description}
                  </p>
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
