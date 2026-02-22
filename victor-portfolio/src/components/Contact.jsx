import { useState } from 'react';

const Contact = ({ profile, contact }) => {
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
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: 'bi-envelope',
      label: 'Email',
      value: contact?.email || profile?.email,
      href: `mailto:${contact?.email || profile?.email}`,
    },
    {
      icon: 'bi-geo-alt',
      label: 'Location',
      value: contact?.location || profile?.location,
      href: null,
    },
    {
      icon: 'bi-linkedin',
      label: 'LinkedIn',
      value: profile?.linkedin,
      href: `https://${profile?.linkedin}`,
    },
    {
      icon: 'bi-github',
      label: 'GitHub',
      value: profile?.github,
      href: `https://${profile?.github}`,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle text-white/80">Get In Touch</p>
          <h2 className="section-title text-white">Contact Me</h2>
          <p className="text-white/80 max-w-2xl mx-auto mt-4">
            I'm currently open to new opportunities. Whether you have a question,
            a project idea, or just want to say hi, feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-white/80 mb-8">
                I'm always interested in hearing about new projects and opportunities.
                Let's discuss how we can work together to bring your ideas to life.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <i className={`bi ${info.icon} text-xl text-white`}></i>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith('mailto') ? '_self' : '_blank'}
                          rel="noopener noreferrer"
                          className="text-white font-medium hover:text-primary-200 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Availability Status */}
              <div className="mt-8 p-4 bg-green-500/20 backdrop-blur-md rounded-lg border border-green-400/30">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white font-medium">
                    {contact?.availability || 'Open to opportunities'}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4">
              <a
                href={`mailto:${contact?.email || profile?.email}`}
                className="w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110"
              >
                <i className="bi bi-envelope text-2xl"></i>
              </a>
              <a
                href={`https://${profile?.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110"
              >
                <i className="bi bi-linkedin text-2xl"></i>
              </a>
              <a
                href={`https://${profile?.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110"
              >
                <i className="bi bi-github text-2xl"></i>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-secondary-800 mb-6">
              Send Me a Message
            </h3>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                <i className="bi bi-check-circle-fill text-green-600 text-xl"></i>
                <p className="text-green-700">
                  Message sent successfully! I'll get back to you soon.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-secondary-700 font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-secondary-700 font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-secondary-700 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label className="block text-secondary-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <i className="bi bi-hourglass-split animate-spin"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="bi bi-send"></i>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
