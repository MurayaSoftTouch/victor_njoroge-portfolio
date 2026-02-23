import { useState, useEffect } from 'react';

const Testimonials = ({ darkMode = true }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('next');

  // Sample testimonials data - can be fetched from backend
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Project Manager',
      company: 'Tech Solutions Inc.',
      image: '👩‍💼',
      content: 'Victor is an exceptional IT professional. His ability to troubleshoot complex issues and implement efficient solutions is remarkable. He consistently delivers high-quality work under tight deadlines.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Software Engineer',
      company: 'Innovation Labs',
      image: '👨‍💻',
      content: 'Working with Victor on several projects has been a pleasure. His expertise in both IT support and software development makes him a valuable team member. Highly recommended!',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Operations Director',
      company: 'Global Services',
      image: '👩‍🔬',
      content: 'Victor\'s AI implementation skills transformed our workflow. He\'s not just technically skilled but also communicates complex concepts clearly to non-technical stakeholders.',
      rating: 5,
    },
    {
      id: 4,
      name: 'David Park',
      role: 'CTO',
      company: 'StartUp Ventures',
      image: '👨‍🎤',
      content: 'Victor helped us modernize our entire IT infrastructure. His proactive approach and attention to detail ensured a smooth transition with minimal downtime.',
      rating: 5,
    },
  ];

  // Auto-advance testimonials every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection('next');
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setDirection('next');
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setDirection('prev');
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  const goToTestimonial = (index) => {
    if (isAnimating || index === activeIndex) return;
    setDirection(index > activeIndex ? 'next' : 'prev');
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Gradient Background - Navy, Brown */}
      <div className={`absolute inset-0 bg-gradient-to-br ${
        darkMode
          ? 'from-navy-900 via-brown-900 to-navy-950'
          : 'from-navy-800 via-brown-800 to-navy-900'
      }`}></div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Orbs - Muted colors */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-lime-600/15 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-brown-600/15 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-navy-600/15 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className={`section-subtitle ${darkMode ? 'text-lime-400/80' : 'text-lime-300/80'}`}>💬 Testimonials</p>
          <h2 className={`section-title ${darkMode ? 'text-white' : 'text-white'} drop-shadow-lg`}>
            <span className="text-4xl inline-block mr-2">⭐</span>
            What People Say
          </h2>
        </div>

        {/* Testimonial Cards with Slide Transition */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Card */}
          <div className={`relative ${
            darkMode ? 'bg-white/5' : 'bg-white/10'
          } backdrop-blur-lg rounded-3xl p-8 md:p-12 border ${
            darkMode ? 'border-white/10' : 'border-white/20'
          } shadow-2xl overflow-hidden`}>
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-6xl text-lime-500/20 font-serif">"</div>

            <div className="relative">
              {/* Testimonial Content with Slide Animation */}
              <div className={`transition-all duration-500 ease-in-out ${
                isAnimating
                  ? direction === 'next'
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
                  : 'opacity-100 translate-x-0'
              }`}>
                {/* Rating Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <span key={i} className="text-2xl text-yellow-400 animate-pulse" style={{ animationDelay: `${i * 100}ms` }}>
                      ⭐
                    </span>
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className={`text-lg md:text-xl ${darkMode ? 'text-white/90' : 'text-white'} text-center mb-8 leading-relaxed italic`}>
                  {testimonials[activeIndex].content}
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-lime-600 to-green-700 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-3xl">{testimonials[activeIndex].image}</span>
                  </div>
                  <div className="text-left">
                    <h4 className={`font-bold ${darkMode ? 'text-white' : 'text-white'} text-lg`}>
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-lime-400 font-medium">
                      {testimonials[activeIndex].role}
                    </p>
                    <p className={`${darkMode ? 'text-white/60' : 'text-white/70'} text-sm`}>
                      {testimonials[activeIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Icon */}
            <div className="absolute bottom-6 right-6 text-6xl text-lime-500/20 font-serif rotate-180">"</div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
              <div
                key={activeIndex}
                className="h-full bg-gradient-to-r from-lime-500 to-green-600 transition-all duration-300"
                style={{
                  width: isAnimating ? '0%' : '100%',
                  transition: isAnimating ? 'none' : 'width 5s linear',
                }}
              ></div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              disabled={isAnimating}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed ${
                darkMode
                  ? 'bg-white/10 hover:bg-lime-600 text-white border border-white/20'
                  : 'bg-white/20 hover:bg-lime-600 text-white border border-white/30'
              }`}
              aria-label="Previous testimonial"
            >
              <i className="bi bi-chevron-left text-xl"></i>
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'bg-lime-500 w-8'
                      : darkMode
                        ? 'bg-white/30 hover:bg-white/50'
                        : 'bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              disabled={isAnimating}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed ${
                darkMode
                  ? 'bg-white/10 hover:bg-lime-600 text-white border border-white/20'
                  : 'bg-white/20 hover:bg-lime-600 text-white border border-white/30'
              }`}
              aria-label="Next testimonial"
            >
              <i className="bi bi-chevron-right text-xl"></i>
            </button>
          </div>
        </div>

        {/* All Testimonials Grid (Optional - for showing all at once on large screens) */}
        <div className="hidden lg:grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`group relative ${
                darkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-white/10 hover:bg-white/15'
              } backdrop-blur-lg rounded-2xl p-6 border ${
                darkMode ? 'border-white/10' : 'border-white/20'
              } shadow-lg hover:shadow-lime-500/20 transition-all duration-300 hover:scale-105 cursor-pointer`}
              onClick={() => setActiveIndex(testimonial.id - 1)}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-sm">⭐</span>
                ))}
              </div>

              {/* Content Preview */}
              <p className={`${darkMode ? 'text-white/70' : 'text-white/80'} text-sm mb-4 line-clamp-3`}>
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-lime-600 to-green-700 rounded-full flex items-center justify-center">
                  <span className="text-xl">{testimonial.image}</span>
                </div>
                <div>
                  <h5 className={`font-semibold ${darkMode ? 'text-white' : 'text-white'} text-sm`}>
                    {testimonial.name}
                  </h5>
                  <p className="text-lime-400 text-xs">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
