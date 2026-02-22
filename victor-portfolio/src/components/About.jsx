const About = ({ summary, education, certifications }) => {
  return (
    <section id="about" className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle">About Me</p>
          <h2 className="section-title">Get To Know Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Summary */}
          <div className="card p-8 animate-fade-in">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                <i className="bi bi-person text-2xl text-primary-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-secondary-800">
                Professional Summary
              </h3>
            </div>
            <p className="text-secondary-600 leading-relaxed">{summary}</p>
            
            {/* Quick Info */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <i className="bi bi-check-circle-fill text-primary-600"></i>
                <span className="text-secondary-700">IT Support Expert</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="bi bi-check-circle-fill text-primary-600"></i>
                <span className="text-secondary-700">AI Specialist</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="bi bi-check-circle-fill text-primary-600"></i>
                <span className="text-secondary-700">Full Stack Developer</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="bi bi-check-circle-fill text-primary-600"></i>
                <span className="text-secondary-700">Problem Solver</span>
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-6">
            {/* Education */}
            <div className="card p-6">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-3">
                  <i className="bi bi-mortarboard text-xl text-primary-600"></i>
                </div>
                <h3 className="text-xl font-bold text-secondary-800">Education</h3>
              </div>
              <div className="space-y-4">
                {education?.slice(0, 3).map((edu) => (
                  <div
                    key={edu.id}
                    className="border-l-4 border-primary-500 pl-4 py-2"
                  >
                    <h4 className="font-semibold text-secondary-800">
                      {edu.degree}
                    </h4>
                    <p className="text-primary-600 text-sm">{edu.institution}</p>
                    <p className="text-secondary-500 text-xs">
                      {edu.year} • {edu.location}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="card p-6">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-3">
                  <i className="bi bi-award text-xl text-primary-600"></i>
                </div>
                <h3 className="text-xl font-bold text-secondary-800">
                  Certifications
                </h3>
              </div>
              <div className="space-y-3">
                {certifications?.slice(0, 4).map((cert) => (
                  <div
                    key={cert.id}
                    className="flex items-start space-x-3 p-3 bg-secondary-50 rounded-lg hover:bg-primary-50 transition-colors"
                  >
                    <i className="bi bi-patch-check-fill text-primary-600 mt-0.5"></i>
                    <div>
                      <h4 className="font-medium text-secondary-800 text-sm">
                        {cert.name}
                      </h4>
                      <p className="text-secondary-500 text-xs">
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
