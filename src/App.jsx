import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import ParticleBackground from './components/ParticleBackground';
import AnimatedGradient from './components/AnimatedGradient';
import LoadingScreen from './components/LoadingScreen';
import Hero from './pages/Hero';
import About from './pages/About';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import GitHubProjects from './pages/GitHubProjects';
import Achievements from './pages/Achievements';
import CreativeWork from './pages/CreativeWork';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import LegalSections from './pages/LegalSections';
import Footer from './pages/Footer';
import { useGitHubRepos } from './hooks/useCustom';
import { GITHUB_USERNAME } from './config/featuredProjects';
import './styles/globals.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { portfolio, loading: portfolioLoading, error: portfolioError, usingCache } = useGitHubRepos(GITHUB_USERNAME);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const showLoading = isLoading || portfolioLoading;

  return (
    <AnimatePresence>
      {showLoading ? (
        <LoadingScreen key="loading" />
      ) : (
        <main key="main" className="relative w-full overflow-x-hidden bg-dark-bg text-white">
          {/* Background Elements */}
          <AnimatedGradient />
          <ParticleBackground count={40} />

          {/* Navigation */}
          <Navigation />

          {/* Sections */}
          <Hero portfolio={portfolio} />
          <About portfolio={portfolio} />
          <Education />
          <Skills portfolio={portfolio} />
          <Projects portfolio={portfolio} />
          <GitHubProjects portfolio={portfolio} portfolioError={portfolioError} usingCache={usingCache} />
          <Achievements portfolio={portfolio} />
          <CreativeWork portfolio={portfolio} />
          <Resume portfolio={portfolio} />
          <Contact />
          <LegalSections />
          <Footer />

          {/* Scroll Progress Bar */}
          <ProgressBar />
        </main>
      )}
    </AnimatePresence>
  );
}

// Progress bar component
const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-16 left-0 h-1 bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple"
      style={{ width: `${progress}%` }}
    />
  );
};

export default App;
