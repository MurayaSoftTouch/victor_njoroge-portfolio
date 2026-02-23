import { useState } from 'react';
import axios from 'axios';

const Contact = ({ profile, contact, darkMode = true }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post('http://localhost:8000/api/contact/submit', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('Error submitting form:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }

    setTimeout(() => setSubmitStatus(null), 5000);
  };

  const contactInfo = [
    {
      icon: 'bi-envelope',
      emoji: '📧',
      label: 'Email',
      value: contact?.email || profile?.email,
      href: `mailto:${contact?.email || profile?.email}`,
      gradient: 'from-lime-600 to-green-700',
    },
    {
      icon: 'bi-geo-alt',
      emoji: '📍',
      label: 'Location',
      value: contact?.location || profile?.location,
      href: null,
      gradient: 'from-brown-600 to-navy-700',
    },
    {
      icon: 'bi-linkedin',
      emoji: '💼',
      label: 'LinkedIn',
      value: profile?.linkedin,
      href: `https://${profile?.linkedin}`,
      gradient: 'from-lime-700 to-brown-700',
    },
    {
      icon: 'bi-github',
      emoji: '👨‍💻',
      label: 'GitHub',
      value: profile?.github,
      href: `https://${profile?.github}`,
      gradient: 'from-lime-600 to-green-800',
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Gradient Background - Navy, Brown, Lime */}
      <div className={`absolute inset-0 bg-gradient-to-br ${
        darkMode
          ? 'from-navy-900 via-brown-900 to-navy-950'
          : 'from-navy-800 via-brown-800 to-navy-900'
      } animate-gradient-xy`}></div>
      
      {/* Floating Orbs - Muted colors */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-lime-600/15 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-brown-600/15 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-navy-600/15 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className={`section-subtitle ${darkMode ? 'text-lime-400/80' : 'text-lime-300/80'}`}>📬 Get In Touch</p>
          <h2 className={`section-title ${darkMode ? 'text-white' : 'text-white'} drop-shadow-lg`}>
            <span className="text-4xl inline-block mr-2">💌</span>
            Contact Me
          </h2>
          <p className={`${darkMode ? 'text-white/80' : 'text-white/90'} max-w-2xl mx-auto mt-4`}>
            I'm currently open to new opportunities. Whether you have a question,
            a project idea, or just want to say hi, feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className={`group relative ${
              darkMode ? 'bg-white/5' : 'bg-white/10'
            } backdrop-blur-lg rounded-2xl p-8 border ${
              darkMode ? 'border-white/10' : 'border-white/20'
            } shadow-2xl hover:shadow-lime-500/20 transition-all duration-300`}>
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-white'} mb-6 flex items-center gap-2`}>
                <span className="text-3xl">🤝</span>
                Let's Connect
              </h3>
              <p className={`${darkMode ? 'text-white/80' : 'text-white/90'} mb-8`}>
                I'm always interested in hearing about new projects and opportunities.
                Let's discuss how we can work together to bring your ideas to life.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className={`group/info flex items-center gap-4 p-4 ${
                      darkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-white/10 hover:bg-white/15'
                    } rounded-xl transition-all duration-300 border ${
                      darkMode ? 'border-white/10 hover:border-white/20' : 'border-white/15 hover:border-white/25'
                    }`}
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover/info:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl">{info.emoji}</span>
                    </div>
                    <div>
                      <p className={`${darkMode ? 'text-white/60' : 'text-white/70'} text-sm`}>{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith('mailto') ? '_self' : '_blank'}
                          rel="noopener noreferrer"
                          className={`${
                            darkMode ? 'text-lime-400 hover:text-lime-300' : 'text-lime-300 hover:text-lime-200'
                          } font-medium transition-colors flex items-center gap-1 group/link`}
                        >
                          {info.value}
                          <i className="bi bi-box-arrow-up-right group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"></i>
                        </a>
                      ) : (
                        <p className={`${darkMode ? 'text-white' : 'text-white'} font-medium`}>{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Availability Status */}
              <div className={`mt-8 p-4 ${
                darkMode ? 'bg-green-500/20 border-green-400/30' : 'bg-green-500/30 border-green-400/40'
              } backdrop-blur-md rounded-xl border flex items-center gap-3`}>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                <span className={`${darkMode ? 'text-white' : 'text-white'} font-medium`}>
                  {contact?.availability || 'Open to opportunities'}
                </span>
                <span className="text-2xl ml-auto">✅</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4">
              <a
                href={`mailto:${contact?.email || profile?.email}`}
                className={`group w-14 h-14 ${
                  darkMode ? 'bg-white/10' : 'bg-white/15'
                } hover:bg-gradient-to-br hover:from-lime-600 hover:to-green-700 backdrop-blur-md rounded-full flex items-center justify-center ${
                  darkMode ? 'text-white' : 'text-white'
                } border border-white/20 transition-all duration-300 transform hover:scale-125 hover:-translate-y-2 shadow-lg`}
              >
                <span className="text-2xl group-hover:animate-bounce">📧</span>
              </a>
              <a
                href={`https://${profile?.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`group w-14 h-14 ${
                  darkMode ? 'bg-white/10' : 'bg-white/15'
                } hover:bg-gradient-to-br hover:from-brown-600 hover:to-navy-700 backdrop-blur-md rounded-full flex items-center justify-center ${
                  darkMode ? 'text-white' : 'text-white'
                } border border-white/20 transition-all duration-300 transform hover:scale-125 hover:-translate-y-2 shadow-lg`}
              >
                <span className="text-2xl group-hover:animate-bounce">💼</span>
              </a>
              <a
                href={`https://${profile?.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`group w-14 h-14 ${
                  darkMode ? 'bg-white/10' : 'bg-white/15'
                } hover:bg-gradient-to-br hover:from-lime-700 hover:to-brown-700 backdrop-blur-md rounded-full flex items-center justify-center ${
                  darkMode ? 'text-white' : 'text-white'
                } border border-white/20 transition-all duration-300 transform hover:scale-125 hover:-translate-y-2 shadow-lg`}
              >
                <span className="text-2xl group-hover:animate-bounce">👨‍💻</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`group relative ${
            darkMode ? 'bg-white/5' : 'bg-white/10'
          } backdrop-blur-lg rounded-2xl p-8 border ${
            darkMode ? 'border-white/10' : 'border-white/20'
          } shadow-2xl hover:shadow-lime-500/20 transition-all duration-300`}>
            <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-white'} mb-6 flex items-center gap-2`}>
              <span className="text-3xl">✉️</span>
              Send Me a Message
            </h3>

            {submitStatus === 'success' && (
              <div className={`mb-6 p-4 ${
                darkMode ? 'bg-green-500/20 border-green-400/30' : 'bg-green-500/30 border-green-400/40'
              } border rounded-xl flex items-center gap-3 backdrop-blur-md`}>
                <span className="text-2xl">✅</span>
                <p className="text-green-300">
                  Message sent successfully! I'll get back to you soon.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className={`mb-6 p-4 ${
                darkMode ? 'bg-red-500/20 border-red-400/30' : 'bg-red-500/30 border-red-400/40'
              } border rounded-xl flex items-center gap-3 backdrop-blur-md`}>
                <span className="text-2xl">⚠️</span>
                <p className="text-red-300">
                  Failed to send message. Please try again or email directly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className={`block ${darkMode ? 'text-white/80' : 'text-white/90'} font-medium mb-2`}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 ${
                      darkMode ? 'bg-white/10 border-white/20 text-white placeholder-white/40' : 'bg-white/15 border-white/25 text-white placeholder-white/50'
                    } rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all`}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className={`block ${darkMode ? 'text-white/80' : 'text-white/90'} font-medium mb-2`}>
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 ${
                      darkMode ? 'bg-white/10 border-white/20 text-white placeholder-white/40' : 'bg-white/15 border-white/25 text-white placeholder-white/50'
                    } rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all`}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className={`block ${darkMode ? 'text-white/80' : 'text-white/90'} font-medium mb-2`}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 ${
                    darkMode ? 'bg-white/10 border-white/20 text-white placeholder-white/40' : 'bg-white/15 border-white/25 text-white placeholder-white/50'
                  } rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all`}
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label className={`block ${darkMode ? 'text-white/80' : 'text-white/90'} font-medium mb-2`}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className={`w-full px-4 py-3 ${
                    darkMode ? 'bg-white/10 border-white/20 text-white placeholder-white/40' : 'bg-white/15 border-white/25 text-white placeholder-white/50'
                  } rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all resize-none`}
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group/btn w-full py-4 bg-gradient-to-r from-lime-700 via-green-800 to-brown-700 text-white font-bold rounded-xl shadow-lg hover:shadow-lime-500/30 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-lime-600 via-green-700 to-brown-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-2">
                  {isSubmitting ? (
                    <>
                      <span className="text-xl animate-spin">⏳</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <span className="text-xl">🚀</span>
                      Send Message
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
