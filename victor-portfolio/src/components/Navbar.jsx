import { useState, useEffect } from 'react';

const Navbar = ({ darkMode, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', emoji: '🏠' },
    { name: 'About', href: '#about', emoji: '👤' },
    { name: 'Experience', href: '#experience', emoji: '💼' },
    { name: 'Skills', href: '#skills', emoji: '⚡' },
    { name: 'Projects', href: '#projects', emoji: '🚀' },
    { name: 'Testimonials', href: '#testimonials', emoji: '⭐' },
    { name: 'Contact', href: '#contact', emoji: '📧' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? darkMode
            ? 'bg-navy-900/90 backdrop-blur-lg shadow-2xl shadow-lime-500/10'
            : 'bg-white/90 backdrop-blur-lg shadow-2xl shadow-lime-500/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group">
            <div className="w-12 h-12 bg-gradient-to-br from-lime-600 via-green-700 to-lime-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-lime-500/50 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3">
              <span className="text-white font-bold text-xl">V</span>
            </div>
            <span
              className={`font-bold text-xl hidden sm:block transition-all duration-300 ${
                isScrolled
                  ? darkMode
                    ? 'text-lime-400'
                    : 'text-navy-800'
                  : 'text-white drop-shadow-lg'
              }`}
            >
              Victor Kirika
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`group relative px-4 py-2 rounded-full font-medium transition-all duration-300 overflow-hidden ${
                  isScrolled
                    ? darkMode
                      ? 'text-white/70 hover:text-white'
                      : 'text-navy-600 hover:text-white'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {/* Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-lime-700 to-green-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                
                {/* Content */}
                <span className="relative flex items-center gap-1.5">
                  <span className="text-lg group-hover:animate-bounce">{link.emoji}</span>
                  {link.name}
                </span>
              </a>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`ml-2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
                isScrolled
                  ? darkMode
                    ? 'bg-lime-500/20 text-lime-400 hover:bg-lime-500/30'
                    : 'bg-navy-100 text-navy-800 hover:bg-navy-200'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              <span className="text-xl">{darkMode ? '☀️' : '🌙'}</span>
            </button>
            
            <a
              href="#contact"
              className="group relative ml-4 px-6 py-3 bg-gradient-to-r from-lime-700 via-green-800 to-lime-900 text-white font-bold rounded-full shadow-lg hover:shadow-lime-500/50 transition-all duration-300 transform hover:scale-110 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-lime-600 via-green-700 to-lime-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center gap-2">
                <span className="text-lg">🎯</span>
                Hire Me
              </span>
            </a>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`md:hidden w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                isScrolled
                  ? darkMode
                    ? 'bg-lime-500/20 text-lime-400'
                    : 'bg-navy-100 text-navy-800'
                  : 'bg-white/10 text-white'
              }`}
            >
              <span className="text-lg">{darkMode ? '☀️' : '🌙'}</span>
            </button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-xl transition-all duration-300 ${
                isScrolled
                  ? darkMode
                    ? 'text-white hover:bg-white/10'
                    : 'text-navy-800 hover:bg-navy-100'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <span className="text-2xl">{isMobileMenuOpen ? '❌' : '☰'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`md:hidden backdrop-blur-lg rounded-2xl shadow-2xl mb-4 animate-fade-in overflow-hidden ${
            darkMode ? 'bg-navy-900/95' : 'bg-white/95'
          }`}>
            <div className="py-4 px-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`group flex items-center gap-3 py-3 px-4 rounded-xl transition-all duration-300 ${
                    darkMode
                      ? 'text-white/70 hover:bg-gradient-to-r hover:from-lime-700 hover:to-green-800 hover:text-white'
                      : 'text-navy-600 hover:bg-gradient-to-r hover:from-lime-500 hover:to-green-600 hover:text-white'
                  }`}
                >
                  <span className="text-xl group-hover:animate-bounce">{link.emoji}</span>
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="group flex items-center justify-center gap-2 mt-4 py-4 px-6 bg-gradient-to-r from-lime-700 via-green-800 to-lime-900 text-white font-bold rounded-xl shadow-lg hover:shadow-lime-500/50 transition-all duration-300"
              >
                <span className="text-xl">🎯</span>
                Hire Me
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
