const Footer = ({ profile, darkMode = true }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`relative overflow-hidden ${
      darkMode
        ? 'bg-gradient-to-br from-navy-950 via-brown-950 to-navy-900'
        : 'bg-gradient-to-br from-navy-900 via-brown-900 to-navy-800'
    }`}>
      {/* Top Border Glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime-500/30 to-transparent"></div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Floating Orbs - Muted colors */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-lime-600/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-brown-600/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-10 left-1/2 w-64 h-64 bg-navy-600/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>

      {/* Wave Decoration */}
      <div className="footer-wave"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="group">
            <a href="#home" className="brand-glow flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-lime-600 via-green-700 to-brown-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-lime-500/30 transition-all duration-300 transform group-hover:scale-110">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <span className={`font-bold text-xl ${darkMode ? 'text-white' : 'text-white'} drop-shadow-lg`}>Victor Kirika</span>
            </a>
            <p className={`${darkMode ? 'text-white/60' : 'text-white/70'} text-sm flex items-center gap-2`}>
              <span>💻</span>
              IT Professional | Software Developer | AI Specialist
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a
                href={`mailto:${profile?.email}`}
                className={`social-link w-10 h-10 ${
                  darkMode ? 'bg-white/10' : 'bg-white/15'
                } hover:bg-gradient-to-br hover:from-lime-600 hover:to-green-700 backdrop-blur-md rounded-lg flex items-center justify-center ${
                  darkMode ? 'text-white' : 'text-white'
                } transition-all duration-300 transform hover:scale-125`}
              >
                <span className="text-lg">📧</span>
              </a>
              <a
                href={`https://${profile?.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-link w-10 h-10 ${
                  darkMode ? 'bg-white/10' : 'bg-white/15'
                } hover:bg-gradient-to-br hover:from-brown-600 hover:to-navy-700 backdrop-blur-md rounded-lg flex items-center justify-center ${
                  darkMode ? 'text-white' : 'text-white'
                } transition-all duration-300 transform hover:scale-125`}
              >
                <span className="text-lg">💼</span>
              </a>
              <a
                href={`https://${profile?.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-link w-10 h-10 ${
                  darkMode ? 'bg-white/10' : 'bg-white/15'
                } hover:bg-gradient-to-br hover:from-lime-700 hover:to-brown-700 backdrop-blur-md rounded-lg flex items-center justify-center ${
                  darkMode ? 'text-white' : 'text-white'
                } transition-all duration-300 transform hover:scale-125`}
              >
                <span className="text-lg">👨‍💻</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-white'} mb-4 flex items-center gap-2`}>
              <span>🔗</span> Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { name: 'About', href: '#about', emoji: '👤' },
                { name: 'Experience', href: '#experience', emoji: '💼' },
                { name: 'Skills', href: '#skills', emoji: '⚡' },
                { name: 'Projects', href: '#projects', emoji: '🚀' },
                { name: 'Testimonials', href: '#testimonials', emoji: '⭐' },
                { name: 'Contact', href: '#contact', emoji: '📧' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`quick-link group ${
                      darkMode ? 'text-white/60 hover:text-lime-400' : 'text-white/70 hover:text-lime-300'
                    } transition-all duration-300`}
                  >
                    <span className="group-hover:animate-bounce">{link.emoji}</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-white'} mb-4 flex items-center gap-2`}>
              <span>📍</span> Contact
            </h4>
            <ul className="space-y-3">
              <li className={`flex items-center gap-2 ${darkMode ? 'text-white/60' : 'text-white/70'}`}>
                <span className="text-lg">📧</span>
                <a href={`mailto:${profile?.email}`} className={`${
                  darkMode ? 'hover:text-lime-400' : 'hover:text-lime-300'
                } transition-colors`}>
                  {profile?.email}
                </a>
              </li>
              <li className={`flex items-center gap-2 ${darkMode ? 'text-white/60' : 'text-white/70'}`}>
                <span className="text-lg">🕒</span>
                <span>Available for hire</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="copyright-bar flex flex-col md:flex-row justify-between items-center gap-4">
          <p className={`${darkMode ? 'text-white/60' : 'text-white/70'} text-sm text-center md:text-left flex items-center gap-2`}>
            <span>©</span> {currentYear} {profile?.name || 'Victor Kirika Njoroge'}. All rights reserved.
          </p>
          <div className={`flex items-center gap-2 ${darkMode ? 'text-white/60' : 'text-white/70'} text-sm`}>
            <span>Made with</span>
            <span className="text-red-500 animate-pulse">❤️</span>
            <span>and</span>
            <span className="text-lime-400">⚡</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
