import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Check localStorage for saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    // Apply dark mode class to html element
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all data from Python backend
        const response = await axios.get('http://localhost:8000/api/all');
        setData(response.data);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load portfolio data. Please ensure the Python backend is running.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-navy-950' : 'bg-secondary-100'}`}>
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-lime-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className={`${darkMode ? 'text-lime-400' : 'text-navy-800'} text-lg`}>Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-navy-950' : 'bg-secondary-100'}`}>
        <div className="text-center p-8">
          <i className="bi bi-exclamation-triangle text-6xl text-lime-500 mb-4"></i>
          <h1 className={`text-2xl font-bold ${darkMode ? 'text-lime-400' : 'text-navy-800'} mb-2`}>Oops!</h1>
          <p className={`${darkMode ? 'text-white/70' : 'text-secondary-600'} mb-4`}>{error}</p>
          <p className={`text-sm ${darkMode ? 'text-white/50' : 'text-secondary-500'}`}>
            Run <code className={`${darkMode ? 'bg-navy-800' : 'bg-secondary-200'} px-2 py-1 rounded`}>npm run backend</code> to start the backend server
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-navy-950' : 'bg-white'}`}>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero profile={data?.profile} darkMode={darkMode} />
        <About
          summary={data?.profile?.summary}
          education={data?.education}
          certifications={data?.certifications}
          darkMode={darkMode}
        />
        <Experience experience={data?.experience} darkMode={darkMode} />
        <Skills skills={data?.skills} darkMode={darkMode} />
        <Projects projects={data?.projects} achievements={data?.achievements} darkMode={darkMode} />
        <Testimonials darkMode={darkMode} />
        <Contact profile={data?.profile} contact={data?.contact} darkMode={darkMode} />
      </main>
      <Footer profile={data?.profile} darkMode={darkMode} />
    </div>
  );
}

export default App;
