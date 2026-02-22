const Footer = ({ profile }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <span className="font-bold text-xl">Victor Kirika</span>
            </div>
            <p className="text-secondary-400 text-sm">
              IT Professional | Software Developer | AI Specialist
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-secondary-400">
              <li>
                <a href="#about" className="hover:text-primary-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-primary-400 transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-primary-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-secondary-400">
              <li className="flex items-center gap-2">
                <i className="bi bi-envelope"></i>
                <a href={`mailto:${profile?.email}`} className="hover:text-primary-400 transition-colors">
                  {profile?.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <i className="bi bi-geo-alt"></i>
                <span>{profile?.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-400 text-sm text-center md:text-left">
            © {currentYear} {profile?.name || 'Victor Kirika Njoroge'}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={`https://${profile?.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-400 hover:text-primary-400 transition-colors"
            >
              <i className="bi bi-linkedin text-xl"></i>
            </a>
            <a
              href={`https://${profile?.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-400 hover:text-primary-400 transition-colors"
            >
              <i className="bi bi-github text-xl"></i>
            </a>
            <a
              href={`mailto:${profile?.email}`}
              className="text-secondary-400 hover:text-primary-400 transition-colors"
            >
              <i className="bi bi-envelope text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
