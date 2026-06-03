import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaTwitch, FaInstagram } from 'react-icons/fa';
import ScrollIndicator from '../components/ScrollIndicator';
import { ASSET_PATHS, socialLinks } from '../utils/constants';
import { FiMail } from "react-icons/fi";

const Hero = ({ portfolio }) => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingTexts = [
    'AI & ML Developer',
    'Spring Boot Backend Developer',
    'Android Developer',
    'Full Stack Engineer',
    'Problem Solver'
  ];
  const fullText = typingTexts[textIndex];
  const stats = portfolio?.stats || {};
  const summary = portfolio?.summary || 'AI/ML student building practical software systems, automation tools, and product-focused applications.';

  useEffect(() => {
    let timeout;
    const typeSpeed = isDeleting ? 30 : 50;

    if (!isDeleting && displayText.length < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, typeSpeed);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length - 1));
      }, typeSpeed);
    } else if (!isDeleting && displayText.length === fullText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % typingTexts.length);
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, fullText, typingTexts.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Main Content */}
        <div className="text-center">
          {/* Greeting */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-block px-4 py-2 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 mb-6"
            >
              <span className="text-neon-cyan font-medium text-sm">Live GitHub-driven portfolio</span>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mx-auto mb-8 h-36 w-36 overflow-hidden rounded-full border-2 border-neon-cyan/50 bg-dark-card shadow-2xl shadow-neon-cyan/20 sm:h-44 sm:w-44"
          >
            <img
              src={ASSET_PATHS.profilePhoto}
              alt="Khushee Vashisht professional headshot"
              className="h-full w-full object-cover object-top"
              loading="eager"
            />
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-['Poppins']"
          >
            <span className="gradient-text">Khushee Vashisht</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-neon-cyan font-semibold uppercase tracking-wide mb-6"
          >
            AI & ML Developer | Backend Developer | Full Stack Builder
          </motion.p>

          {/* Typing Title */}
          <motion.div variants={itemVariants} className="h-20 mb-8">
            <p className="text-xl md:text-2xl text-gray-300 font-medium h-24 flex items-center justify-center">
              <span className="border-r-2 border-neon-cyan pr-2">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {summary}
          </motion.p>

          {stats.totalRepositories > 0 && (
            <motion.div variants={itemVariants} className="mb-12 grid gap-4 sm:grid-cols-3 max-w-4xl mx-auto">
              {[
                { label: 'Public repos', value: stats.totalRepositories },
                { label: 'Languages', value: stats.languagesUsed },
                { label: 'Active projects', value: stats.activeRepositories },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-dark-border/50 bg-dark-card/40 px-4 py-5">
                  <p className="text-3xl font-bold text-white">{item.value}</p>
                  <p className="mt-1 text-sm text-gray-400">{item.label}</p>
                </div>
              ))}
            </motion.div>
          )}

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            {/* View Projects Button */}
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-neon-blue to-neon-cyan text-dark-bg font-bold text-lg transition-all hover:shadow-lg hover:shadow-neon-cyan/50"
            >
              View Projects
            </motion.a>

            {/* Resume Button */}
            <motion.a
              href={ASSET_PATHS.resume}
              download="Khushee_Vashisht_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg border-2 border-neon-cyan text-neon-cyan font-bold text-lg hover:bg-neon-cyan/10 transition-all"
            >
              <FiDownload className="inline mr-2" />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center mb-16"
          >
            <motion.a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, color: '#06b6d4' }}
              className="p-4 rounded-lg bg-dark-card/50 border border-dark-border hover:border-neon-cyan/50 text-gray-400 hover:text-neon-cyan transition-all"
            >
              <FiGithub size={24} />
            </motion.a>
            <motion.a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, color: '#06b6d4' }}
              className="p-4 rounded-lg bg-dark-card/50 border border-dark-border hover:border-neon-cyan/50 text-gray-400 hover:text-neon-cyan transition-all"
            >
              <FiLinkedin size={24} />
            </motion.a>
            <motion.a
              href={socialLinks.twitch}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, color: '#06b6d4' }}
              className="p-4 rounded-lg bg-dark-card/50 border border-dark-border hover:border-neon-cyan/50 text-gray-400 hover:text-neon-cyan transition-all"
            >
              <FaTwitch size={24} />
            </motion.a>
            <motion.a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, color: '#06b6d4' }}
              className="p-4 rounded-lg bg-dark-card/50 border border-dark-border hover:border-neon-cyan/50 text-gray-400 hover:text-neon-cyan transition-all"
            >
              <FaInstagram size={24} />
            </motion.a>
            <motion.a
              href={`mailto:${socialLinks.gmail}`}
              whileHover={{ scale: 1.15, color: '#06b6d4' }}
              className="p-4 rounded-lg bg-dark-card/50 border border-dark-border hover:border-neon-cyan/50 text-gray-400 hover:text-neon-cyan transition-all"
            >
              <FiMail size={24} />
            </motion.a>
          </motion.div>

          {stats.featuredTechnologies?.length > 0 && (
            <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">Core technologies observed on GitHub</p>
              <div className="flex flex-wrap justify-center gap-2">
                {stats.featuredTechnologies.map((technology) => (
                  <span key={technology} className="rounded-full border border-neon-cyan/20 bg-neon-cyan/10 px-3 py-1 text-sm text-neon-cyan">
                    {technology}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ScrollIndicator />
        </motion.div>
      </motion.div>

      {/* Floating elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-neon-blue/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-neon-purple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;
