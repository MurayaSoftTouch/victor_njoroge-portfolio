import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all data from json-server endpoints
        const [profile, education, certifications, experience, skills, projects, achievements, contact] = await Promise.all([
          axios.get('http://localhost:5000/profile'),
          axios.get('http://localhost:5000/education'),
          axios.get('http://localhost:5000/certifications'),
          axios.get('http://localhost:5000/experience'),
          axios.get('http://localhost:5000/skills'),
          axios.get('http://localhost:5000/projects'),
          axios.get('http://localhost:5000/achievements'),
          axios.get('http://localhost:5000/contact'),
        ]);

        setData({
          profile: profile.data,
          education: education.data,
          certifications: certifications.data,
          experience: experience.data,
          skills: skills.data,
          projects: projects.data,
          achievements: achievements.data,
          contact: contact.data,
        });
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load portfolio data. Please ensure the JSON server is running.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center gradient-bg">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-secondary-100">
        <div className="text-center p-8">
          <i className="bi bi-exclamation-triangle text-6xl text-primary-600 mb-4"></i>
          <h1 className="text-2xl font-bold text-secondary-800 mb-2">Oops!</h1>
          <p className="text-secondary-600 mb-4">{error}</p>
          <p className="text-sm text-secondary-500">
            Run <code className="bg-secondary-200 px-2 py-1 rounded">npm run server</code> to start the data server
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero profile={data?.profile} />
        <About
          summary={data?.profile?.summary}
          education={data?.education}
          certifications={data?.certifications}
        />
        <Experience experience={data?.experience} />
        <Skills skills={data?.skills} />
        <Projects projects={data?.projects} achievements={data?.achievements} />
        <Contact profile={data?.profile} contact={data?.contact} />
      </main>
      <Footer profile={data?.profile} />
    </div>
  );
}

export default App;
