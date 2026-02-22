const Hero = ({ profile }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Profile Image */}
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto bg-gradient-to-br from-white/20 to-white/5 rounded-full flex items-center justify-center border-4 border-white/30 shadow-2xl">
            <span className="text-6xl md:text-7xl font-bold text-white">
              {profile?.name?.charAt(0) || 'V'}
            </span>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in">
          {profile?.name || 'Victor Kirika Njoroge'}
        </h1>

        {/* Title */}
        <p className="text-lg md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in">
          {profile?.title ||
            'IT Professional | Software Developer | AI Specialist'}
        </p>

        {/* Location */}
        <div className="flex items-center justify-center space-x-2 text-white/80 mb-8 animate-fade-in">
          <i className="bi bi-geo-alt-fill"></i>
          <span className="text-sm md:text-base">
            {profile?.location || '76502 Temple, Texas, USA'}
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
          <a href="#projects" className="btn-primary bg-white text-primary-600 hover:bg-white/90">
            <i className="bi bi-briefcase mr-2"></i>
            View My Work
          </a>
          <a href="#contact" className="btn-primary border-2 border-white bg-transparent hover:bg-white/10">
            <i className="bi bi-envelope mr-2"></i>
            Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div className="mt-12 flex items-center justify-center space-x-6 animate-fade-in">
          <a
            href={`mailto:${profile?.email}`}
            className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110"
          >
            <i className="bi bi-envelope text-xl"></i>
          </a>
          <a
            href={`https://${profile?.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110"
          >
            <i className="bi bi-linkedin text-xl"></i>
          </a>
          <a
            href={`https://${profile?.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110"
          >
            <i className="bi bi-github text-xl"></i>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <a href="#about" className="text-white/70 hover:text-white transition-colors">
            <i className="bi bi-chevron-double-down text-3xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
