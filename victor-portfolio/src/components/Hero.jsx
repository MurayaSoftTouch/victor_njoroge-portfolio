const Hero = ({ profile, darkMode = true }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Gradient Background - Navy, Brown, Lime */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-brown-900 to-navy-950 animate-gradient-xy"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>

      {/* Floating Orbs - Muted colors */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-lime-600/15 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-brown-600/15 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-navy-600/15 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-lime-400/40 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Decorative Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-lime-500/20 to-transparent"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-brown-500/20 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6 animate-fade-in">
              <span className="text-2xl">👋</span>
              <span className="text-white/90 font-medium">Welcome to my portfolio</span>
            </div>

            {/* Name with Glow */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 animate-fade-in leading-tight">
              <span className="block">Hello, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-300 via-green-300 to-brown-300 drop-shadow-2xl">
                {profile?.name || 'Victor Kirika'}
              </span>
            </h1>

            {/* Title with Animated Background */}
            <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in font-medium">
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-lime-600/20 via-green-700/20 to-brown-700/20 backdrop-blur-md rounded-xl border border-lime-500/30">
                💻 {profile?.title || 'IT Professional | Software Developer | AI Specialist'}
              </span>
            </p>

            {/* Description */}
            <p className={`${darkMode ? 'text-white/70' : 'text-white/80'} text-lg mb-10 max-w-xl mx-auto lg:mx-0 animate-fade-in`}>
              {profile?.summary?.slice(0, 150) || 'Passionate about creating innovative solutions through technology. Specializing in IT support, software development, and AI implementation.'}...
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in mb-10">
              <a href="#projects" className="group relative px-8 py-4 bg-gradient-to-r from-lime-600 to-green-700 text-white font-bold rounded-full shadow-lg hover:shadow-lime-500/50 hover:scale-105 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-lime-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-2 text-lg">
                  <span className="text-2xl">🎯</span>
                  View My Work
                  <i className="bi bi-arrow-right group-hover:translate-x-1 transition-transform"></i>
                </span>
              </a>
              <a href="#contact" className="group px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-full border-2 border-white/40 hover:bg-white/20 hover:scale-105 transition-all duration-300">
                <span className="flex items-center gap-2 text-lg">
                  <span className="text-2xl">📬</span>
                  Contact Me
                </span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 animate-fade-in">
              <span className={`${darkMode ? 'text-white/60' : 'text-white/70'} text-sm`}>Follow me:</span>
              <a
                href={`mailto:${profile?.email}`}
                className="group w-12 h-12 bg-white/10 hover:bg-gradient-to-br hover:from-lime-600 hover:to-green-700 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 transition-all duration-300 transform hover:scale-110"
              >
                <span className="text-xl group-hover:animate-bounce">📧</span>
              </a>
              <a
                href={`https://${profile?.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-white/10 hover:bg-gradient-to-br hover:from-brown-600 hover:to-navy-700 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 transition-all duration-300 transform hover:scale-110"
              >
                <span className="text-xl group-hover:animate-bounce">💼</span>
              </a>
              <a
                href={`https://${profile?.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-white/10 hover:bg-gradient-to-br hover:from-lime-700 hover:to-brown-700 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 transition-all duration-300 transform hover:scale-110"
              >
                <span className="text-xl group-hover:animate-bounce">👨‍💻</span>
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image with Orbiting Icons */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="hero-avatar-container animate-fade-in">
              {/* Outer Glow Pulse */}
              <div className="avatar-glow"></div>
              
              {/* Orbit Ring 1 - Inner */}
              <div className="orbit-ring orbit-ring-1">
                <div className="orbit-icon">💻</div>
                <div className="orbit-icon">⚡</div>
                <div className="orbit-icon">🔧</div>
                <div className="orbit-icon">📊</div>
                <div className="orbit-icon">🔒</div>
                <div className="orbit-icon">☁️</div>
              </div>

              {/* Orbit Ring 2 - Middle (reverse direction) */}
              <div className="orbit-ring orbit-ring-2">
                <div className="orbit-icon">🚀</div>
                <div className="orbit-icon">🤖</div>
                <div className="orbit-icon">📱</div>
                <div className="orbit-icon">🌐</div>
                <div className="orbit-icon">📧</div>
                <div className="orbit-icon">🎯</div>
              </div>

              {/* Orbit Ring 3 - Outer */}
              <div className="orbit-ring orbit-ring-3">
                <div className="orbit-icon">💡</div>
                <div className="orbit-icon">🏆</div>
                <div className="orbit-icon">📈</div>
                <div className="orbit-icon">🔗</div>
                <div className="orbit-icon">📋</div>
                <div className="orbit-icon">👥</div>
              </div>
              
              {/* Rotating Border Ring */}
              <div className="absolute inset-0 bg-gradient-to-br from-lime-600 via-green-700 to-brown-700 rounded-full animate-spin-slow blur-sm"></div>
              <div className="absolute inset-1 bg-gradient-to-br from-navy-900 via-brown-900 to-navy-950 rounded-full"></div>
              
              {/* Main Avatar Circle */}
              <div className="absolute inset-4 bg-gradient-to-br from-white/10 to-white/5 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white/20 shadow-2xl">
                <span className="text-8xl md:text-9xl font-bold text-white drop-shadow-lg">
                  {profile?.name?.charAt(0) || 'V'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="inline-flex flex-col items-center text-white/60 hover:text-lime-400 transition-colors group">
            <span className="text-xs mb-2 opacity-0 group-hover:opacity-100 transition-opacity">Scroll to explore</span>
            <i className="bi bi-chevron-double-down text-3xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
