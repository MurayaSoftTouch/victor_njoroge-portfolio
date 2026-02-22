const Experience = ({ experience }) => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle">Career Path</p>
          <h2 className="section-title">Work Experience</h2>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-500 to-primary-200"></div>

          <div className="space-y-12">
            {experience?.map((job, index) => (
              <div
                key={job.id}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                  <div className="card p-6 ml-8 md:ml-0">
                    {/* Company Header */}
                    <div className={`flex items-start gap-4 mb-4 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="bi bi-building text-white text-xl"></i>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-secondary-800">
                          {job.role}
                        </h3>
                        <p className="text-primary-600 font-medium">{job.company}</p>
                        <div className={`flex items-center gap-4 mt-2 text-sm text-secondary-500 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                          <span className="flex items-center gap-1">
                            <i className="bi bi-geo-alt"></i>
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <i className="bi bi-calendar"></i>
                            {job.period}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? '' : 'md:text-right'}`}>
                      {job.responsibilities?.slice(0, 4).map((resp, i) => (
                        <li
                          key={i}
                          className={`flex items-start gap-2 text-secondary-600 text-sm ${
                            index % 2 === 0 ? '' : 'md:flex-row-reverse md:text-right'
                          }`}
                        >
                          <i className="bi bi-check-circle-fill text-primary-500 mt-1 flex-shrink-0"></i>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                      {job.technologies?.slice(0, 4).map((tech, i) => (
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
